// This example was created using Protovis & jQuery
// Base64 provided by http://www.webtoolkit.info/javascript-base64.html
// Modern web browsers have a builtin function to this as well 'btoa'
// function encode_as_img_and_link(){
//  // Add some critical information
//  $("svg").attr({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"});

//  var svg = $("#chart-canvas").html();
//  var b64 = Base64.encode(svg); // or use btoa if supported

//  // Works in recent Webkit(Chrome)
//  $("body").append($("<img src='data:image/svg+xml;base64,\n"+b64+"' alt='file.svg'/>"));

//  // Works in Firefox 3.6 and Webit and possibly any browser which supports the data-uri
//  $("body").append($("<a href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n"+b64+"' title='file.svg'>Download</a>"));
// }

var version_capacity_table = require('./version_capacity_table');
var error_correction_codewords = require('./error_correction_codewords');

function QRCode(text, correction_level){
    // Error correction level, default to "L"
    this.ecl = (correction_level === undefined ||
        !(/^[LMQH]$/i.test(correction_level))) ? 'L' : correction_level;
    this.text = text.toUpperCase();
    this.data = [];
    this.analyze();
    this.encode();
    this.error_correct();
}

QRCode.prototype.analyze = function(){
    // Set mode, and add mode indicator to data
    // Numeric
    if (/^[0-9]+$/i.test(this.text)){
        this.mode = 00001;
        this.data.push('0', '0', '0', '1');
    }
    // Alphanumeric
    else if (/^[0-9A-Z\s\$\%\*\+\-\.\/\:]+$/i.test(this.text)){
        this.mode = 00010;
        this.data.push('0', '0', '1', '0');
    }

    // Add mode indicator


    // Numeric Mode  00001
    // Alphanumeric Mode   00010
    // Byte Mode   00100
    // Kanji Mode  01000
    // ECI Mode    00111

    // TODO: Add byte mode
    // TODO: Add kanji mode

    // Byte mode
    // If there is a character that is not in the left column of the alphanumeric table but can be encoded in ISO 8859-1, use byte mode.

    // Kanji mode
    // If all of the characters are in the Shift JIS character set, use Kanji mode. 
};
QRCode.prototype.encode = function(){
    // Determine the Smallest Version for the Data
    var smallest = Infinity;
    var best_version;
    for (var version in version_capacity_table[this.ecl][this.mode]){
        var size = version_capacity_table[this.ecl][this.mode][version]
        if (size < smallest && size >= this.text.length){
            smallest = size;
            best_version = version;
        }
    }
    this.version = best_version;

    // Add character count indicator
    var char_count;
    var pad_length = 0;
    if (this.version < 10){
        if (this.mode === 00001){
            pad_length = 10;
        } else if (this.mode === 00010){
            pad_length = 9;
        } else if (this.mode === 00100){
            pad_length = 8;
        } else if (this.mode === 01000){
            pad_length = 8;
        }
    } else if (this.version < 27) {
        if (this.mode === 00001){
            pad_length = 12;
        } else if (this.mode === 00010){
            pad_length = 11;
        } else if (this.mode === 00100){
            pad_length = 16;
        } else if (this.mode === 01000){
            pad_length = 10;
        }
    } else {
        if (this.mode === 00001){
            pad_length = 14;
        } else if (this.mode === 00010){
            pad_length = 13;
        } else if (this.mode === 00100){
            pad_length = 16;
        } else if (this.mode === 01000){
            pad_length = 12;
        }
    }
    char_count = this.text.length.toString(2);
    char_count = pad(char_count, pad_length, '0');
    this.data.push.apply(this.data, char_count.split(''));

    // Encode
    if (this.mode === 00001){
        var binary = this.encode_numeric();
    } else if (this.mode === 00010){
        var binary = this.encode_alphanumeric();
    } else if (this.mode === 00100){
        var binary = this.encode_bytes();
    } else if (this.mode === 01000){
        var binary = this.encode_kanji();
    }
    // Break Up into 8-bit Codewords and Add Pad Bytes if Necessary
    var num_codewords = error_correction_codewords[this.version][this.ecl];
    var data = [];
    for (var i=0; i<binary.length; i+=8){
        this.data.push.apply(this.data, binary.slice(i,i+8).split(''));
    }
    // Padd with at most 4 0s
    var diff = (num_codewords*8) - this.data.length;
    if (diff > 4){
        diff=4;
    }
    while (diff > 0){
        this.data.push('0');
        diff--;
    }
    // Add More 0s to Make the Length a Multiple of 8
    while (this.data.length % 8 !== 0){
        this.data.push('0');
    }

    // Add Pad Bytes if the String is Still too Short
    // Alternate adding 11101100 and 00010001 
    var count = 0;
    while (this.data.length < num_codewords*8){
        if (count % 2 === 0){
            this.data.push('1','1','1','0','1','1','0','0');
        } else {
            this.data.push('0','0','0','1','0','0','0','1');
        }
        count++;
    }
};
QRCode.prototype.encode_numeric = function(){
    // Break text up into groups of three
    // and convert each group into binary
    var converted = [];
    for (var c=0; c<this.text.length; c+=3){
        var binary = parseInt(this.text.slice(c, c+3), 10).toString(2);
        converted.push(binary);
    }
    return converted.join('');
};
QRCode.prototype.encode_alphanumeric = function(){
    // Break up into pairs
    // Create a binary number for each pair
    var converted = [];
    for (var c=0; c<this.text.length; c+=2){
        // 11-bit binary string
        var digit_pair = this.text.slice(c, c+2);
        if (digit_pair.length == 2){
            var binary = ((alpha_vals[digit_pair[0]] * 45) + alpha_vals[digit_pair[1]]).toString(2);
            binary = pad(binary, 11, '0');
        } else {
            var binary = alpha_vals[digit_pair[0]].toString(2);
            binary = pad(binary, 6, '0');
        }
        converted.push(binary);
    }
    return converted.join('');
};
QRCode.prototype.encode_bytes = function(){
    // TODO
};
QRCode.prototype.encode_kanji = function(){
    // TODO
};

QRCode.prototype.initialize = function(){
    // Build matrix
    for (var x=0;x<modules;x++){
        this[x] = {};
        for (var y=0;y<modules;y++){
            this[x][y] = null;
        }
    }
};


var alpha_vals = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
    '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11,
    'C': 12, 'D': 13, 'E': 14, 'F': 15, 'G': 16, 'H': 17,
    'I': 18, 'J': 19, 'K': 20, 'L': 21, 'M': 22, 'N': 23,
    'O': 24, 'P': 25, 'Q': 26, 'R': 27, 'S': 28, 'T': 29,
    'U': 30, 'V': 31, 'W': 32, 'X': 33, 'Y': 34, 'Z': 35,
    ' ': 36, '$': 37, '%': 38, '*': 39, '+': 40, '-': 41,
    '.': 42, '/': 43, ':': 44
}


QRCode.prototype.init = function(){
    // this.version = version;
    var modules = 17 /*+ (version * 4)*/;
    this.modules = modules;
    this.mode = 0;

    // Determine mode

    var bytes = 0;

    // Error Correction Level  Error Correction Capability
    // L   Recovers 7% of data
    // M   Recovers 15% of data
    // Q   Recovers 25% of data
    // H   Recovers 30% of data

    var mode_indicator = {
        0001: [0,0,0,1], // Numeric
        0010: [0,0,1,0], // Alphanumeric
        0100: [0,1,0,0], // Byte
        1000: [1,0,0,0], // Kanji
        0111: [0,1,1,1]  // ECI
    }

    // Encode

    // Numeric
        // Step 1: Break String Up Into Groups of Three
        // Step 2: Convert each group into binary
    // Alphanumeric
        // Break up into pairs
        // Create a binary number for each pair
        // If you are encoding an odd number of characters, as we are here, take the numeric representation of the final character and convert it into a 6-bit binary string. 
    // Step 4: Break Up into 8-bit Codewords and Add Pad Bytes if Necessary
        // Determine the Required Number of Bits for this QR Code
        // Add a Terminator of 0s if Necessary
        // Add More 0s to Make the Length a Multiple of 8
        // Add Pad Bytes if the String is Still too Short

    // Add timing patterns
    for (var x=0; x<modules; x++){
        this[x][6] = (x+1) % 2;
    }
    for (var y=0; y<modules; y++){
        this[6][y] = (y+1) % 2;
    }

    // Add alignment patterns


    // Add finder pattern to upper left/right and bottom left.
    var offset = [{'x':0, 'y':0},{'x':modules-7, 'y':0},{'x':0, 'y':modules-7}];
    for (var i=0; i<3; i++){
        for (var x=0; x<7; x++){
            for (var y=0; y<7; y++){
                var fill = true;
                if ( ((x===1||x===5) && (y!==0&&y!==6)) ||
                     ((y===1||y===5) && (x!==0&&x!==6)) ){
                    this[x+offset[i].x][y+offset[i].y] = 0;
                } else {
                    this[x+offset[i].x][y+offset[i].y] = 1;
                }
                
            }
        }
    }
    // Add separators
    for (var i=0; i<3; i++){
        for (var x=-1; x<8; x++){
            for (var y=-1; y<8; y++){
                if (this[x+offset[i].x]!==undefined &&
                    this[x+offset[i].x][y+offset[i].y]!==undefined){
                    if (x=== -1 || y === -1 || x===7 || y===7){
                        this[x+offset[i].x][y+offset[i].y] = 0;
                    }
                }
            }
        }
    }


}

function drawQR(QR, canvas, size){
    var ctx = canvas.getContext('2d');
    var module_size = Math.floor(size / QR.modules)
    for (var x=0;x<QR.modules;x++){
        for (var y=0;y<QR.modules;y++){
            if (QR[y][x]){
                ctx.fillStyle='black';
            } else {
                ctx.fillStyle='white';
            }
            ctx.fillRect(x*module_size, y*module_size, module_size, module_size);
        }
    }
}

function pad(str, len, padding, right){
    // Pad a string to len with 0s
    // Left pad by default, with optional right padding
    if (right){
        while (str.length < len){
            str = str + padding;
        }
    } else {
        while (str.length < len){
            str = padding + str;
        }
    }
    return str;
}

module.exports = QRCode;

// function VersionError(message) {
//     this.name = "VersionError";
//     this.message = message || "Illegal version number. Version must be between 1 and 40 inclusive.";
// }
// VersionError.prototype = new Error();
// VersionError.prototype.constructor = VersionError;

// QR Code Model 2

// row (from top to bottom), column (from left to right) (i,j), (0,0)=upper left

// Can encode:
// 1) numeric data (digits 0-9);
// 2) alphanumeric data (digits 0-9; upper case letters A -Z; nine other characters: space, $ % * + - . / : );
// 3) 8-bit byte data (JIS 8-bit character set (Latin and Kana) in accordance with JIS X 0201);
// 4) Kanji characters (Shift JIS character set in accordance with JIS X 0208 Annex 1 Shift Coded
// Representation. Note that Kanji characters in QR Code can have values 8140HEX -9FFCHEX and E040HEX -
// EBBFHEX , which can be compacted into 13 bits.)

//A dark module is a binary one and a light module is a binary zero.

//Symbol size (not including quiet zone):
// 21x21 modules to 177x177 modules (Versions 1 to 40, increasing in steps of 4 modules per side)

// Data characters per symbol (for maximum symbol size – Version 40-L):
// 1) numeric data: 7 089 characters
// 2) alphanumeric data: 4 296 characters
// 3) 8-bit byte data: 2 953 characters
// 4) Kanji data: 1 817 characters

// Selectable error correction:
// Four levels of error correction allowing recovery of:
// L 7%
// M 15%
// Q 25%
// H 30%
// of the symbol codewords.