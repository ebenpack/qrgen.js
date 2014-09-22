!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.QRCode=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var error_correction_codewords = {
    38: {'L': 2702, 'H': 1142, 'Q': 1502, 'M': 2102},
    18: {'L': 721, 'H': 313, 'Q': 397, 'M': 563},
    7: {'L': 156, 'H': 66, 'Q': 88, 'M': 124},
    23: {'L': 1094, 'H': 464, 'Q': 614, 'M': 860},
    14: {'L': 461, 'H': 197, 'Q': 261, 'M': 365},
    25: {'L': 1276, 'H': 538, 'Q': 718, 'M': 1000},
    28: {'L': 1531, 'H': 661, 'Q': 871, 'M': 1193},
    9: {'L': 232, 'H': 100, 'Q': 132, 'M': 182},
    33: {'L': 2071, 'H': 901, 'Q': 1171, 'M': 1631},
    3: {'L': 55, 'H': 26, 'Q': 34, 'M': 44},
    20: {'L': 861, 'H': 385, 'Q': 485, 'M': 669},
    5: {'L': 108, 'H': 46, 'Q': 62, 'M': 86},
    40: {'L': 2956, 'H': 1276, 'Q': 1666, 'M': 2334},
    24: {'L': 1174, 'H': 514, 'Q': 664, 'M': 914},
    11: {'L': 324, 'H': 140, 'Q': 180, 'M': 254},
    29: {'L': 1631, 'H': 701, 'Q': 911, 'M': 1267},
    39: {'L': 2812, 'H': 1222, 'Q': 1582, 'M': 2216},
    27: {'L': 1468, 'H': 628, 'Q': 808, 'M': 1128},
    1: {'L': 19, 'H': 9, 'Q': 13, 'M': 16},
    17: {'L': 647, 'H': 283, 'Q': 367, 'M': 507},
    21: {'L': 932, 'H': 406, 'Q': 512, 'M': 714},
    31: {'L': 1843, 'H': 793, 'Q': 1033, 'M': 1455},
    35: {'L': 2306, 'H': 986, 'Q': 1286, 'M': 1812},
    4: {'L': 80, 'H': 36, 'Q': 48, 'M': 64},
    10: {'L': 274, 'H': 122, 'Q': 154, 'M': 216},
    26: {'L': 1370, 'H': 596, 'Q': 754, 'M': 1062},
    16: {'L': 589, 'H': 253, 'Q': 325, 'M': 453},
    36: {'L': 2434, 'H': 1054, 'Q': 1354, 'M': 1914},
    8: {'L': 194, 'H': 86, 'Q': 110, 'M': 154},
    6: {'L': 136, 'H': 60, 'Q': 76, 'M': 108},
    12: {'L': 370, 'H': 158, 'Q': 206, 'M': 290},
    30: {'L': 1735, 'H': 745, 'Q': 985, 'M': 1373},
    37: {'L': 2566, 'H': 1096, 'Q': 1426, 'M': 1992},
    2: {'L': 34, 'H': 16, 'Q': 22, 'M': 28},
    15: {'L': 523, 'H': 223, 'Q': 295, 'M': 415},
    32: {'L': 1955, 'H': 845, 'Q': 1115, 'M': 1541},
    19: {'L': 795, 'H': 341, 'Q': 445, 'M': 627},
    34: {'L': 2191, 'H': 961, 'Q': 1231, 'M': 1725},
    13: {'L': 428, 'H': 180, 'Q': 244, 'M': 334},
    22: {'L': 1006, 'H': 442, 'Q': 568, 'M': 782}
}

module.exports = error_correction_codewords;
},{}],2:[function(_dereq_,module,exports){
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

var version_capacity_table = _dereq_('./version_capacity_table');
var error_correction_codewords = _dereq_('./error_correction_codewords');

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
},{"./error_correction_codewords":1,"./version_capacity_table":3}],3:[function(_dereq_,module,exports){
var version_capacity_table={
    "L":{
        "1":{
            "1":41,"2":77,"3":127,"4":187,"5":255,"6":322,"7":370,"8":461,"9":552,"10":652,"11":772,"12":883,"13":1022,"14":1101,"15":1250,"16":1408,"17":1548,"18":1725,"19":1903,"20":2061,"21":2232,"22":2409,"23":2620,"24":2812,"25":3057,"26":3283,"27":3517,"28":3669,"29":3909,"30":4158,"31":4417,"32":4686,"33":4965,"34":5253,"35":5529,"36":5836,"37":6153,"38":6479,"39":6743,"40":7089
        },
        "8":{
            "1":25,"2":47,"3":77,"4":114,"5":154,"6":195,"7":224,"8":279,"9":335,"10":395,"11":468,"12":535,"13":619,"14":667,"15":758,"16":854,"17":938,"18":1046,"19":1153,"20":1249,"21":1352,"22":1460,"23":1588,"24":1704,"25":1853,"26":1990,"27":2132,"28":2223,"29":2369,"30":2520,"31":2677,"32":2840,"33":3009,"34":3183,"35":3351,"36":3537,"37":3729,"38":3927,"39":4087,"40":4296
        },
        "64":{
            "1":17,"2":32,"3":53,"4":78,"5":106,"6":134,"7":154,"8":192,"9":230,"10":271,"11":321,"12":367,"13":425,"14":458,"15":520,"16":586,"17":644,"18":718,"19":792,"20":858,"21":929,"22":1003,"23":1091,"24":1171,"25":1273,"26":1367,"27":1465,"28":1528,"29":1628,"30":1732,"31":1840,"32":1952,"33":2068,"34":2188,"35":2303,"36":2431,"37":2563,"38":2699,"39":2809,"40":2953
        },
        "512":{
            "1":10,"2":20,"3":32,"4":48,"5":65,"6":82,"7":95,"8":118,"9":141,"10":167,"11":198,"12":226,"13":262,"14":282,"15":320,"16":361,"17":397,"18":442,"19":488,"20":528,"21":572,"22":618,"23":672,"24":721,"25":784,"26":842,"27":902,"28":940,"29":1002,"30":1066,"31":1132,"32":1201,"33":1273,"34":1347,"35":1417,"36":1496,"37":1577,"38":1661,"39":1729,"40":1817
        }
    },
    "M":{
        "1":{
            "1":34,"2":63,"3":101,"4":149,"5":202,"6":255,"7":293,"8":365,"9":432,"10":513,"11":604,"12":691,"13":796,"14":871,"15":991,"16":1082,"17":1212,"18":1346,"19":1500,"20":1600,"21":1708,"22":1872,"23":2059,"24":2188,"25":2395,"26":2544,"27":2701,"28":2857,"29":3035,"30":3289,"31":3486,"32":3693,"33":3909,"34":4134,"35":4343,"36":4588,"37":4775,"38":5039,"39":5313,"40":5596
        },
        "8":{
            "1":20,"2":38,"3":61,"4":90,"5":122,"6":154,"7":178,"8":221,"9":262,"10":311,"11":366,"12":419,"13":483,"14":528,"15":600,"16":656,"17":734,"18":816,"19":909,"20":970,"21":1035,"22":1134,"23":1248,"24":1326,"25":1451,"26":1542,"27":1637,"28":1732,"29":1839,"30":1994,"31":2113,"32":2238,"33":2369,"34":2506,"35":2632,"36":2780,"37":2894,"38":3054,"39":3220,"40":3391
        },
        "64":{
            "1":14,"2":26,"3":42,"4":62,"5":84,"6":106,"7":122,"8":152,"9":180,"10":213,"11":251,"12":287,"13":331,"14":362,"15":412,"16":450,"17":504,"18":560,"19":624,"20":666,"21":711,"22":779,"23":857,"24":911,"25":997,"26":1059,"27":1125,"28":1190,"29":1264,"30":1370,"31":1452,"32":1538,"33":1628,"34":1722,"35":1809,"36":1911,"37":1989,"38":2099,"39":2213,"40":2331
        },
        "512":{
            "1":8,"2":16,"3":26,"4":38,"5":52,"6":65,"7":75,"8":93,"9":111,"10":131,"11":155,"12":177,"13":204,"14":223,"15":254,"16":277,"17":310,"18":345,"19":384,"20":410,"21":438,"22":480,"23":528,"24":561,"25":614,"26":652,"27":692,"28":732,"29":778,"30":843,"31":894,"32":947,"33":1002,"34":1060,"35":1113,"36":1176,"37":1224,"38":1292,"39":1362,"40":1435
        }
    },
    "Q":{
        "1":{
            "1":27,"2":48,"3":77,"4":111,"5":144,"6":178,"7":207,"8":259,"9":312,"10":364,"11":427,"12":489,"13":580,"14":621,"15":703,"16":775,"17":876,"18":948,"19":1063,"20":1159,"21":1224,"22":1358,"23":1468,"24":1588,"25":1718,"26":1804,"27":1933,"28":2085,"29":2181,"30":2358,"31":2473,"32":2670,"33":2805,"34":2949,"35":3081,"36":3244,"37":3417,"38":3599,"39":3791,"40":3993
        },
        "8":{
            "1":16,"2":29,"3":47,"4":67,"5":87,"6":108,"7":125,"8":157,"9":189,"10":221,"11":259,"12":296,"13":352,"14":376,"15":426,"16":470,"17":531,"18":574,"19":644,"20":702,"21":742,"22":823,"23":890,"24":963,"25":1041,"26":1094,"27":1172,"28":1263,"29":1322,"30":1429,"31":1499,"32":1618,"33":1700,"34":1787,"35":1867,"36":1966,"37":2071,"38":2181,"39":2298,"40":2420
        },
        "64":{
            "1":11,"2":20,"3":32,"4":46,"5":60,"6":74,"7":86,"8":108,"9":130,"10":151,"11":177,"12":203,"13":241,"14":258,"15":292,"16":322,"17":364,"18":394,"19":442,"20":482,"21":509,"22":565,"23":611,"24":661,"25":715,"26":751,"27":805,"28":868,"29":908,"30":982,"31":1030,"32":1112,"33":1168,"34":1228,"35":1283,"36":1351,"37":1423,"38":1499,"39":1579,"40":1663
        },
        "512":{
            "1":7,"2":12,"3":20,"4":28,"5":37,"6":45,"7":53,"8":66,"9":80,"10":93,"11":109,"12":125,"13":149,"14":159,"15":180,"16":198,"17":224,"18":243,"19":272,"20":297,"21":314,"22":348,"23":376,"24":407,"25":440,"26":462,"27":496,"28":534,"29":559,"30":604,"31":634,"32":684,"33":719,"34":756,"35":790,"36":832,"37":876,"38":923,"39":972,"40":1024
        }
    },
    "H":{
        "1":{
            "1":17,"2":34,"3":58,"4":82,"5":106,"6":139,"7":154,"8":202,"9":235,"10":288,"11":331,"12":374,"13":427,"14":468,"15":530,"16":602,"17":674,"18":746,"19":813,"20":919,"21":969,"22":1056,"23":1108,"24":1228,"25":1286,"26":1425,"27":1501,"28":1581,"29":1677,"30":1782,"31":1897,"32":2022,"33":2157,"34":2301,"35":2361,"36":2524,"37":2625,"38":2735,"39":2927,"40":3057
        },
        "8":{
            "1":10,"2":20,"3":35,"4":50,"5":64,"6":84,"7":93,"8":122,"9":143,"10":174,"11":200,"12":227,"13":259,"14":283,"15":321,"16":365,"17":408,"18":452,"19":493,"20":557,"21":587,"22":640,"23":672,"24":744,"25":779,"26":864,"27":910,"28":958,"29":1016,"30":1080,"31":1150,"32":1226,"33":1307,"34":1394,"35":1431,"36":1530,"37":1591,"38":1658,"39":1774,"40":1852
        },
        "64":{
            "1":7,"2":14,"3":24,"4":34,"5":44,"6":58,"7":64,"8":84,"9":98,"10":119,"11":137,"12":155,"13":177,"14":194,"15":220,"16":250,"17":280,"18":310,"19":338,"20":382,"21":403,"22":439,"23":461,"24":511,"25":535,"26":593,"27":625,"28":658,"29":698,"30":742,"31":790,"32":842,"33":898,"34":958,"35":983,"36":1051,"37":1093,"38":1139,"39":1219,"40":1273
        },
        "512":{
            "1":4,"2":8,"3":15,"4":21,"5":27,"6":36,"7":39,"8":52,"9":60,"10":74,"11":85,"12":96,"13":109,"14":120,"15":136,"16":154,"17":173,"18":191,"19":208,"20":235,"21":248,"22":270,"23":284,"24":315,"25":330,"26":365,"27":385,"28":405,"29":430,"30":457,"31":486,"32":518,"33":553,"34":590,"35":605,"36":647,"37":673,"38":701,"39":750,"40":784
        }
    }
}

module.exports = version_capacity_table;
},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ViZW5wYWNrL0RvY3VtZW50cy93b3JrL3FyZ2VuLmpzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2ViZW5wYWNrL0RvY3VtZW50cy93b3JrL3FyZ2VuLmpzL3NyYy9lcnJvcl9jb3JyZWN0aW9uX2NvZGV3b3Jkcy5qcyIsIi9ob21lL2ViZW5wYWNrL0RvY3VtZW50cy93b3JrL3FyZ2VuLmpzL3NyYy9mYWtlXzk2ZTJiNGNhLmpzIiwiL2hvbWUvZWJlbnBhY2svRG9jdW1lbnRzL3dvcmsvcXJnZW4uanMvc3JjL3ZlcnNpb25fY2FwYWNpdHlfdGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGVycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzID0ge1xuICAgIDM4OiB7J0wnOiAyNzAyLCAnSCc6IDExNDIsICdRJzogMTUwMiwgJ00nOiAyMTAyfSxcbiAgICAxODogeydMJzogNzIxLCAnSCc6IDMxMywgJ1EnOiAzOTcsICdNJzogNTYzfSxcbiAgICA3OiB7J0wnOiAxNTYsICdIJzogNjYsICdRJzogODgsICdNJzogMTI0fSxcbiAgICAyMzogeydMJzogMTA5NCwgJ0gnOiA0NjQsICdRJzogNjE0LCAnTSc6IDg2MH0sXG4gICAgMTQ6IHsnTCc6IDQ2MSwgJ0gnOiAxOTcsICdRJzogMjYxLCAnTSc6IDM2NX0sXG4gICAgMjU6IHsnTCc6IDEyNzYsICdIJzogNTM4LCAnUSc6IDcxOCwgJ00nOiAxMDAwfSxcbiAgICAyODogeydMJzogMTUzMSwgJ0gnOiA2NjEsICdRJzogODcxLCAnTSc6IDExOTN9LFxuICAgIDk6IHsnTCc6IDIzMiwgJ0gnOiAxMDAsICdRJzogMTMyLCAnTSc6IDE4Mn0sXG4gICAgMzM6IHsnTCc6IDIwNzEsICdIJzogOTAxLCAnUSc6IDExNzEsICdNJzogMTYzMX0sXG4gICAgMzogeydMJzogNTUsICdIJzogMjYsICdRJzogMzQsICdNJzogNDR9LFxuICAgIDIwOiB7J0wnOiA4NjEsICdIJzogMzg1LCAnUSc6IDQ4NSwgJ00nOiA2Njl9LFxuICAgIDU6IHsnTCc6IDEwOCwgJ0gnOiA0NiwgJ1EnOiA2MiwgJ00nOiA4Nn0sXG4gICAgNDA6IHsnTCc6IDI5NTYsICdIJzogMTI3NiwgJ1EnOiAxNjY2LCAnTSc6IDIzMzR9LFxuICAgIDI0OiB7J0wnOiAxMTc0LCAnSCc6IDUxNCwgJ1EnOiA2NjQsICdNJzogOTE0fSxcbiAgICAxMTogeydMJzogMzI0LCAnSCc6IDE0MCwgJ1EnOiAxODAsICdNJzogMjU0fSxcbiAgICAyOTogeydMJzogMTYzMSwgJ0gnOiA3MDEsICdRJzogOTExLCAnTSc6IDEyNjd9LFxuICAgIDM5OiB7J0wnOiAyODEyLCAnSCc6IDEyMjIsICdRJzogMTU4MiwgJ00nOiAyMjE2fSxcbiAgICAyNzogeydMJzogMTQ2OCwgJ0gnOiA2MjgsICdRJzogODA4LCAnTSc6IDExMjh9LFxuICAgIDE6IHsnTCc6IDE5LCAnSCc6IDksICdRJzogMTMsICdNJzogMTZ9LFxuICAgIDE3OiB7J0wnOiA2NDcsICdIJzogMjgzLCAnUSc6IDM2NywgJ00nOiA1MDd9LFxuICAgIDIxOiB7J0wnOiA5MzIsICdIJzogNDA2LCAnUSc6IDUxMiwgJ00nOiA3MTR9LFxuICAgIDMxOiB7J0wnOiAxODQzLCAnSCc6IDc5MywgJ1EnOiAxMDMzLCAnTSc6IDE0NTV9LFxuICAgIDM1OiB7J0wnOiAyMzA2LCAnSCc6IDk4NiwgJ1EnOiAxMjg2LCAnTSc6IDE4MTJ9LFxuICAgIDQ6IHsnTCc6IDgwLCAnSCc6IDM2LCAnUSc6IDQ4LCAnTSc6IDY0fSxcbiAgICAxMDogeydMJzogMjc0LCAnSCc6IDEyMiwgJ1EnOiAxNTQsICdNJzogMjE2fSxcbiAgICAyNjogeydMJzogMTM3MCwgJ0gnOiA1OTYsICdRJzogNzU0LCAnTSc6IDEwNjJ9LFxuICAgIDE2OiB7J0wnOiA1ODksICdIJzogMjUzLCAnUSc6IDMyNSwgJ00nOiA0NTN9LFxuICAgIDM2OiB7J0wnOiAyNDM0LCAnSCc6IDEwNTQsICdRJzogMTM1NCwgJ00nOiAxOTE0fSxcbiAgICA4OiB7J0wnOiAxOTQsICdIJzogODYsICdRJzogMTEwLCAnTSc6IDE1NH0sXG4gICAgNjogeydMJzogMTM2LCAnSCc6IDYwLCAnUSc6IDc2LCAnTSc6IDEwOH0sXG4gICAgMTI6IHsnTCc6IDM3MCwgJ0gnOiAxNTgsICdRJzogMjA2LCAnTSc6IDI5MH0sXG4gICAgMzA6IHsnTCc6IDE3MzUsICdIJzogNzQ1LCAnUSc6IDk4NSwgJ00nOiAxMzczfSxcbiAgICAzNzogeydMJzogMjU2NiwgJ0gnOiAxMDk2LCAnUSc6IDE0MjYsICdNJzogMTk5Mn0sXG4gICAgMjogeydMJzogMzQsICdIJzogMTYsICdRJzogMjIsICdNJzogMjh9LFxuICAgIDE1OiB7J0wnOiA1MjMsICdIJzogMjIzLCAnUSc6IDI5NSwgJ00nOiA0MTV9LFxuICAgIDMyOiB7J0wnOiAxOTU1LCAnSCc6IDg0NSwgJ1EnOiAxMTE1LCAnTSc6IDE1NDF9LFxuICAgIDE5OiB7J0wnOiA3OTUsICdIJzogMzQxLCAnUSc6IDQ0NSwgJ00nOiA2Mjd9LFxuICAgIDM0OiB7J0wnOiAyMTkxLCAnSCc6IDk2MSwgJ1EnOiAxMjMxLCAnTSc6IDE3MjV9LFxuICAgIDEzOiB7J0wnOiA0MjgsICdIJzogMTgwLCAnUSc6IDI0NCwgJ00nOiAzMzR9LFxuICAgIDIyOiB7J0wnOiAxMDA2LCAnSCc6IDQ0MiwgJ1EnOiA1NjgsICdNJzogNzgyfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzOyIsIi8vIFRoaXMgZXhhbXBsZSB3YXMgY3JlYXRlZCB1c2luZyBQcm90b3ZpcyAmIGpRdWVyeVxuLy8gQmFzZTY0IHByb3ZpZGVkIGJ5IGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvL2phdmFzY3JpcHQtYmFzZTY0Lmh0bWxcbi8vIE1vZGVybiB3ZWIgYnJvd3NlcnMgaGF2ZSBhIGJ1aWx0aW4gZnVuY3Rpb24gdG8gdGhpcyBhcyB3ZWxsICdidG9hJ1xuLy8gZnVuY3Rpb24gZW5jb2RlX2FzX2ltZ19hbmRfbGluaygpe1xuLy8gIC8vIEFkZCBzb21lIGNyaXRpY2FsIGluZm9ybWF0aW9uXG4vLyAgJChcInN2Z1wiKS5hdHRyKHsgdmVyc2lvbjogJzEuMScgLCB4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9KTtcblxuLy8gIHZhciBzdmcgPSAkKFwiI2NoYXJ0LWNhbnZhc1wiKS5odG1sKCk7XG4vLyAgdmFyIGI2NCA9IEJhc2U2NC5lbmNvZGUoc3ZnKTsgLy8gb3IgdXNlIGJ0b2EgaWYgc3VwcG9ydGVkXG5cbi8vICAvLyBXb3JrcyBpbiByZWNlbnQgV2Via2l0KENocm9tZSlcbi8vICAkKFwiYm9keVwiKS5hcHBlbmQoJChcIjxpbWcgc3JjPSdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFxcblwiK2I2NCtcIicgYWx0PSdmaWxlLnN2ZycvPlwiKSk7XG5cbi8vICAvLyBXb3JrcyBpbiBGaXJlZm94IDMuNiBhbmQgV2ViaXQgYW5kIHBvc3NpYmx5IGFueSBicm93c2VyIHdoaWNoIHN1cHBvcnRzIHRoZSBkYXRhLXVyaVxuLy8gICQoXCJib2R5XCIpLmFwcGVuZCgkKFwiPGEgaHJlZi1sYW5nPSdpbWFnZS9zdmcreG1sJyBocmVmPSdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFxcblwiK2I2NCtcIicgdGl0bGU9J2ZpbGUuc3ZnJz5Eb3dubG9hZDwvYT5cIikpO1xuLy8gfVxuXG52YXIgdmVyc2lvbl9jYXBhY2l0eV90YWJsZSA9IHJlcXVpcmUoJy4vdmVyc2lvbl9jYXBhY2l0eV90YWJsZScpO1xudmFyIGVycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzID0gcmVxdWlyZSgnLi9lcnJvcl9jb3JyZWN0aW9uX2NvZGV3b3JkcycpO1xuXG5mdW5jdGlvbiBRUkNvZGUodGV4dCwgY29ycmVjdGlvbl9sZXZlbCl7XG4gICAgLy8gRXJyb3IgY29ycmVjdGlvbiBsZXZlbCwgZGVmYXVsdCB0byBcIkxcIlxuICAgIHRoaXMuZWNsID0gKGNvcnJlY3Rpb25fbGV2ZWwgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAhKC9eW0xNUUhdJC9pLnRlc3QoY29ycmVjdGlvbl9sZXZlbCkpKSA/ICdMJyA6IGNvcnJlY3Rpb25fbGV2ZWw7XG4gICAgdGhpcy50ZXh0ID0gdGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuYW5hbHl6ZSgpO1xuICAgIHRoaXMuZW5jb2RlKCk7XG4gICAgdGhpcy5lcnJvcl9jb3JyZWN0KCk7XG59XG5cblFSQ29kZS5wcm90b3R5cGUuYW5hbHl6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gU2V0IG1vZGUsIGFuZCBhZGQgbW9kZSBpbmRpY2F0b3IgdG8gZGF0YVxuICAgIC8vIE51bWVyaWNcbiAgICBpZiAoL15bMC05XSskL2kudGVzdCh0aGlzLnRleHQpKXtcbiAgICAgICAgdGhpcy5tb2RlID0gMDAwMDE7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKCcwJywgJzAnLCAnMCcsICcxJyk7XG4gICAgfVxuICAgIC8vIEFscGhhbnVtZXJpY1xuICAgIGVsc2UgaWYgKC9eWzAtOUEtWlxcc1xcJFxcJVxcKlxcK1xcLVxcLlxcL1xcOl0rJC9pLnRlc3QodGhpcy50ZXh0KSl7XG4gICAgICAgIHRoaXMubW9kZSA9IDAwMDEwO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCgnMCcsICcwJywgJzEnLCAnMCcpO1xuICAgIH1cblxuICAgIC8vIEFkZCBtb2RlIGluZGljYXRvclxuXG5cbiAgICAvLyBOdW1lcmljIE1vZGUgIDAwMDAxXG4gICAgLy8gQWxwaGFudW1lcmljIE1vZGUgICAwMDAxMFxuICAgIC8vIEJ5dGUgTW9kZSAgIDAwMTAwXG4gICAgLy8gS2FuamkgTW9kZSAgMDEwMDBcbiAgICAvLyBFQ0kgTW9kZSAgICAwMDExMVxuXG4gICAgLy8gVE9ETzogQWRkIGJ5dGUgbW9kZVxuICAgIC8vIFRPRE86IEFkZCBrYW5qaSBtb2RlXG5cbiAgICAvLyBCeXRlIG1vZGVcbiAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgbGVmdCBjb2x1bW4gb2YgdGhlIGFscGhhbnVtZXJpYyB0YWJsZSBidXQgY2FuIGJlIGVuY29kZWQgaW4gSVNPIDg4NTktMSwgdXNlIGJ5dGUgbW9kZS5cblxuICAgIC8vIEthbmppIG1vZGVcbiAgICAvLyBJZiBhbGwgb2YgdGhlIGNoYXJhY3RlcnMgYXJlIGluIHRoZSBTaGlmdCBKSVMgY2hhcmFjdGVyIHNldCwgdXNlIEthbmppIG1vZGUuIFxufTtcblFSQ29kZS5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oKXtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIFNtYWxsZXN0IFZlcnNpb24gZm9yIHRoZSBEYXRhXG4gICAgdmFyIHNtYWxsZXN0ID0gSW5maW5pdHk7XG4gICAgdmFyIGJlc3RfdmVyc2lvbjtcbiAgICBmb3IgKHZhciB2ZXJzaW9uIGluIHZlcnNpb25fY2FwYWNpdHlfdGFibGVbdGhpcy5lY2xdW3RoaXMubW9kZV0pe1xuICAgICAgICB2YXIgc2l6ZSA9IHZlcnNpb25fY2FwYWNpdHlfdGFibGVbdGhpcy5lY2xdW3RoaXMubW9kZV1bdmVyc2lvbl1cbiAgICAgICAgaWYgKHNpemUgPCBzbWFsbGVzdCAmJiBzaXplID49IHRoaXMudGV4dC5sZW5ndGgpe1xuICAgICAgICAgICAgc21hbGxlc3QgPSBzaXplO1xuICAgICAgICAgICAgYmVzdF92ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZlcnNpb24gPSBiZXN0X3ZlcnNpb247XG5cbiAgICAvLyBBZGQgY2hhcmFjdGVyIGNvdW50IGluZGljYXRvclxuICAgIHZhciBjaGFyX2NvdW50O1xuICAgIHZhciBwYWRfbGVuZ3RoID0gMDtcbiAgICBpZiAodGhpcy52ZXJzaW9uIDwgMTApe1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAwMDAwMSl7XG4gICAgICAgICAgICBwYWRfbGVuZ3RoID0gMTA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAwMDAxMCl7XG4gICAgICAgICAgICBwYWRfbGVuZ3RoID0gOTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMTAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSA4O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gMDEwMDApe1xuICAgICAgICAgICAgcGFkX2xlbmd0aCA9IDg7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudmVyc2lvbiA8IDI3KSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IDAwMDAxKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMDEwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMTAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxNjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAxMDAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IDAwMDAxKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxNDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMDEwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMTAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxNjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAxMDAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFyX2NvdW50ID0gdGhpcy50ZXh0Lmxlbmd0aC50b1N0cmluZygyKTtcbiAgICBjaGFyX2NvdW50ID0gcGFkKGNoYXJfY291bnQsIHBhZF9sZW5ndGgsICcwJyk7XG4gICAgdGhpcy5kYXRhLnB1c2guYXBwbHkodGhpcy5kYXRhLCBjaGFyX2NvdW50LnNwbGl0KCcnKSk7XG5cbiAgICAvLyBFbmNvZGVcbiAgICBpZiAodGhpcy5tb2RlID09PSAwMDAwMSl7XG4gICAgICAgIHZhciBiaW5hcnkgPSB0aGlzLmVuY29kZV9udW1lcmljKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMDEwKXtcbiAgICAgICAgdmFyIGJpbmFyeSA9IHRoaXMuZW5jb2RlX2FscGhhbnVtZXJpYygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAwMDEwMCl7XG4gICAgICAgIHZhciBiaW5hcnkgPSB0aGlzLmVuY29kZV9ieXRlcygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAwMTAwMCl7XG4gICAgICAgIHZhciBiaW5hcnkgPSB0aGlzLmVuY29kZV9rYW5qaSgpO1xuICAgIH1cbiAgICAvLyBCcmVhayBVcCBpbnRvIDgtYml0IENvZGV3b3JkcyBhbmQgQWRkIFBhZCBCeXRlcyBpZiBOZWNlc3NhcnlcbiAgICB2YXIgbnVtX2NvZGV3b3JkcyA9IGVycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzW3RoaXMudmVyc2lvbl1bdGhpcy5lY2xdO1xuICAgIHZhciBkYXRhID0gW107XG4gICAgZm9yICh2YXIgaT0wOyBpPGJpbmFyeS5sZW5ndGg7IGkrPTgpe1xuICAgICAgICB0aGlzLmRhdGEucHVzaC5hcHBseSh0aGlzLmRhdGEsIGJpbmFyeS5zbGljZShpLGkrOCkuc3BsaXQoJycpKTtcbiAgICB9XG4gICAgLy8gUGFkZCB3aXRoIGF0IG1vc3QgNCAwc1xuICAgIHZhciBkaWZmID0gKG51bV9jb2Rld29yZHMqOCkgLSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIGlmIChkaWZmID4gNCl7XG4gICAgICAgIGRpZmY9NDtcbiAgICB9XG4gICAgd2hpbGUgKGRpZmYgPiAwKXtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goJzAnKTtcbiAgICAgICAgZGlmZi0tO1xuICAgIH1cbiAgICAvLyBBZGQgTW9yZSAwcyB0byBNYWtlIHRoZSBMZW5ndGggYSBNdWx0aXBsZSBvZiA4XG4gICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggJSA4ICE9PSAwKXtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goJzAnKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgUGFkIEJ5dGVzIGlmIHRoZSBTdHJpbmcgaXMgU3RpbGwgdG9vIFNob3J0XG4gICAgLy8gQWx0ZXJuYXRlIGFkZGluZyAxMTEwMTEwMCBhbmQgMDAwMTAwMDEgXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA8IG51bV9jb2Rld29yZHMqOCl7XG4gICAgICAgIGlmIChjb3VudCAlIDIgPT09IDApe1xuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goJzEnLCcxJywnMScsJzAnLCcxJywnMScsJzAnLCcwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCgnMCcsJzAnLCcwJywnMScsJzAnLCcwJywnMCcsJzEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgIH1cbn07XG5RUkNvZGUucHJvdG90eXBlLmVuY29kZV9udW1lcmljID0gZnVuY3Rpb24oKXtcbiAgICAvLyBCcmVhayB0ZXh0IHVwIGludG8gZ3JvdXBzIG9mIHRocmVlXG4gICAgLy8gYW5kIGNvbnZlcnQgZWFjaCBncm91cCBpbnRvIGJpbmFyeVxuICAgIHZhciBjb252ZXJ0ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBjPTA7IGM8dGhpcy50ZXh0Lmxlbmd0aDsgYys9Myl7XG4gICAgICAgIHZhciBiaW5hcnkgPSBwYXJzZUludCh0aGlzLnRleHQuc2xpY2UoYywgYyszKSwgMTApLnRvU3RyaW5nKDIpO1xuICAgICAgICBjb252ZXJ0ZWQucHVzaChiaW5hcnkpO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVkLmpvaW4oJycpO1xufTtcblFSQ29kZS5wcm90b3R5cGUuZW5jb2RlX2FscGhhbnVtZXJpYyA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gQnJlYWsgdXAgaW50byBwYWlyc1xuICAgIC8vIENyZWF0ZSBhIGJpbmFyeSBudW1iZXIgZm9yIGVhY2ggcGFpclxuICAgIHZhciBjb252ZXJ0ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBjPTA7IGM8dGhpcy50ZXh0Lmxlbmd0aDsgYys9Mil7XG4gICAgICAgIC8vIDExLWJpdCBiaW5hcnkgc3RyaW5nXG4gICAgICAgIHZhciBkaWdpdF9wYWlyID0gdGhpcy50ZXh0LnNsaWNlKGMsIGMrMik7XG4gICAgICAgIGlmIChkaWdpdF9wYWlyLmxlbmd0aCA9PSAyKXtcbiAgICAgICAgICAgIHZhciBiaW5hcnkgPSAoKGFscGhhX3ZhbHNbZGlnaXRfcGFpclswXV0gKiA0NSkgKyBhbHBoYV92YWxzW2RpZ2l0X3BhaXJbMV1dKS50b1N0cmluZygyKTtcbiAgICAgICAgICAgIGJpbmFyeSA9IHBhZChiaW5hcnksIDExLCAnMCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGJpbmFyeSA9IGFscGhhX3ZhbHNbZGlnaXRfcGFpclswXV0udG9TdHJpbmcoMik7XG4gICAgICAgICAgICBiaW5hcnkgPSBwYWQoYmluYXJ5LCA2LCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnZlcnRlZC5wdXNoKGJpbmFyeSk7XG4gICAgfVxuICAgIHJldHVybiBjb252ZXJ0ZWQuam9pbignJyk7XG59O1xuUVJDb2RlLnByb3RvdHlwZS5lbmNvZGVfYnl0ZXMgPSBmdW5jdGlvbigpe1xuICAgIC8vIFRPRE9cbn07XG5RUkNvZGUucHJvdG90eXBlLmVuY29kZV9rYW5qaSA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gVE9ET1xufTtcblxuUVJDb2RlLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKXtcbiAgICAvLyBCdWlsZCBtYXRyaXhcbiAgICBmb3IgKHZhciB4PTA7eDxtb2R1bGVzO3grKyl7XG4gICAgICAgIHRoaXNbeF0gPSB7fTtcbiAgICAgICAgZm9yICh2YXIgeT0wO3k8bW9kdWxlczt5Kyspe1xuICAgICAgICAgICAgdGhpc1t4XVt5XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbnZhciBhbHBoYV92YWxzID0ge1xuICAgICcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsXG4gICAgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5LCAnQSc6IDEwLCAnQic6IDExLFxuICAgICdDJzogMTIsICdEJzogMTMsICdFJzogMTQsICdGJzogMTUsICdHJzogMTYsICdIJzogMTcsXG4gICAgJ0knOiAxOCwgJ0onOiAxOSwgJ0snOiAyMCwgJ0wnOiAyMSwgJ00nOiAyMiwgJ04nOiAyMyxcbiAgICAnTyc6IDI0LCAnUCc6IDI1LCAnUSc6IDI2LCAnUic6IDI3LCAnUyc6IDI4LCAnVCc6IDI5LFxuICAgICdVJzogMzAsICdWJzogMzEsICdXJzogMzIsICdYJzogMzMsICdZJzogMzQsICdaJzogMzUsXG4gICAgJyAnOiAzNiwgJyQnOiAzNywgJyUnOiAzOCwgJyonOiAzOSwgJysnOiA0MCwgJy0nOiA0MSxcbiAgICAnLic6IDQyLCAnLyc6IDQzLCAnOic6IDQ0XG59XG5cblxuUVJDb2RlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcbiAgICAvLyB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHZhciBtb2R1bGVzID0gMTcgLyorICh2ZXJzaW9uICogNCkqLztcbiAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzO1xuICAgIHRoaXMubW9kZSA9IDA7XG5cbiAgICAvLyBEZXRlcm1pbmUgbW9kZVxuXG4gICAgdmFyIGJ5dGVzID0gMDtcblxuICAgIC8vIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgIEVycm9yIENvcnJlY3Rpb24gQ2FwYWJpbGl0eVxuICAgIC8vIEwgICBSZWNvdmVycyA3JSBvZiBkYXRhXG4gICAgLy8gTSAgIFJlY292ZXJzIDE1JSBvZiBkYXRhXG4gICAgLy8gUSAgIFJlY292ZXJzIDI1JSBvZiBkYXRhXG4gICAgLy8gSCAgIFJlY292ZXJzIDMwJSBvZiBkYXRhXG5cbiAgICB2YXIgbW9kZV9pbmRpY2F0b3IgPSB7XG4gICAgICAgIDAwMDE6IFswLDAsMCwxXSwgLy8gTnVtZXJpY1xuICAgICAgICAwMDEwOiBbMCwwLDEsMF0sIC8vIEFscGhhbnVtZXJpY1xuICAgICAgICAwMTAwOiBbMCwxLDAsMF0sIC8vIEJ5dGVcbiAgICAgICAgMTAwMDogWzEsMCwwLDBdLCAvLyBLYW5qaVxuICAgICAgICAwMTExOiBbMCwxLDEsMV0gIC8vIEVDSVxuICAgIH1cblxuICAgIC8vIEVuY29kZVxuXG4gICAgLy8gTnVtZXJpY1xuICAgICAgICAvLyBTdGVwIDE6IEJyZWFrIFN0cmluZyBVcCBJbnRvIEdyb3VwcyBvZiBUaHJlZVxuICAgICAgICAvLyBTdGVwIDI6IENvbnZlcnQgZWFjaCBncm91cCBpbnRvIGJpbmFyeVxuICAgIC8vIEFscGhhbnVtZXJpY1xuICAgICAgICAvLyBCcmVhayB1cCBpbnRvIHBhaXJzXG4gICAgICAgIC8vIENyZWF0ZSBhIGJpbmFyeSBudW1iZXIgZm9yIGVhY2ggcGFpclxuICAgICAgICAvLyBJZiB5b3UgYXJlIGVuY29kaW5nIGFuIG9kZCBudW1iZXIgb2YgY2hhcmFjdGVycywgYXMgd2UgYXJlIGhlcmUsIHRha2UgdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGZpbmFsIGNoYXJhY3RlciBhbmQgY29udmVydCBpdCBpbnRvIGEgNi1iaXQgYmluYXJ5IHN0cmluZy4gXG4gICAgLy8gU3RlcCA0OiBCcmVhayBVcCBpbnRvIDgtYml0IENvZGV3b3JkcyBhbmQgQWRkIFBhZCBCeXRlcyBpZiBOZWNlc3NhcnlcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBSZXF1aXJlZCBOdW1iZXIgb2YgQml0cyBmb3IgdGhpcyBRUiBDb2RlXG4gICAgICAgIC8vIEFkZCBhIFRlcm1pbmF0b3Igb2YgMHMgaWYgTmVjZXNzYXJ5XG4gICAgICAgIC8vIEFkZCBNb3JlIDBzIHRvIE1ha2UgdGhlIExlbmd0aCBhIE11bHRpcGxlIG9mIDhcbiAgICAgICAgLy8gQWRkIFBhZCBCeXRlcyBpZiB0aGUgU3RyaW5nIGlzIFN0aWxsIHRvbyBTaG9ydFxuXG4gICAgLy8gQWRkIHRpbWluZyBwYXR0ZXJuc1xuICAgIGZvciAodmFyIHg9MDsgeDxtb2R1bGVzOyB4Kyspe1xuICAgICAgICB0aGlzW3hdWzZdID0gKHgrMSkgJSAyO1xuICAgIH1cbiAgICBmb3IgKHZhciB5PTA7IHk8bW9kdWxlczsgeSsrKXtcbiAgICAgICAgdGhpc1s2XVt5XSA9ICh5KzEpICUgMjtcbiAgICB9XG5cbiAgICAvLyBBZGQgYWxpZ25tZW50IHBhdHRlcm5zXG5cblxuICAgIC8vIEFkZCBmaW5kZXIgcGF0dGVybiB0byB1cHBlciBsZWZ0L3JpZ2h0IGFuZCBib3R0b20gbGVmdC5cbiAgICB2YXIgb2Zmc2V0ID0gW3sneCc6MCwgJ3knOjB9LHsneCc6bW9kdWxlcy03LCAneSc6MH0seyd4JzowLCAneSc6bW9kdWxlcy03fV07XG4gICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKyl7XG4gICAgICAgIGZvciAodmFyIHg9MDsgeDw3OyB4Kyspe1xuICAgICAgICAgICAgZm9yICh2YXIgeT0wOyB5PDc7IHkrKyl7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICggKCh4PT09MXx8eD09PTUpICYmICh5IT09MCYmeSE9PTYpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgKCh5PT09MXx8eT09PTUpICYmICh4IT09MCYmeCE9PTYpKSApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3grb2Zmc2V0W2ldLnhdW3krb2Zmc2V0W2ldLnldID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3grb2Zmc2V0W2ldLnhdW3krb2Zmc2V0W2ldLnldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIHNlcGFyYXRvcnNcbiAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKXtcbiAgICAgICAgZm9yICh2YXIgeD0tMTsgeDw4OyB4Kyspe1xuICAgICAgICAgICAgZm9yICh2YXIgeT0tMTsgeTw4OyB5Kyspe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW3grb2Zmc2V0W2ldLnhdIT09dW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbeCtvZmZzZXRbaV0ueF1beStvZmZzZXRbaV0ueV0hPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoeD09PSAtMSB8fCB5ID09PSAtMSB8fCB4PT09NyB8fCB5PT09Nyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3grb2Zmc2V0W2ldLnhdW3krb2Zmc2V0W2ldLnldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbmZ1bmN0aW9uIGRyYXdRUihRUiwgY2FudmFzLCBzaXplKXtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIG1vZHVsZV9zaXplID0gTWF0aC5mbG9vcihzaXplIC8gUVIubW9kdWxlcylcbiAgICBmb3IgKHZhciB4PTA7eDxRUi5tb2R1bGVzO3grKyl7XG4gICAgICAgIGZvciAodmFyIHk9MDt5PFFSLm1vZHVsZXM7eSsrKXtcbiAgICAgICAgICAgIGlmIChRUlt5XVt4XSl7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT0nYmxhY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPSd3aGl0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoeCptb2R1bGVfc2l6ZSwgeSptb2R1bGVfc2l6ZSwgbW9kdWxlX3NpemUsIG1vZHVsZV9zaXplKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFkKHN0ciwgbGVuLCBwYWRkaW5nLCByaWdodCl7XG4gICAgLy8gUGFkIGEgc3RyaW5nIHRvIGxlbiB3aXRoIDBzXG4gICAgLy8gTGVmdCBwYWQgYnkgZGVmYXVsdCwgd2l0aCBvcHRpb25hbCByaWdodCBwYWRkaW5nXG4gICAgaWYgKHJpZ2h0KXtcbiAgICAgICAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW4pe1xuICAgICAgICAgICAgc3RyID0gc3RyICsgcGFkZGluZztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgbGVuKXtcbiAgICAgICAgICAgIHN0ciA9IHBhZGRpbmcgKyBzdHI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRUkNvZGU7XG5cbi8vIGZ1bmN0aW9uIFZlcnNpb25FcnJvcihtZXNzYWdlKSB7XG4vLyAgICAgdGhpcy5uYW1lID0gXCJWZXJzaW9uRXJyb3JcIjtcbi8vICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8IFwiSWxsZWdhbCB2ZXJzaW9uIG51bWJlci4gVmVyc2lvbiBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNDAgaW5jbHVzaXZlLlwiO1xuLy8gfVxuLy8gVmVyc2lvbkVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuLy8gVmVyc2lvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZlcnNpb25FcnJvcjtcblxuLy8gUVIgQ29kZSBNb2RlbCAyXG5cbi8vIHJvdyAoZnJvbSB0b3AgdG8gYm90dG9tKSwgY29sdW1uIChmcm9tIGxlZnQgdG8gcmlnaHQpIChpLGopLCAoMCwwKT11cHBlciBsZWZ0XG5cbi8vIENhbiBlbmNvZGU6XG4vLyAxKSBudW1lcmljIGRhdGEgKGRpZ2l0cyAwLTkpO1xuLy8gMikgYWxwaGFudW1lcmljIGRhdGEgKGRpZ2l0cyAwLTk7IHVwcGVyIGNhc2UgbGV0dGVycyBBIC1aOyBuaW5lIG90aGVyIGNoYXJhY3RlcnM6IHNwYWNlLCAkICUgKiArIC0gLiAvIDogKTtcbi8vIDMpIDgtYml0IGJ5dGUgZGF0YSAoSklTIDgtYml0IGNoYXJhY3RlciBzZXQgKExhdGluIGFuZCBLYW5hKSBpbiBhY2NvcmRhbmNlIHdpdGggSklTIFggMDIwMSk7XG4vLyA0KSBLYW5qaSBjaGFyYWN0ZXJzIChTaGlmdCBKSVMgY2hhcmFjdGVyIHNldCBpbiBhY2NvcmRhbmNlIHdpdGggSklTIFggMDIwOCBBbm5leCAxIFNoaWZ0IENvZGVkXG4vLyBSZXByZXNlbnRhdGlvbi4gTm90ZSB0aGF0IEthbmppIGNoYXJhY3RlcnMgaW4gUVIgQ29kZSBjYW4gaGF2ZSB2YWx1ZXMgODE0MEhFWCAtOUZGQ0hFWCBhbmQgRTA0MEhFWCAtXG4vLyBFQkJGSEVYICwgd2hpY2ggY2FuIGJlIGNvbXBhY3RlZCBpbnRvIDEzIGJpdHMuKVxuXG4vL0EgZGFyayBtb2R1bGUgaXMgYSBiaW5hcnkgb25lIGFuZCBhIGxpZ2h0IG1vZHVsZSBpcyBhIGJpbmFyeSB6ZXJvLlxuXG4vL1N5bWJvbCBzaXplIChub3QgaW5jbHVkaW5nIHF1aWV0IHpvbmUpOlxuLy8gMjF4MjEgbW9kdWxlcyB0byAxNzd4MTc3IG1vZHVsZXMgKFZlcnNpb25zIDEgdG8gNDAsIGluY3JlYXNpbmcgaW4gc3RlcHMgb2YgNCBtb2R1bGVzIHBlciBzaWRlKVxuXG4vLyBEYXRhIGNoYXJhY3RlcnMgcGVyIHN5bWJvbCAoZm9yIG1heGltdW0gc3ltYm9sIHNpemUg4oCTIFZlcnNpb24gNDAtTCk6XG4vLyAxKSBudW1lcmljIGRhdGE6IDcgMDg5IGNoYXJhY3RlcnNcbi8vIDIpIGFscGhhbnVtZXJpYyBkYXRhOiA0IDI5NiBjaGFyYWN0ZXJzXG4vLyAzKSA4LWJpdCBieXRlIGRhdGE6IDIgOTUzIGNoYXJhY3RlcnNcbi8vIDQpIEthbmppIGRhdGE6IDEgODE3IGNoYXJhY3RlcnNcblxuLy8gU2VsZWN0YWJsZSBlcnJvciBjb3JyZWN0aW9uOlxuLy8gRm91ciBsZXZlbHMgb2YgZXJyb3IgY29ycmVjdGlvbiBhbGxvd2luZyByZWNvdmVyeSBvZjpcbi8vIEwgNyVcbi8vIE0gMTUlXG4vLyBRIDI1JVxuLy8gSCAzMCVcbi8vIG9mIHRoZSBzeW1ib2wgY29kZXdvcmRzLiIsInZhciB2ZXJzaW9uX2NhcGFjaXR5X3RhYmxlPXtcbiAgICBcIkxcIjp7XG4gICAgICAgIFwiMVwiOntcbiAgICAgICAgICAgIFwiMVwiOjQxLFwiMlwiOjc3LFwiM1wiOjEyNyxcIjRcIjoxODcsXCI1XCI6MjU1LFwiNlwiOjMyMixcIjdcIjozNzAsXCI4XCI6NDYxLFwiOVwiOjU1MixcIjEwXCI6NjUyLFwiMTFcIjo3NzIsXCIxMlwiOjg4MyxcIjEzXCI6MTAyMixcIjE0XCI6MTEwMSxcIjE1XCI6MTI1MCxcIjE2XCI6MTQwOCxcIjE3XCI6MTU0OCxcIjE4XCI6MTcyNSxcIjE5XCI6MTkwMyxcIjIwXCI6MjA2MSxcIjIxXCI6MjIzMixcIjIyXCI6MjQwOSxcIjIzXCI6MjYyMCxcIjI0XCI6MjgxMixcIjI1XCI6MzA1NyxcIjI2XCI6MzI4MyxcIjI3XCI6MzUxNyxcIjI4XCI6MzY2OSxcIjI5XCI6MzkwOSxcIjMwXCI6NDE1OCxcIjMxXCI6NDQxNyxcIjMyXCI6NDY4NixcIjMzXCI6NDk2NSxcIjM0XCI6NTI1MyxcIjM1XCI6NTUyOSxcIjM2XCI6NTgzNixcIjM3XCI6NjE1MyxcIjM4XCI6NjQ3OSxcIjM5XCI6Njc0MyxcIjQwXCI6NzA4OVxuICAgICAgICB9LFxuICAgICAgICBcIjhcIjp7XG4gICAgICAgICAgICBcIjFcIjoyNSxcIjJcIjo0NyxcIjNcIjo3NyxcIjRcIjoxMTQsXCI1XCI6MTU0LFwiNlwiOjE5NSxcIjdcIjoyMjQsXCI4XCI6Mjc5LFwiOVwiOjMzNSxcIjEwXCI6Mzk1LFwiMTFcIjo0NjgsXCIxMlwiOjUzNSxcIjEzXCI6NjE5LFwiMTRcIjo2NjcsXCIxNVwiOjc1OCxcIjE2XCI6ODU0LFwiMTdcIjo5MzgsXCIxOFwiOjEwNDYsXCIxOVwiOjExNTMsXCIyMFwiOjEyNDksXCIyMVwiOjEzNTIsXCIyMlwiOjE0NjAsXCIyM1wiOjE1ODgsXCIyNFwiOjE3MDQsXCIyNVwiOjE4NTMsXCIyNlwiOjE5OTAsXCIyN1wiOjIxMzIsXCIyOFwiOjIyMjMsXCIyOVwiOjIzNjksXCIzMFwiOjI1MjAsXCIzMVwiOjI2NzcsXCIzMlwiOjI4NDAsXCIzM1wiOjMwMDksXCIzNFwiOjMxODMsXCIzNVwiOjMzNTEsXCIzNlwiOjM1MzcsXCIzN1wiOjM3MjksXCIzOFwiOjM5MjcsXCIzOVwiOjQwODcsXCI0MFwiOjQyOTZcbiAgICAgICAgfSxcbiAgICAgICAgXCI2NFwiOntcbiAgICAgICAgICAgIFwiMVwiOjE3LFwiMlwiOjMyLFwiM1wiOjUzLFwiNFwiOjc4LFwiNVwiOjEwNixcIjZcIjoxMzQsXCI3XCI6MTU0LFwiOFwiOjE5MixcIjlcIjoyMzAsXCIxMFwiOjI3MSxcIjExXCI6MzIxLFwiMTJcIjozNjcsXCIxM1wiOjQyNSxcIjE0XCI6NDU4LFwiMTVcIjo1MjAsXCIxNlwiOjU4NixcIjE3XCI6NjQ0LFwiMThcIjo3MTgsXCIxOVwiOjc5MixcIjIwXCI6ODU4LFwiMjFcIjo5MjksXCIyMlwiOjEwMDMsXCIyM1wiOjEwOTEsXCIyNFwiOjExNzEsXCIyNVwiOjEyNzMsXCIyNlwiOjEzNjcsXCIyN1wiOjE0NjUsXCIyOFwiOjE1MjgsXCIyOVwiOjE2MjgsXCIzMFwiOjE3MzIsXCIzMVwiOjE4NDAsXCIzMlwiOjE5NTIsXCIzM1wiOjIwNjgsXCIzNFwiOjIxODgsXCIzNVwiOjIzMDMsXCIzNlwiOjI0MzEsXCIzN1wiOjI1NjMsXCIzOFwiOjI2OTksXCIzOVwiOjI4MDksXCI0MFwiOjI5NTNcbiAgICAgICAgfSxcbiAgICAgICAgXCI1MTJcIjp7XG4gICAgICAgICAgICBcIjFcIjoxMCxcIjJcIjoyMCxcIjNcIjozMixcIjRcIjo0OCxcIjVcIjo2NSxcIjZcIjo4MixcIjdcIjo5NSxcIjhcIjoxMTgsXCI5XCI6MTQxLFwiMTBcIjoxNjcsXCIxMVwiOjE5OCxcIjEyXCI6MjI2LFwiMTNcIjoyNjIsXCIxNFwiOjI4MixcIjE1XCI6MzIwLFwiMTZcIjozNjEsXCIxN1wiOjM5NyxcIjE4XCI6NDQyLFwiMTlcIjo0ODgsXCIyMFwiOjUyOCxcIjIxXCI6NTcyLFwiMjJcIjo2MTgsXCIyM1wiOjY3MixcIjI0XCI6NzIxLFwiMjVcIjo3ODQsXCIyNlwiOjg0MixcIjI3XCI6OTAyLFwiMjhcIjo5NDAsXCIyOVwiOjEwMDIsXCIzMFwiOjEwNjYsXCIzMVwiOjExMzIsXCIzMlwiOjEyMDEsXCIzM1wiOjEyNzMsXCIzNFwiOjEzNDcsXCIzNVwiOjE0MTcsXCIzNlwiOjE0OTYsXCIzN1wiOjE1NzcsXCIzOFwiOjE2NjEsXCIzOVwiOjE3MjksXCI0MFwiOjE4MTdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJNXCI6e1xuICAgICAgICBcIjFcIjp7XG4gICAgICAgICAgICBcIjFcIjozNCxcIjJcIjo2MyxcIjNcIjoxMDEsXCI0XCI6MTQ5LFwiNVwiOjIwMixcIjZcIjoyNTUsXCI3XCI6MjkzLFwiOFwiOjM2NSxcIjlcIjo0MzIsXCIxMFwiOjUxMyxcIjExXCI6NjA0LFwiMTJcIjo2OTEsXCIxM1wiOjc5NixcIjE0XCI6ODcxLFwiMTVcIjo5OTEsXCIxNlwiOjEwODIsXCIxN1wiOjEyMTIsXCIxOFwiOjEzNDYsXCIxOVwiOjE1MDAsXCIyMFwiOjE2MDAsXCIyMVwiOjE3MDgsXCIyMlwiOjE4NzIsXCIyM1wiOjIwNTksXCIyNFwiOjIxODgsXCIyNVwiOjIzOTUsXCIyNlwiOjI1NDQsXCIyN1wiOjI3MDEsXCIyOFwiOjI4NTcsXCIyOVwiOjMwMzUsXCIzMFwiOjMyODksXCIzMVwiOjM0ODYsXCIzMlwiOjM2OTMsXCIzM1wiOjM5MDksXCIzNFwiOjQxMzQsXCIzNVwiOjQzNDMsXCIzNlwiOjQ1ODgsXCIzN1wiOjQ3NzUsXCIzOFwiOjUwMzksXCIzOVwiOjUzMTMsXCI0MFwiOjU1OTZcbiAgICAgICAgfSxcbiAgICAgICAgXCI4XCI6e1xuICAgICAgICAgICAgXCIxXCI6MjAsXCIyXCI6MzgsXCIzXCI6NjEsXCI0XCI6OTAsXCI1XCI6MTIyLFwiNlwiOjE1NCxcIjdcIjoxNzgsXCI4XCI6MjIxLFwiOVwiOjI2MixcIjEwXCI6MzExLFwiMTFcIjozNjYsXCIxMlwiOjQxOSxcIjEzXCI6NDgzLFwiMTRcIjo1MjgsXCIxNVwiOjYwMCxcIjE2XCI6NjU2LFwiMTdcIjo3MzQsXCIxOFwiOjgxNixcIjE5XCI6OTA5LFwiMjBcIjo5NzAsXCIyMVwiOjEwMzUsXCIyMlwiOjExMzQsXCIyM1wiOjEyNDgsXCIyNFwiOjEzMjYsXCIyNVwiOjE0NTEsXCIyNlwiOjE1NDIsXCIyN1wiOjE2MzcsXCIyOFwiOjE3MzIsXCIyOVwiOjE4MzksXCIzMFwiOjE5OTQsXCIzMVwiOjIxMTMsXCIzMlwiOjIyMzgsXCIzM1wiOjIzNjksXCIzNFwiOjI1MDYsXCIzNVwiOjI2MzIsXCIzNlwiOjI3ODAsXCIzN1wiOjI4OTQsXCIzOFwiOjMwNTQsXCIzOVwiOjMyMjAsXCI0MFwiOjMzOTFcbiAgICAgICAgfSxcbiAgICAgICAgXCI2NFwiOntcbiAgICAgICAgICAgIFwiMVwiOjE0LFwiMlwiOjI2LFwiM1wiOjQyLFwiNFwiOjYyLFwiNVwiOjg0LFwiNlwiOjEwNixcIjdcIjoxMjIsXCI4XCI6MTUyLFwiOVwiOjE4MCxcIjEwXCI6MjEzLFwiMTFcIjoyNTEsXCIxMlwiOjI4NyxcIjEzXCI6MzMxLFwiMTRcIjozNjIsXCIxNVwiOjQxMixcIjE2XCI6NDUwLFwiMTdcIjo1MDQsXCIxOFwiOjU2MCxcIjE5XCI6NjI0LFwiMjBcIjo2NjYsXCIyMVwiOjcxMSxcIjIyXCI6Nzc5LFwiMjNcIjo4NTcsXCIyNFwiOjkxMSxcIjI1XCI6OTk3LFwiMjZcIjoxMDU5LFwiMjdcIjoxMTI1LFwiMjhcIjoxMTkwLFwiMjlcIjoxMjY0LFwiMzBcIjoxMzcwLFwiMzFcIjoxNDUyLFwiMzJcIjoxNTM4LFwiMzNcIjoxNjI4LFwiMzRcIjoxNzIyLFwiMzVcIjoxODA5LFwiMzZcIjoxOTExLFwiMzdcIjoxOTg5LFwiMzhcIjoyMDk5LFwiMzlcIjoyMjEzLFwiNDBcIjoyMzMxXG4gICAgICAgIH0sXG4gICAgICAgIFwiNTEyXCI6e1xuICAgICAgICAgICAgXCIxXCI6OCxcIjJcIjoxNixcIjNcIjoyNixcIjRcIjozOCxcIjVcIjo1MixcIjZcIjo2NSxcIjdcIjo3NSxcIjhcIjo5MyxcIjlcIjoxMTEsXCIxMFwiOjEzMSxcIjExXCI6MTU1LFwiMTJcIjoxNzcsXCIxM1wiOjIwNCxcIjE0XCI6MjIzLFwiMTVcIjoyNTQsXCIxNlwiOjI3NyxcIjE3XCI6MzEwLFwiMThcIjozNDUsXCIxOVwiOjM4NCxcIjIwXCI6NDEwLFwiMjFcIjo0MzgsXCIyMlwiOjQ4MCxcIjIzXCI6NTI4LFwiMjRcIjo1NjEsXCIyNVwiOjYxNCxcIjI2XCI6NjUyLFwiMjdcIjo2OTIsXCIyOFwiOjczMixcIjI5XCI6Nzc4LFwiMzBcIjo4NDMsXCIzMVwiOjg5NCxcIjMyXCI6OTQ3LFwiMzNcIjoxMDAyLFwiMzRcIjoxMDYwLFwiMzVcIjoxMTEzLFwiMzZcIjoxMTc2LFwiMzdcIjoxMjI0LFwiMzhcIjoxMjkyLFwiMzlcIjoxMzYyLFwiNDBcIjoxNDM1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUVwiOntcbiAgICAgICAgXCIxXCI6e1xuICAgICAgICAgICAgXCIxXCI6MjcsXCIyXCI6NDgsXCIzXCI6NzcsXCI0XCI6MTExLFwiNVwiOjE0NCxcIjZcIjoxNzgsXCI3XCI6MjA3LFwiOFwiOjI1OSxcIjlcIjozMTIsXCIxMFwiOjM2NCxcIjExXCI6NDI3LFwiMTJcIjo0ODksXCIxM1wiOjU4MCxcIjE0XCI6NjIxLFwiMTVcIjo3MDMsXCIxNlwiOjc3NSxcIjE3XCI6ODc2LFwiMThcIjo5NDgsXCIxOVwiOjEwNjMsXCIyMFwiOjExNTksXCIyMVwiOjEyMjQsXCIyMlwiOjEzNTgsXCIyM1wiOjE0NjgsXCIyNFwiOjE1ODgsXCIyNVwiOjE3MTgsXCIyNlwiOjE4MDQsXCIyN1wiOjE5MzMsXCIyOFwiOjIwODUsXCIyOVwiOjIxODEsXCIzMFwiOjIzNTgsXCIzMVwiOjI0NzMsXCIzMlwiOjI2NzAsXCIzM1wiOjI4MDUsXCIzNFwiOjI5NDksXCIzNVwiOjMwODEsXCIzNlwiOjMyNDQsXCIzN1wiOjM0MTcsXCIzOFwiOjM1OTksXCIzOVwiOjM3OTEsXCI0MFwiOjM5OTNcbiAgICAgICAgfSxcbiAgICAgICAgXCI4XCI6e1xuICAgICAgICAgICAgXCIxXCI6MTYsXCIyXCI6MjksXCIzXCI6NDcsXCI0XCI6NjcsXCI1XCI6ODcsXCI2XCI6MTA4LFwiN1wiOjEyNSxcIjhcIjoxNTcsXCI5XCI6MTg5LFwiMTBcIjoyMjEsXCIxMVwiOjI1OSxcIjEyXCI6Mjk2LFwiMTNcIjozNTIsXCIxNFwiOjM3NixcIjE1XCI6NDI2LFwiMTZcIjo0NzAsXCIxN1wiOjUzMSxcIjE4XCI6NTc0LFwiMTlcIjo2NDQsXCIyMFwiOjcwMixcIjIxXCI6NzQyLFwiMjJcIjo4MjMsXCIyM1wiOjg5MCxcIjI0XCI6OTYzLFwiMjVcIjoxMDQxLFwiMjZcIjoxMDk0LFwiMjdcIjoxMTcyLFwiMjhcIjoxMjYzLFwiMjlcIjoxMzIyLFwiMzBcIjoxNDI5LFwiMzFcIjoxNDk5LFwiMzJcIjoxNjE4LFwiMzNcIjoxNzAwLFwiMzRcIjoxNzg3LFwiMzVcIjoxODY3LFwiMzZcIjoxOTY2LFwiMzdcIjoyMDcxLFwiMzhcIjoyMTgxLFwiMzlcIjoyMjk4LFwiNDBcIjoyNDIwXG4gICAgICAgIH0sXG4gICAgICAgIFwiNjRcIjp7XG4gICAgICAgICAgICBcIjFcIjoxMSxcIjJcIjoyMCxcIjNcIjozMixcIjRcIjo0NixcIjVcIjo2MCxcIjZcIjo3NCxcIjdcIjo4NixcIjhcIjoxMDgsXCI5XCI6MTMwLFwiMTBcIjoxNTEsXCIxMVwiOjE3NyxcIjEyXCI6MjAzLFwiMTNcIjoyNDEsXCIxNFwiOjI1OCxcIjE1XCI6MjkyLFwiMTZcIjozMjIsXCIxN1wiOjM2NCxcIjE4XCI6Mzk0LFwiMTlcIjo0NDIsXCIyMFwiOjQ4MixcIjIxXCI6NTA5LFwiMjJcIjo1NjUsXCIyM1wiOjYxMSxcIjI0XCI6NjYxLFwiMjVcIjo3MTUsXCIyNlwiOjc1MSxcIjI3XCI6ODA1LFwiMjhcIjo4NjgsXCIyOVwiOjkwOCxcIjMwXCI6OTgyLFwiMzFcIjoxMDMwLFwiMzJcIjoxMTEyLFwiMzNcIjoxMTY4LFwiMzRcIjoxMjI4LFwiMzVcIjoxMjgzLFwiMzZcIjoxMzUxLFwiMzdcIjoxNDIzLFwiMzhcIjoxNDk5LFwiMzlcIjoxNTc5LFwiNDBcIjoxNjYzXG4gICAgICAgIH0sXG4gICAgICAgIFwiNTEyXCI6e1xuICAgICAgICAgICAgXCIxXCI6NyxcIjJcIjoxMixcIjNcIjoyMCxcIjRcIjoyOCxcIjVcIjozNyxcIjZcIjo0NSxcIjdcIjo1MyxcIjhcIjo2NixcIjlcIjo4MCxcIjEwXCI6OTMsXCIxMVwiOjEwOSxcIjEyXCI6MTI1LFwiMTNcIjoxNDksXCIxNFwiOjE1OSxcIjE1XCI6MTgwLFwiMTZcIjoxOTgsXCIxN1wiOjIyNCxcIjE4XCI6MjQzLFwiMTlcIjoyNzIsXCIyMFwiOjI5NyxcIjIxXCI6MzE0LFwiMjJcIjozNDgsXCIyM1wiOjM3NixcIjI0XCI6NDA3LFwiMjVcIjo0NDAsXCIyNlwiOjQ2MixcIjI3XCI6NDk2LFwiMjhcIjo1MzQsXCIyOVwiOjU1OSxcIjMwXCI6NjA0LFwiMzFcIjo2MzQsXCIzMlwiOjY4NCxcIjMzXCI6NzE5LFwiMzRcIjo3NTYsXCIzNVwiOjc5MCxcIjM2XCI6ODMyLFwiMzdcIjo4NzYsXCIzOFwiOjkyMyxcIjM5XCI6OTcyLFwiNDBcIjoxMDI0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSFwiOntcbiAgICAgICAgXCIxXCI6e1xuICAgICAgICAgICAgXCIxXCI6MTcsXCIyXCI6MzQsXCIzXCI6NTgsXCI0XCI6ODIsXCI1XCI6MTA2LFwiNlwiOjEzOSxcIjdcIjoxNTQsXCI4XCI6MjAyLFwiOVwiOjIzNSxcIjEwXCI6Mjg4LFwiMTFcIjozMzEsXCIxMlwiOjM3NCxcIjEzXCI6NDI3LFwiMTRcIjo0NjgsXCIxNVwiOjUzMCxcIjE2XCI6NjAyLFwiMTdcIjo2NzQsXCIxOFwiOjc0NixcIjE5XCI6ODEzLFwiMjBcIjo5MTksXCIyMVwiOjk2OSxcIjIyXCI6MTA1NixcIjIzXCI6MTEwOCxcIjI0XCI6MTIyOCxcIjI1XCI6MTI4NixcIjI2XCI6MTQyNSxcIjI3XCI6MTUwMSxcIjI4XCI6MTU4MSxcIjI5XCI6MTY3NyxcIjMwXCI6MTc4MixcIjMxXCI6MTg5NyxcIjMyXCI6MjAyMixcIjMzXCI6MjE1NyxcIjM0XCI6MjMwMSxcIjM1XCI6MjM2MSxcIjM2XCI6MjUyNCxcIjM3XCI6MjYyNSxcIjM4XCI6MjczNSxcIjM5XCI6MjkyNyxcIjQwXCI6MzA1N1xuICAgICAgICB9LFxuICAgICAgICBcIjhcIjp7XG4gICAgICAgICAgICBcIjFcIjoxMCxcIjJcIjoyMCxcIjNcIjozNSxcIjRcIjo1MCxcIjVcIjo2NCxcIjZcIjo4NCxcIjdcIjo5MyxcIjhcIjoxMjIsXCI5XCI6MTQzLFwiMTBcIjoxNzQsXCIxMVwiOjIwMCxcIjEyXCI6MjI3LFwiMTNcIjoyNTksXCIxNFwiOjI4MyxcIjE1XCI6MzIxLFwiMTZcIjozNjUsXCIxN1wiOjQwOCxcIjE4XCI6NDUyLFwiMTlcIjo0OTMsXCIyMFwiOjU1NyxcIjIxXCI6NTg3LFwiMjJcIjo2NDAsXCIyM1wiOjY3MixcIjI0XCI6NzQ0LFwiMjVcIjo3NzksXCIyNlwiOjg2NCxcIjI3XCI6OTEwLFwiMjhcIjo5NTgsXCIyOVwiOjEwMTYsXCIzMFwiOjEwODAsXCIzMVwiOjExNTAsXCIzMlwiOjEyMjYsXCIzM1wiOjEzMDcsXCIzNFwiOjEzOTQsXCIzNVwiOjE0MzEsXCIzNlwiOjE1MzAsXCIzN1wiOjE1OTEsXCIzOFwiOjE2NTgsXCIzOVwiOjE3NzQsXCI0MFwiOjE4NTJcbiAgICAgICAgfSxcbiAgICAgICAgXCI2NFwiOntcbiAgICAgICAgICAgIFwiMVwiOjcsXCIyXCI6MTQsXCIzXCI6MjQsXCI0XCI6MzQsXCI1XCI6NDQsXCI2XCI6NTgsXCI3XCI6NjQsXCI4XCI6ODQsXCI5XCI6OTgsXCIxMFwiOjExOSxcIjExXCI6MTM3LFwiMTJcIjoxNTUsXCIxM1wiOjE3NyxcIjE0XCI6MTk0LFwiMTVcIjoyMjAsXCIxNlwiOjI1MCxcIjE3XCI6MjgwLFwiMThcIjozMTAsXCIxOVwiOjMzOCxcIjIwXCI6MzgyLFwiMjFcIjo0MDMsXCIyMlwiOjQzOSxcIjIzXCI6NDYxLFwiMjRcIjo1MTEsXCIyNVwiOjUzNSxcIjI2XCI6NTkzLFwiMjdcIjo2MjUsXCIyOFwiOjY1OCxcIjI5XCI6Njk4LFwiMzBcIjo3NDIsXCIzMVwiOjc5MCxcIjMyXCI6ODQyLFwiMzNcIjo4OTgsXCIzNFwiOjk1OCxcIjM1XCI6OTgzLFwiMzZcIjoxMDUxLFwiMzdcIjoxMDkzLFwiMzhcIjoxMTM5LFwiMzlcIjoxMjE5LFwiNDBcIjoxMjczXG4gICAgICAgIH0sXG4gICAgICAgIFwiNTEyXCI6e1xuICAgICAgICAgICAgXCIxXCI6NCxcIjJcIjo4LFwiM1wiOjE1LFwiNFwiOjIxLFwiNVwiOjI3LFwiNlwiOjM2LFwiN1wiOjM5LFwiOFwiOjUyLFwiOVwiOjYwLFwiMTBcIjo3NCxcIjExXCI6ODUsXCIxMlwiOjk2LFwiMTNcIjoxMDksXCIxNFwiOjEyMCxcIjE1XCI6MTM2LFwiMTZcIjoxNTQsXCIxN1wiOjE3MyxcIjE4XCI6MTkxLFwiMTlcIjoyMDgsXCIyMFwiOjIzNSxcIjIxXCI6MjQ4LFwiMjJcIjoyNzAsXCIyM1wiOjI4NCxcIjI0XCI6MzE1LFwiMjVcIjozMzAsXCIyNlwiOjM2NSxcIjI3XCI6Mzg1LFwiMjhcIjo0MDUsXCIyOVwiOjQzMCxcIjMwXCI6NDU3LFwiMzFcIjo0ODYsXCIzMlwiOjUxOCxcIjMzXCI6NTUzLFwiMzRcIjo1OTAsXCIzNVwiOjYwNSxcIjM2XCI6NjQ3LFwiMzdcIjo2NzMsXCIzOFwiOjcwMSxcIjM5XCI6NzUwLFwiNDBcIjo3ODRcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uX2NhcGFjaXR5X3RhYmxlOyJdfQ==
(2)
});
