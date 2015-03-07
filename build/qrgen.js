!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.QRCode=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var error_correction_codewords = {
    35: {
        'Q': {'g2blocks': 14, 'g2blockcodewords': 25, 'g1blocks': 39, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1286},
        'L': {'g2blocks': 7, 'g2blockcodewords': 122, 'g1blocks': 12, 'g1blockcodewords': 121, 'eccodewordsperblock': 30, 'totalcodewords': 2306},
        'M': {'g2blocks': 26, 'g2blockcodewords': 48, 'g1blocks': 12, 'g1blockcodewords': 47, 'eccodewordsperblock': 28, 'totalcodewords': 1812},
        'H': {'g2blocks': 41, 'g2blockcodewords': 16, 'g1blocks': 22, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 986}
    },
    12: {
        'Q': {'g2blocks': 6, 'g2blockcodewords': 21, 'g1blocks': 4, 'g1blockcodewords': 20, 'eccodewordsperblock': 26, 'totalcodewords': 206},
        'L': {'g2blocks': 2, 'g2blockcodewords': 93, 'g1blocks': 2, 'g1blockcodewords': 92, 'eccodewordsperblock': 24, 'totalcodewords': 370},
        'M': {'g2blocks': 2, 'g2blockcodewords': 37, 'g1blocks': 6, 'g1blockcodewords': 36, 'eccodewordsperblock': 22, 'totalcodewords': 290},
        'H': {'g2blocks': 4, 'g2blockcodewords': 15, 'g1blocks': 7, 'g1blockcodewords': 14, 'eccodewordsperblock': 28, 'totalcodewords': 158}
    },
    30: {
        'Q': {'g2blocks': 25, 'g2blockcodewords': 25, 'g1blocks': 15, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 985},
        'L': {'g2blocks': 10, 'g2blockcodewords': 116, 'g1blocks': 5, 'g1blockcodewords': 115, 'eccodewordsperblock': 30, 'totalcodewords': 1735},
        'M': {'g2blocks': 10, 'g2blockcodewords': 48, 'g1blocks': 19, 'g1blockcodewords': 47, 'eccodewordsperblock': 28, 'totalcodewords': 1373},
        'H': {'g2blocks': 25, 'g2blockcodewords': 16, 'g1blocks': 23, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 745}
    },
    16: {
        'Q': {'g2blocks': 2, 'g2blockcodewords': 20, 'g1blocks': 15, 'g1blockcodewords': 19, 'eccodewordsperblock': 24, 'totalcodewords': 325},
        'L': {'g2blocks': 1, 'g2blockcodewords': 99, 'g1blocks': 5, 'g1blockcodewords': 98, 'eccodewordsperblock': 24, 'totalcodewords': 589},
        'M': {'g2blocks': 3, 'g2blockcodewords': 46, 'g1blocks': 7, 'g1blockcodewords': 45, 'eccodewordsperblock': 28, 'totalcodewords': 453},
        'H': {'g2blocks': 13, 'g2blockcodewords': 16, 'g1blocks': 3, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 253}
    },
    28: {
        'Q': {'g2blocks': 31, 'g2blockcodewords': 25, 'g1blocks': 4, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 871},
        'L': {'g2blocks': 10, 'g2blockcodewords': 118, 'g1blocks': 3, 'g1blockcodewords': 117, 'eccodewordsperblock': 30, 'totalcodewords': 1531},
        'M': {'g2blocks': 23, 'g2blockcodewords': 46, 'g1blocks': 3, 'g1blockcodewords': 45, 'eccodewordsperblock': 28, 'totalcodewords': 1193},
        'H': {'g2blocks': 31, 'g2blockcodewords': 16, 'g1blocks': 11, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 661}
    },
    3: {
        'Q': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 17, 'eccodewordsperblock': 18, 'totalcodewords': 34},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 55, 'eccodewordsperblock': 15, 'totalcodewords': 55},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 44, 'eccodewordsperblock': 26, 'totalcodewords': 44},
        'H': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 13, 'eccodewordsperblock': 22, 'totalcodewords': 26}
    },
    7: {
        'Q': {'g2blocks': 4, 'g2blockcodewords': 15, 'g1blocks': 2, 'g1blockcodewords': 14, 'eccodewordsperblock': 18, 'totalcodewords': 88},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 78, 'eccodewordsperblock': 20, 'totalcodewords': 156},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 4, 'g1blockcodewords': 31, 'eccodewordsperblock': 18, 'totalcodewords': 124},
        'H': {'g2blocks': 1, 'g2blockcodewords': 14, 'g1blocks': 4, 'g1blockcodewords': 13, 'eccodewordsperblock': 26, 'totalcodewords': 66}
    },
    26: {
        'Q': {'g2blocks': 6, 'g2blockcodewords': 23, 'g1blocks': 28, 'g1blockcodewords': 22, 'eccodewordsperblock': 28, 'totalcodewords': 754},
        'L': {'g2blocks': 2, 'g2blockcodewords': 115, 'g1blocks': 10, 'g1blockcodewords': 114, 'eccodewordsperblock': 28, 'totalcodewords': 1370},
        'M': {'g2blocks': 4, 'g2blockcodewords': 47, 'g1blocks': 19, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 1062},
        'H': {'g2blocks': 4, 'g2blockcodewords': 17, 'g1blocks': 33, 'g1blockcodewords': 16, 'eccodewordsperblock': 30, 'totalcodewords': 596}
    },
    25: {
        'Q': {'g2blocks': 22, 'g2blockcodewords': 25, 'g1blocks': 7, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 718},
        'L': {'g2blocks': 4, 'g2blockcodewords': 107, 'g1blocks': 8, 'g1blockcodewords': 106, 'eccodewordsperblock': 26, 'totalcodewords': 1276},
        'M': {'g2blocks': 13, 'g2blockcodewords': 48, 'g1blocks': 8, 'g1blockcodewords': 47, 'eccodewordsperblock': 28, 'totalcodewords': 1000},
        'H': {'g2blocks': 13, 'g2blockcodewords': 16, 'g1blocks': 22, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 538}
    },
    34: {
        'Q': {'g2blocks': 7, 'g2blockcodewords': 25, 'g1blocks': 44, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1231},
        'L': {'g2blocks': 6, 'g2blockcodewords': 116, 'g1blocks': 13, 'g1blockcodewords': 115, 'eccodewordsperblock': 30, 'totalcodewords': 2191},
        'M': {'g2blocks': 23, 'g2blockcodewords': 47, 'g1blocks': 14, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 1725},
        'H': {'g2blocks': 1, 'g2blockcodewords': 17, 'g1blocks': 59, 'g1blockcodewords': 16, 'eccodewordsperblock': 30, 'totalcodewords': 961}
    },
    8: {
        'Q': {'g2blocks': 2, 'g2blockcodewords': 19, 'g1blocks': 4, 'g1blockcodewords': 18, 'eccodewordsperblock': 22, 'totalcodewords': 110},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 97, 'eccodewordsperblock': 24, 'totalcodewords': 194},
        'M': {'g2blocks': 2, 'g2blockcodewords': 39, 'g1blocks': 2, 'g1blockcodewords': 38, 'eccodewordsperblock': 22, 'totalcodewords': 154},
        'H': {'g2blocks': 2, 'g2blockcodewords': 15, 'g1blocks': 4, 'g1blockcodewords': 14, 'eccodewordsperblock': 26, 'totalcodewords': 86}
    },
    29: {
        'Q': {'g2blocks': 37, 'g2blockcodewords': 24, 'g1blocks': 1, 'g1blockcodewords': 23, 'eccodewordsperblock': 30, 'totalcodewords': 911},
        'L': {'g2blocks': 7, 'g2blockcodewords': 117, 'g1blocks': 7, 'g1blockcodewords': 116, 'eccodewordsperblock': 30, 'totalcodewords': 1631},
        'M': {'g2blocks': 7, 'g2blockcodewords': 46, 'g1blocks': 21, 'g1blockcodewords': 45, 'eccodewordsperblock': 28, 'totalcodewords': 1267},
        'H': {'g2blocks': 26, 'g2blockcodewords': 16, 'g1blocks': 19, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 701}
    },
    27: {
        'Q': {'g2blocks': 26, 'g2blockcodewords': 24, 'g1blocks': 8, 'g1blockcodewords': 23, 'eccodewordsperblock': 30, 'totalcodewords': 808},
        'L': {'g2blocks': 4, 'g2blockcodewords': 123, 'g1blocks': 8, 'g1blockcodewords': 122, 'eccodewordsperblock': 30, 'totalcodewords': 1468},
        'M': {'g2blocks': 3, 'g2blockcodewords': 46, 'g1blocks': 22, 'g1blockcodewords': 45, 'eccodewordsperblock': 28, 'totalcodewords': 1128},
        'H': {'g2blocks': 28, 'g2blockcodewords': 16, 'g1blocks': 12, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 628}
    },
    20: {
        'Q': {'g2blocks': 5, 'g2blockcodewords': 25, 'g1blocks': 15, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 485},
        'L': {'g2blocks': 5, 'g2blockcodewords': 108, 'g1blocks': 3, 'g1blockcodewords': 107, 'eccodewordsperblock': 28, 'totalcodewords': 861},
        'M': {'g2blocks': 13, 'g2blockcodewords': 42, 'g1blocks': 3, 'g1blockcodewords': 41, 'eccodewordsperblock': 26, 'totalcodewords': 669},
        'H': {'g2blocks': 10, 'g2blockcodewords': 16, 'g1blocks': 15, 'g1blockcodewords': 15, 'eccodewordsperblock': 28, 'totalcodewords': 385}
    },
    32: {'M': {'g2blocks': 23, 'g2blockcodewords': 47, 'g1blocks': 10, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 1541}, 'Q': {'g2blocks': 35, 'g2blockcodewords': 25, 'g1blocks': 10, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1115},
        'H': {'g2blocks': 35, 'g2blockcodewords': 16, 'g1blocks': 19, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 845}
    },
    9: {
        'Q': {'g2blocks': 4, 'g2blockcodewords': 17, 'g1blocks': 4, 'g1blockcodewords': 16, 'eccodewordsperblock': 20, 'totalcodewords': 132},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 116, 'eccodewordsperblock': 30, 'totalcodewords': 232},
        'M': {'g2blocks': 2, 'g2blockcodewords': 37, 'g1blocks': 3, 'g1blockcodewords': 36, 'eccodewordsperblock': 22, 'totalcodewords': 182},
        'H': {'g2blocks': 4, 'g2blockcodewords': 13, 'g1blocks': 4, 'g1blockcodewords': 12, 'eccodewordsperblock': 24, 'totalcodewords': 100}
    },
    31: {
        'Q': {'g2blocks': 1, 'g2blockcodewords': 25, 'g1blocks': 42, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1033},
        'L': {'g2blocks': 3, 'g2blockcodewords': 116, 'g1blocks': 13, 'g1blockcodewords': 115, 'eccodewordsperblock': 30, 'totalcodewords': 1843},
        'M': {'g2blocks': 29, 'g2blockcodewords': 47, 'g1blocks': 2, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 1455},
        'H': {'g2blocks': 28, 'g2blockcodewords': 16, 'g1blocks': 23, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 793}
    },
    33: {
        'Q': {'g2blocks': 19, 'g2blockcodewords': 25, 'g1blocks': 29, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1171},
        'L': {'g2blocks': 1, 'g2blockcodewords': 116, 'g1blocks': 17, 'g1blockcodewords': 115, 'eccodewordsperblock': 30, 'totalcodewords': 2071},
        'M': {'g2blocks': 21, 'g2blockcodewords': 47, 'g1blocks': 14, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 1631},
        'H': {'g2blocks': 46, 'g2blockcodewords': 16, 'g1blocks': 11, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 901}
    },
    2: {
        'Q': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 22, 'eccodewordsperblock': 22, 'totalcodewords': 22},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 34, 'eccodewordsperblock': 10, 'totalcodewords': 34},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 28, 'eccodewordsperblock': 16, 'totalcodewords': 28},
        'H': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 16, 'eccodewordsperblock': 28, 'totalcodewords': 16}
    },
    4: {
        'Q': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 24, 'eccodewordsperblock': 26, 'totalcodewords': 48},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 80, 'eccodewordsperblock': 20, 'totalcodewords': 80},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 32, 'eccodewordsperblock': 18, 'totalcodewords': 64},
        'H': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 4, 'g1blockcodewords': 9, 'eccodewordsperblock': 16, 'totalcodewords': 36}
    },
    1: {
        'Q': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 13, 'eccodewordsperblock': 13, 'totalcodewords': 13},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 19, 'eccodewordsperblock': 7, 'totalcodewords': 19},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 16, 'eccodewordsperblock': 10, 'totalcodewords': 16},
        'H': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 9, 'eccodewordsperblock': 17, 'totalcodewords': 9}
    },
    13: {
        'Q': {'g2blocks': 4, 'g2blockcodewords': 21, 'g1blocks': 8, 'g1blockcodewords': 20, 'eccodewordsperblock': 24, 'totalcodewords': 244},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 4, 'g1blockcodewords': 107, 'eccodewordsperblock': 26, 'totalcodewords': 428},
        'M': {'g2blocks': 1, 'g2blockcodewords': 38, 'g1blocks': 8, 'g1blockcodewords': 37, 'eccodewordsperblock': 22, 'totalcodewords': 334},
        'H': {'g2blocks': 4, 'g2blockcodewords': 12, 'g1blocks': 12, 'g1blockcodewords': 11, 'eccodewordsperblock': 22, 'totalcodewords': 180}
    },
    39: {
        'Q': {'g2blocks': 22, 'g2blockcodewords': 25, 'g1blocks': 43, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1582},
        'L': {'g2blocks': 4, 'g2blockcodewords': 118, 'g1blocks': 20, 'g1blockcodewords': 117, 'eccodewordsperblock': 30, 'totalcodewords': 2812},
        'M': {'g2blocks': 7, 'g2blockcodewords': 48, 'g1blocks': 40, 'g1blockcodewords': 47, 'eccodewordsperblock': 28, 'totalcodewords': 2216},
        'H': {'g2blocks': 67, 'g2blockcodewords': 16, 'g1blocks': 10, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 1222}
    },
    24: {
        'Q': {'g2blocks': 16, 'g2blockcodewords': 25, 'g1blocks': 11, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 664},
        'L': {'g2blocks': 4, 'g2blockcodewords': 118, 'g1blocks': 6, 'g1blockcodewords': 117, 'eccodewordsperblock': 30, 'totalcodewords': 1174},
        'M': {'g2blocks': 14, 'g2blockcodewords': 46, 'g1blocks': 6, 'g1blockcodewords': 45, 'eccodewordsperblock': 28, 'totalcodewords': 914},
        'H': {'g2blocks': 2, 'g2blockcodewords': 17, 'g1blocks': 30, 'g1blockcodewords': 16, 'eccodewordsperblock': 30, 'totalcodewords': 514}
    },
    18: {
        'Q': {'g2blocks': 1, 'g2blockcodewords': 23, 'g1blocks': 17, 'g1blockcodewords': 22, 'eccodewordsperblock': 28, 'totalcodewords': 397},
        'L': {'g2blocks': 1, 'g2blockcodewords': 121, 'g1blocks': 5, 'g1blockcodewords': 120, 'eccodewordsperblock': 30, 'totalcodewords': 721},
        'M': {'g2blocks': 4, 'g2blockcodewords': 44, 'g1blocks': 9, 'g1blockcodewords': 43, 'eccodewordsperblock': 26, 'totalcodewords': 563},
        'H': {'g2blocks': 19, 'g2blockcodewords': 15, 'g1blocks': 2, 'g1blockcodewords': 14, 'eccodewordsperblock': 28, 'totalcodewords': 313}
    },
    15: {
        'Q': {'g2blocks': 7, 'g2blockcodewords': 25, 'g1blocks': 5, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 295},
        'L': {'g2blocks': 1, 'g2blockcodewords': 88, 'g1blocks': 5, 'g1blockcodewords': 87, 'eccodewordsperblock': 22, 'totalcodewords': 523},
        'M': {'g2blocks': 5, 'g2blockcodewords': 42, 'g1blocks': 5, 'g1blockcodewords': 41, 'eccodewordsperblock': 24, 'totalcodewords': 415},
        'H': {'g2blocks': 7, 'g2blockcodewords': 13, 'g1blocks': 11, 'g1blockcodewords': 12, 'eccodewordsperblock': 24, 'totalcodewords': 223}
    },
    22: {
        'Q': {'g2blocks': 16, 'g2blockcodewords': 25, 'g1blocks': 7, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 568},
        'L': {'g2blocks': 7, 'g2blockcodewords': 112, 'g1blocks': 2, 'g1blockcodewords': 111, 'eccodewordsperblock': 28, 'totalcodewords': 1006},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 17, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 782},
        'H': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 34, 'g1blockcodewords': 13, 'eccodewordsperblock': 24, 'totalcodewords': 442}
    },
    19: {
        'Q': {'g2blocks': 4, 'g2blockcodewords': 22, 'g1blocks': 17, 'g1blockcodewords': 21, 'eccodewordsperblock': 26, 'totalcodewords': 445},
        'L': {'g2blocks': 4, 'g2blockcodewords': 114, 'g1blocks': 3, 'g1blockcodewords': 113, 'eccodewordsperblock': 28, 'totalcodewords': 795},
        'M': {'g2blocks': 11, 'g2blockcodewords': 45, 'g1blocks': 3, 'g1blockcodewords': 44, 'eccodewordsperblock': 26, 'totalcodewords': 627},
        'H': {'g2blocks': 16, 'g2blockcodewords': 14, 'g1blocks': 9, 'g1blockcodewords': 13, 'eccodewordsperblock': 26, 'totalcodewords': 341}
    },
    11: {
        'Q': {'g2blocks': 4, 'g2blockcodewords': 23, 'g1blocks': 4, 'g1blockcodewords': 22, 'eccodewordsperblock': 28, 'totalcodewords': 180},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 4, 'g1blockcodewords': 81, 'eccodewordsperblock': 20, 'totalcodewords': 324},
        'M': {'g2blocks': 4, 'g2blockcodewords': 51, 'g1blocks': 1, 'g1blockcodewords': 50, 'eccodewordsperblock': 30, 'totalcodewords': 254},
        'H': {'g2blocks': 8, 'g2blockcodewords': 13, 'g1blocks': 3, 'g1blockcodewords': 12, 'eccodewordsperblock': 24, 'totalcodewords': 140}
    },
    40: {
        'Q': {'g2blocks': 34, 'g2blockcodewords': 25, 'g1blocks': 34, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1666},
        'L': {'g2blocks': 6, 'g2blockcodewords': 119, 'g1blocks': 19, 'g1blockcodewords': 118, 'eccodewordsperblock': 30, 'totalcodewords': 2956},
        'M': {'g2blocks': 31, 'g2blockcodewords': 48, 'g1blocks': 18, 'g1blockcodewords': 47, 'eccodewordsperblock': 28, 'totalcodewords': 2334},
        'H': {'g2blocks': 61, 'g2blockcodewords': 16, 'g1blocks': 20, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 1276}
    },
    23: {
        'Q': {'g2blocks': 14, 'g2blockcodewords': 25, 'g1blocks': 11, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 614},
        'L': {'g2blocks': 5, 'g2blockcodewords': 122, 'g1blocks': 4, 'g1blockcodewords': 121, 'eccodewordsperblock': 30, 'totalcodewords': 1094},
        'M': {'g2blocks': 14, 'g2blockcodewords': 48, 'g1blocks': 4, 'g1blockcodewords': 47, 'eccodewordsperblock': 28, 'totalcodewords': 860},
        'H': {'g2blocks': 14, 'g2blockcodewords': 16, 'g1blocks': 16, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 464}
    },
    38: {
        'Q': {'g2blocks': 14, 'g2blockcodewords': 25, 'g1blocks': 48, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1502},
        'L': {'g2blocks': 18, 'g2blockcodewords': 123, 'g1blocks': 4, 'g1blockcodewords': 122, 'eccodewordsperblock': 30, 'totalcodewords': 2702},
        'M': {'g2blocks': 32, 'g2blockcodewords': 47, 'g1blocks': 13, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 2102},
        'H': {'g2blocks': 32, 'g2blockcodewords': 16, 'g1blocks': 42, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 1142}
    },
    21: {
        'Q': {'g2blocks': 6, 'g2blockcodewords': 23, 'g1blocks': 17, 'g1blockcodewords': 22, 'eccodewordsperblock': 28, 'totalcodewords': 512},
        'L': {'g2blocks': 4, 'g2blockcodewords': 117, 'g1blocks': 4, 'g1blockcodewords': 116, 'eccodewordsperblock': 28, 'totalcodewords': 932},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 17, 'g1blockcodewords': 42, 'eccodewordsperblock': 26, 'totalcodewords': 714},
        'H': {'g2blocks': 6, 'g2blockcodewords': 17, 'g1blocks': 19, 'g1blockcodewords': 16, 'eccodewordsperblock': 30, 'totalcodewords': 406}
    },
    37: {
        'Q': {'g2blocks': 10, 'g2blockcodewords': 25, 'g1blocks': 49, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1426},
        'L': {'g2blocks': 4, 'g2blockcodewords': 123, 'g1blocks': 17, 'g1blockcodewords': 122, 'eccodewordsperblock': 30, 'totalcodewords': 2566},
        'M': {'g2blocks': 14, 'g2blockcodewords': 47, 'g1blocks': 29, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 1992},
        'H': {'g2blocks': 46, 'g2blockcodewords': 16, 'g1blocks': 24, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 1096}
    },
    17: {
        'Q': {'g2blocks': 15, 'g2blockcodewords': 23, 'g1blocks': 1, 'g1blockcodewords': 22, 'eccodewordsperblock': 28, 'totalcodewords': 367},
        'L': {'g2blocks': 5, 'g2blockcodewords': 108, 'g1blocks': 1, 'g1blockcodewords': 107, 'eccodewordsperblock': 28, 'totalcodewords': 647},
        'M': {'g2blocks': 1, 'g2blockcodewords': 47, 'g1blocks': 10, 'g1blockcodewords': 46, 'eccodewordsperblock': 28, 'totalcodewords': 507},
        'H': {'g2blocks': 17, 'g2blockcodewords': 15, 'g1blocks': 2, 'g1blockcodewords': 14, 'eccodewordsperblock': 28, 'totalcodewords': 283}
    },
    5: {
        'Q': {'g2blocks': 2, 'g2blockcodewords': 16, 'g1blocks': 2, 'g1blockcodewords': 15, 'eccodewordsperblock': 18, 'totalcodewords': 62},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 1, 'g1blockcodewords': 108, 'eccodewordsperblock': 26, 'totalcodewords': 108},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 43, 'eccodewordsperblock': 24, 'totalcodewords': 86},
        'H': {'g2blocks': 2, 'g2blockcodewords': 12, 'g1blocks': 2, 'g1blockcodewords': 11, 'eccodewordsperblock': 22, 'totalcodewords': 46}
    },
    36: {
        'Q': {'g2blocks': 10, 'g2blockcodewords': 25, 'g1blocks': 46, 'g1blockcodewords': 24, 'eccodewordsperblock': 30, 'totalcodewords': 1354},
        'L': {'g2blocks': 14, 'g2blockcodewords': 122, 'g1blocks': 6, 'g1blockcodewords': 121, 'eccodewordsperblock': 30, 'totalcodewords': 2434},
        'M': {'g2blocks': 34, 'g2blockcodewords': 48, 'g1blocks': 6, 'g1blockcodewords': 47, 'eccodewordsperblock': 28, 'totalcodewords': 1914},
        'H': {'g2blocks': 64, 'g2blockcodewords': 16, 'g1blocks': 2, 'g1blockcodewords': 15, 'eccodewordsperblock': 30, 'totalcodewords': 1054}
    },
    10: {
        'Q': {'g2blocks': 2, 'g2blockcodewords': 20, 'g1blocks': 6, 'g1blockcodewords': 19, 'eccodewordsperblock': 24, 'totalcodewords': 154},
        'L': {'g2blocks': 2, 'g2blockcodewords': 69, 'g1blocks': 2, 'g1blockcodewords': 68, 'eccodewordsperblock': 18, 'totalcodewords': 274},
        'M': {'g2blocks': 1, 'g2blockcodewords': 44, 'g1blocks': 4, 'g1blockcodewords': 43, 'eccodewordsperblock': 26, 'totalcodewords': 216},
        'H': {'g2blocks': 2, 'g2blockcodewords': 16, 'g1blocks': 6, 'g1blockcodewords': 15, 'eccodewordsperblock': 28, 'totalcodewords': 122}
    },
    6: {
        'Q': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 4, 'g1blockcodewords': 19, 'eccodewordsperblock': 24, 'totalcodewords': 76},
        'L': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 2, 'g1blockcodewords': 68, 'eccodewordsperblock': 18, 'totalcodewords': 136},
        'M': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 4, 'g1blockcodewords': 27, 'eccodewordsperblock': 16, 'totalcodewords': 108},
        'H': {'g2blocks': 0, 'g2blockcodewords': 0, 'g1blocks': 4, 'g1blockcodewords': 15, 'eccodewordsperblock': 28, 'totalcodewords': 60}
    },
    14: {
        'Q': {'g2blocks': 5, 'g2blockcodewords': 17, 'g1blocks': 11, 'g1blockcodewords': 16, 'eccodewordsperblock': 20, 'totalcodewords': 261},
        'L': {'g2blocks': 1, 'g2blockcodewords': 116, 'g1blocks': 3, 'g1blockcodewords': 115, 'eccodewordsperblock': 30, 'totalcodewords': 461},
        'M': {'g2blocks': 5, 'g2blockcodewords': 41, 'g1blocks': 4, 'g1blockcodewords': 40, 'eccodewordsperblock': 24, 'totalcodewords': 365},
        'H': {'g2blocks': 5, 'g2blockcodewords': 13, 'g1blocks': 11, 'g1blockcodewords': 12, 'eccodewordsperblock': 24, 'totalcodewords': 197}
    }
}


module.exports = error_correction_codewords;
},{}],2:[function(_dereq_,module,exports){
var version_capacity_table = _dereq_('./version_capacity_table');
var error_correction_codewords = _dereq_('./error_correction_codewords');
var galois_field = _dereq_('./galois_field');
var poly = _dereq_('./polynomial');

function QRCode(text, correction_level){
    // Error correction level, default to "L"
    this.ecl = (correction_level === undefined ||
        !(/^[LMQH]$/i.test(correction_level))) ? 'L' : correction_level;
    this.text = text.toUpperCase();
    this.data = [];
    this.analyze();
    this.encode();
    this.error_correct();
    // this.structure();
    // this.module_placement();
    // this.masking();
    // this.version_info();
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
    var num_codewords = error_correction_codewords[this.version][this.ecl]['totalcodewords'];
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
QRCode.prototype.error_correct = function(){
    //  Break Data Codewords into Blocks if Necessary
    var group1 = [];
    var group2 = [];

    var num_g1blocks = error_correction_codewords[this.version][this.ecl]['g1blocks'];
    var num_g1blockcodewords = error_correction_codewords[this.version][this.ecl]['g1blockcodewords'];
    var num_g2blocks = error_correction_codewords[this.version][this.ecl]['g2blocks'];
    var num_g2blockcodewords = error_correction_codewords[this.version][this.ecl]['g2blockcodewords'];
    var index = 0;
    for (var i=0; i<num_g1blocks;i++){
        group1.push([]);
        for (var j=0; j<num_g1blockcodewords;j++){
            var block = this.data.slice(index, index+8);
            group1[i].push(block);
        }
    }
    if (num_g2blocks){
        for (var i=0; i<num_g2blocks;i++){
            group2.push([]);
            for (var j=0; j<num_g2blockcodewords;j++){
                var block = this.data.slice(index, index+8);
                group2[i].push(block);
            }
        }
    }

    var eccodeblocks = error_correction_codewords[this.version][this.ecl]['eccodewordsperblock'];
    var message_poly = [];
    for (var i =0; i<this.data.length;i+=8){
        var num = parseInt(this.data.slice(i, i+8).join(''), 2)
        message_poly.push( num );
    }
    var gen_poly = poly.gen(eccodeblocks);
    // var result = poly.div(message_poly, gen_poly);
    var result = []
    // encode
    for (var i=0; i< eccodeblocks; i++){
        result[i] = 0;
    }
    for (var i=0;i<message_poly.length; i++){
        result[i] = message_poly[i]
    }
    for (var i=0;i<message_poly.length; i++){
        var coef = result[i];
        if (coef !== 0){
            for (var j =0; j<gen_poly.length;j++){
                result[i+j] ^= poly.gf_mul(gen_poly[j], coef)
            }
        }
        result[i] = message_poly[i]
    }
    for (var i=0;i<message_poly.length; i++){
        result[i] = message_poly[i]
    }
    debugger


    // x^10 + α^251x^9 + α^67x^8 + α^46x^7 + α^61x^6 + α^118x^5 + α^70x^4 + α^64x^3 + α^94x^2 + α^32x + α^45

    // Reed-Solomon
        //  Overall, the steps of polynomial long division are:

        // 1. Find the appropriate term to multiply the divisor by. The result of the multiplication should have the same first term as the the dividend (in the first multiplication step) or remainder (in all subsequent multiplication steps).
        // 2. Subtract the result from the dividend (in the first multiplication step) or remainder (in all subsequent multiplication steps).
        // 3. Repeat steps 1 and 2 until it is no longer possible to multiply by an integer, or in other words, it would be necessary to multiply by a fraction. The number at the bottom of the tableau is the remainder.


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
    // Pad a string to specified length with padding character
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
},{"./error_correction_codewords":1,"./galois_field":3,"./polynomial":4,"./version_capacity_table":5}],3:[function(_dereq_,module,exports){
var galois_field = [1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142]

module.exports = galois_field;
},{}],4:[function(_dereq_,module,exports){
var galois_field = _dereq_('./galois_field');
// var log = require('./log_table');
// var exp = require('./antilog_table');

var log = [];
var exp = [];
var x = 1;
exp[0] = 1;

for (var i=1; i<255;i++){
    x <<= 1;
    if (x & 0x100){
      x ^= 0x11d;
    }
    exp[i] = x
    log[x] = i
}
for (var i=255; i<512;i++){
   exp[i] = exp[i-255]
}
log[exp[255]] = 255



function scale(p,x){
    var r = []
    for (var i=0; i < p.length; i++){
        r.push( gf_mul(p[i], x) );
    }
    return r;
}

function add(p,q){
    var maxlen = Math.max(p.length,q.length);
    var r = [];
    for (var i = 0; i < maxlen; i++){
        r.push(0);
    }
    for (var i = 0; i < p.length; i++){
        r[i+r.length-p.length] = p[i];
    }
    for (var i = 0; i < q.length; i++){
        r[i+r.length-q.length] ^= q[i];
    }
    return r;
}

function mul(p, q){
    var len = p.length + q.length - 1;
    var r = [];
    for (var i = 0; i < len; i++){
        r[i] = 0;
    }
    for (var j = 0; j < q.length; j++){
        for (var i = 0; i < p.length; i++){
            r[i+j] ^= gf_mul(p[i], q[j]);
        }
    }
    return r;
}

function eval(p,x){
   var y = p[0]
   for (var i = 1; i < p.length; i++){
      y = gf_mul(y,x) ^ p[i];
   }
   return y
}

function gf_div(x,y){
   if (y===0){
      throw new Error('Zero Division');
   }
   if (x===0){
      return 0;
   }
   return exp[log[x] + 255 - log[y]]
}

function gf_mul(x,y){
   if (x===0 || y===0){
      return 0;
   }
   return exp[log[x] + log[y]]
}

function gen(nsym){
    var g = [1]
    for (var i = 0; i < nsym; i++){
        g = mul(g, [1, exp[i]])
    }
   return g
}

// def rs_encode_msg(msg_in, nsym):
//    gen = rs_generator_poly(nsym)
//    msg_out = [0] * (len(msg_in) + nsym)
//    for i in range(0, len(msg_in)):
//       msg_out[i] = msg_in[i]
//    for i in range(0, len(msg_in)):
//       coef = msg_out[i]
//       if coef != 0:
//          for j in range(0, len(gen)):
//             msg_out[i+j] ^= gf_mul(gen[j], coef)
//    for i in range(0, len(msg_in)):
//       msg_out[i] = msg_in[i]
//    return msg_out

var poly = {
    scale: scale,
    add: add,
    mul: mul,
    eval: eval,
    gen: gen,
    gf_mul: gf_mul
}

module.exports = poly;
},{"./galois_field":3}],5:[function(_dereq_,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ViZW5wYWNrL0RvY3VtZW50cy93b3JrL3FyZ2VuLmpzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2ViZW5wYWNrL0RvY3VtZW50cy93b3JrL3FyZ2VuLmpzL3NyYy9lcnJvcl9jb3JyZWN0aW9uX2NvZGV3b3Jkcy5qcyIsIi9ob21lL2ViZW5wYWNrL0RvY3VtZW50cy93b3JrL3FyZ2VuLmpzL3NyYy9mYWtlXzE2YWM1OTk5LmpzIiwiL2hvbWUvZWJlbnBhY2svRG9jdW1lbnRzL3dvcmsvcXJnZW4uanMvc3JjL2dhbG9pc19maWVsZC5qcyIsIi9ob21lL2ViZW5wYWNrL0RvY3VtZW50cy93b3JrL3FyZ2VuLmpzL3NyYy9wb2x5bm9taWFsLmpzIiwiL2hvbWUvZWJlbnBhY2svRG9jdW1lbnRzL3dvcmsvcXJnZW4uanMvc3JjL3ZlcnNpb25fY2FwYWNpdHlfdGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdGFBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBlcnJvcl9jb3JyZWN0aW9uX2NvZGV3b3JkcyA9IHtcbiAgICAzNToge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAxNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNSwgJ2cxYmxvY2tzJzogMzksICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDEyODZ9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiA3LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDEyMiwgJ2cxYmxvY2tzJzogMTIsICdnMWJsb2NrY29kZXdvcmRzJzogMTIxLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAyMzA2fSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMjYsICdnMmJsb2NrY29kZXdvcmRzJzogNDgsICdnMWJsb2Nrcyc6IDEyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ3LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxODEyfSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogNDEsICdnMmJsb2NrY29kZXdvcmRzJzogMTYsICdnMWJsb2Nrcyc6IDIyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA5ODZ9XG4gICAgfSxcbiAgICAxMjoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiA2LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDIxLCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDIwLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI2LCAndG90YWxjb2Rld29yZHMnOiAyMDZ9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAyLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDkzLCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDkyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI0LCAndG90YWxjb2Rld29yZHMnOiAzNzB9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAyLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDM3LCAnZzFibG9ja3MnOiA2LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDM2LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDIyLCAndG90YWxjb2Rld29yZHMnOiAyOTB9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiA0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZzFibG9ja3MnOiA3LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE0LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxNTh9XG4gICAgfSxcbiAgICAzMDoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAyNSwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNSwgJ2cxYmxvY2tzJzogMTUsICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDk4NX0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDEwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDExNiwgJ2cxYmxvY2tzJzogNSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDE3MzV9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAxMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiA0OCwgJ2cxYmxvY2tzJzogMTksICdnMWJsb2NrY29kZXdvcmRzJzogNDcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDEzNzN9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAyNSwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogMjMsICdnMWJsb2NrY29kZXdvcmRzJzogMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDc0NX1cbiAgICB9LFxuICAgIDE2OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDIsICdnMmJsb2NrY29kZXdvcmRzJzogMjAsICdnMWJsb2Nrcyc6IDE1LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE5LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI0LCAndG90YWxjb2Rld29yZHMnOiAzMjV9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAxLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDk5LCAnZzFibG9ja3MnOiA1LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDk4LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI0LCAndG90YWxjb2Rld29yZHMnOiA1ODl9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAzLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQ2LCAnZzFibG9ja3MnOiA3LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiA0NTN9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAxMywgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogMywgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMjUzfVxuICAgIH0sXG4gICAgMjg6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogMzEsICdnMmJsb2NrY29kZXdvcmRzJzogMjUsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDg3MX0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDEwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDExOCwgJ2cxYmxvY2tzJzogMywgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMTcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDE1MzF9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAyMywgJ2cyYmxvY2tjb2Rld29yZHMnOiA0NiwgJ2cxYmxvY2tzJzogMywgJ2cxYmxvY2tjb2Rld29yZHMnOiA0NSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogMTE5M30sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDMxLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE2LCAnZzFibG9ja3MnOiAxMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogNjYxfVxuICAgIH0sXG4gICAgMzoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDIsICdnMWJsb2NrY29kZXdvcmRzJzogMTcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMTgsICd0b3RhbGNvZGV3b3Jkcyc6IDM0fSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiAxLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDU1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE1LCAndG90YWxjb2Rld29yZHMnOiA1NX0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiA0NCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNiwgJ3RvdGFsY29kZXdvcmRzJzogNDR9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDIsICdnMWJsb2NrY29kZXdvcmRzJzogMTMsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjIsICd0b3RhbGNvZGV3b3Jkcyc6IDI2fVxuICAgIH0sXG4gICAgNzoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiA0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE0LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE4LCAndG90YWxjb2Rld29yZHMnOiA4OH0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMiwgJ2cxYmxvY2tjb2Rld29yZHMnOiA3OCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyMCwgJ3RvdGFsY29kZXdvcmRzJzogMTU2fSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDMxLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE4LCAndG90YWxjb2Rld29yZHMnOiAxMjR9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAxLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE0LCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEzLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI2LCAndG90YWxjb2Rld29yZHMnOiA2Nn1cbiAgICB9LFxuICAgIDI2OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDYsICdnMmJsb2NrY29kZXdvcmRzJzogMjMsICdnMWJsb2Nrcyc6IDI4LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDIyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiA3NTR9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAyLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDExNSwgJ2cxYmxvY2tzJzogMTAsICdnMWJsb2NrY29kZXdvcmRzJzogMTE0LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxMzcwfSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiA0NywgJ2cxYmxvY2tzJzogMTksICdnMWJsb2NrY29kZXdvcmRzJzogNDYsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDEwNjJ9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiA0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE3LCAnZzFibG9ja3MnOiAzMywgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogNTk2fVxuICAgIH0sXG4gICAgMjU6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogMjIsICdnMmJsb2NrY29kZXdvcmRzJzogMjUsICdnMWJsb2Nrcyc6IDcsICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDcxOH0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogMTA3LCAnZzFibG9ja3MnOiA4LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEwNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNiwgJ3RvdGFsY29kZXdvcmRzJzogMTI3Nn0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDEzLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQ4LCAnZzFibG9ja3MnOiA4LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ3LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxMDAwfSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogMTMsICdnMmJsb2NrY29kZXdvcmRzJzogMTYsICdnMWJsb2Nrcyc6IDIyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA1Mzh9XG4gICAgfSxcbiAgICAzNDoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiA3LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDI1LCAnZzFibG9ja3MnOiA0NCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAyNCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTIzMX0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDYsICdnMmJsb2NrY29kZXdvcmRzJzogMTE2LCAnZzFibG9ja3MnOiAxMywgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDIxOTF9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAyMywgJ2cyYmxvY2tjb2Rld29yZHMnOiA0NywgJ2cxYmxvY2tzJzogMTQsICdnMWJsb2NrY29kZXdvcmRzJzogNDYsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDE3MjV9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAxLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE3LCAnZzFibG9ja3MnOiA1OSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogOTYxfVxuICAgIH0sXG4gICAgODoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAyLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE5LCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE4LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDIyLCAndG90YWxjb2Rld29yZHMnOiAxMTB9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDIsICdnMWJsb2NrY29kZXdvcmRzJzogOTcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjQsICd0b3RhbGNvZGV3b3Jkcyc6IDE5NH0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDIsICdnMmJsb2NrY29kZXdvcmRzJzogMzksICdnMWJsb2Nrcyc6IDIsICdnMWJsb2NrY29kZXdvcmRzJzogMzgsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjIsICd0b3RhbGNvZGV3b3Jkcyc6IDE1NH0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDIsICdnMmJsb2NrY29kZXdvcmRzJzogMTUsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogMTQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjYsICd0b3RhbGNvZGV3b3Jkcyc6IDg2fVxuICAgIH0sXG4gICAgMjk6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogMzcsICdnMmJsb2NrY29kZXdvcmRzJzogMjQsICdnMWJsb2Nrcyc6IDEsICdnMWJsb2NrY29kZXdvcmRzJzogMjMsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDkxMX0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDcsICdnMmJsb2NrY29kZXdvcmRzJzogMTE3LCAnZzFibG9ja3MnOiA3LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDExNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTYzMX0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDcsICdnMmJsb2NrY29kZXdvcmRzJzogNDYsICdnMWJsb2Nrcyc6IDIxLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxMjY3fSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogMjYsICdnMmJsb2NrY29kZXdvcmRzJzogMTYsICdnMWJsb2Nrcyc6IDE5LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA3MDF9XG4gICAgfSxcbiAgICAyNzoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAyNiwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNCwgJ2cxYmxvY2tzJzogOCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAyMywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogODA4fSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxMjMsICdnMWJsb2Nrcyc6IDgsICdnMWJsb2NrY29kZXdvcmRzJzogMTIyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAxNDY4fSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMywgJ2cyYmxvY2tjb2Rld29yZHMnOiA0NiwgJ2cxYmxvY2tzJzogMjIsICdnMWJsb2NrY29kZXdvcmRzJzogNDUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDExMjh9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAyOCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogMTIsICdnMWJsb2NrY29kZXdvcmRzJzogMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDYyOH1cbiAgICB9LFxuICAgIDIwOiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDUsICdnMmJsb2NrY29kZXdvcmRzJzogMjUsICdnMWJsb2Nrcyc6IDE1LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDI0LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA0ODV9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiA1LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDEwOCwgJ2cxYmxvY2tzJzogMywgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMDcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDg2MX0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDEzLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQyLCAnZzFibG9ja3MnOiAzLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQxLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI2LCAndG90YWxjb2Rld29yZHMnOiA2Njl9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAxMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogMTUsICdnMWJsb2NrY29kZXdvcmRzJzogMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDM4NX1cbiAgICB9LFxuICAgIDMyOiB7J00nOiB7J2cyYmxvY2tzJzogMjMsICdnMmJsb2NrY29kZXdvcmRzJzogNDcsICdnMWJsb2Nrcyc6IDEwLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ2LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxNTQxfSwgJ1EnOiB7J2cyYmxvY2tzJzogMzUsICdnMmJsb2NrY29kZXdvcmRzJzogMjUsICdnMWJsb2Nrcyc6IDEwLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDI0LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAxMTE1fSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogMzUsICdnMmJsb2NrY29kZXdvcmRzJzogMTYsICdnMWJsb2Nrcyc6IDE5LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA4NDV9XG4gICAgfSxcbiAgICA5OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogMTcsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogMTYsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjAsICd0b3RhbGNvZGV3b3Jkcyc6IDEzMn0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMiwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMTYsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDIzMn0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDIsICdnMmJsb2NrY29kZXdvcmRzJzogMzcsICdnMWJsb2Nrcyc6IDMsICdnMWJsb2NrY29kZXdvcmRzJzogMzYsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjIsICd0b3RhbGNvZGV3b3Jkcyc6IDE4Mn0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogMTMsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogMTIsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjQsICd0b3RhbGNvZGV3b3Jkcyc6IDEwMH1cbiAgICB9LFxuICAgIDMxOiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDEsICdnMmJsb2NrY29kZXdvcmRzJzogMjUsICdnMWJsb2Nrcyc6IDQyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDI0LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAxMDMzfSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogMywgJ2cyYmxvY2tjb2Rld29yZHMnOiAxMTYsICdnMWJsb2Nrcyc6IDEzLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDExNSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTg0M30sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDI5LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQ3LCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ2LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxNDU1fSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogMjgsICdnMmJsb2NrY29kZXdvcmRzJzogMTYsICdnMWJsb2Nrcyc6IDIzLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA3OTN9XG4gICAgfSxcbiAgICAzMzoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAxOSwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNSwgJ2cxYmxvY2tzJzogMjksICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDExNzF9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAxLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDExNiwgJ2cxYmxvY2tzJzogMTcsICdnMWJsb2NrY29kZXdvcmRzJzogMTE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAyMDcxfSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMjEsICdnMmJsb2NrY29kZXdvcmRzJzogNDcsICdnMWJsb2Nrcyc6IDE0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ2LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxNjMxfSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogNDYsICdnMmJsb2NrY29kZXdvcmRzJzogMTYsICdnMWJsb2Nrcyc6IDExLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA5MDF9XG4gICAgfSxcbiAgICAyOiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAyMiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyMiwgJ3RvdGFsY29kZXdvcmRzJzogMjJ9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDEsICdnMWJsb2NrY29kZXdvcmRzJzogMzQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMTAsICd0b3RhbGNvZGV3b3Jkcyc6IDM0fSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiAxLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDI4LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE2LCAndG90YWxjb2Rld29yZHMnOiAyOH0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogMTZ9XG4gICAgfSxcbiAgICA0OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMiwgJ2cxYmxvY2tjb2Rld29yZHMnOiAyNCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNiwgJ3RvdGFsY29kZXdvcmRzJzogNDh9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDEsICdnMWJsb2NrY29kZXdvcmRzJzogODAsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjAsICd0b3RhbGNvZGV3b3Jkcyc6IDgwfSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDMyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE4LCAndG90YWxjb2Rld29yZHMnOiA2NH0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiA5LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE2LCAndG90YWxjb2Rld29yZHMnOiAzNn1cbiAgICB9LFxuICAgIDE6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiAxLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEzLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDEzLCAndG90YWxjb2Rld29yZHMnOiAxM30sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxOSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiA3LCAndG90YWxjb2Rld29yZHMnOiAxOX0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAxMCwgJ3RvdGFsY29kZXdvcmRzJzogMTZ9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDEsICdnMWJsb2NrY29kZXdvcmRzJzogOSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAxNywgJ3RvdGFsY29kZXdvcmRzJzogOX1cbiAgICB9LFxuICAgIDEzOiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogMjEsICdnMWJsb2Nrcyc6IDgsICdnMWJsb2NrY29kZXdvcmRzJzogMjAsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjQsICd0b3RhbGNvZGV3b3Jkcyc6IDI0NH0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMDcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjYsICd0b3RhbGNvZGV3b3Jkcyc6IDQyOH0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDEsICdnMmJsb2NrY29kZXdvcmRzJzogMzgsICdnMWJsb2Nrcyc6IDgsICdnMWJsb2NrY29kZXdvcmRzJzogMzcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjIsICd0b3RhbGNvZGV3b3Jkcyc6IDMzNH0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogMTIsICdnMWJsb2Nrcyc6IDEyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDExLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDIyLCAndG90YWxjb2Rld29yZHMnOiAxODB9XG4gICAgfSxcbiAgICAzOToge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAyMiwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNSwgJ2cxYmxvY2tzJzogNDMsICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDE1ODJ9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiA0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDExOCwgJ2cxYmxvY2tzJzogMjAsICdnMWJsb2NrY29kZXdvcmRzJzogMTE3LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAyODEyfSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogNywgJ2cyYmxvY2tjb2Rld29yZHMnOiA0OCwgJ2cxYmxvY2tzJzogNDAsICdnMWJsb2NrY29kZXdvcmRzJzogNDcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDIyMTZ9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiA2NywgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogMTAsICdnMWJsb2NrY29kZXdvcmRzJzogMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDEyMjJ9XG4gICAgfSxcbiAgICAyNDoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAxNiwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNSwgJ2cxYmxvY2tzJzogMTEsICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDY2NH0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogMTE4LCAnZzFibG9ja3MnOiA2LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDExNywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTE3NH0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDE0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQ2LCAnZzFibG9ja3MnOiA2LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiA5MTR9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAyLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE3LCAnZzFibG9ja3MnOiAzMCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogNTE0fVxuICAgIH0sXG4gICAgMTg6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogMSwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyMywgJ2cxYmxvY2tzJzogMTcsICdnMWJsb2NrY29kZXdvcmRzJzogMjIsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDM5N30sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDEsICdnMmJsb2NrY29kZXdvcmRzJzogMTIxLCAnZzFibG9ja3MnOiA1LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEyMCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogNzIxfSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiA0NCwgJ2cxYmxvY2tzJzogOSwgJ2cxYmxvY2tjb2Rld29yZHMnOiA0MywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNiwgJ3RvdGFsY29kZXdvcmRzJzogNTYzfSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogMTksICdnMmJsb2NrY29kZXdvcmRzJzogMTUsICdnMWJsb2Nrcyc6IDIsICdnMWJsb2NrY29kZXdvcmRzJzogMTQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDMxM31cbiAgICB9LFxuICAgIDE1OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDcsICdnMmJsb2NrY29kZXdvcmRzJzogMjUsICdnMWJsb2Nrcyc6IDUsICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDI5NX0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDEsICdnMmJsb2NrY29kZXdvcmRzJzogODgsICdnMWJsb2Nrcyc6IDUsICdnMWJsb2NrY29kZXdvcmRzJzogODcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjIsICd0b3RhbGNvZGV3b3Jkcyc6IDUyM30sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDUsICdnMmJsb2NrY29kZXdvcmRzJzogNDIsICdnMWJsb2Nrcyc6IDUsICdnMWJsb2NrY29kZXdvcmRzJzogNDEsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjQsICd0b3RhbGNvZGV3b3Jkcyc6IDQxNX0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDcsICdnMmJsb2NrY29kZXdvcmRzJzogMTMsICdnMWJsb2Nrcyc6IDExLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI0LCAndG90YWxjb2Rld29yZHMnOiAyMjN9XG4gICAgfSxcbiAgICAyMjoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAxNiwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNSwgJ2cxYmxvY2tzJzogNywgJ2cxYmxvY2tjb2Rld29yZHMnOiAyNCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogNTY4fSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogNywgJ2cyYmxvY2tjb2Rld29yZHMnOiAxMTIsICdnMWJsb2Nrcyc6IDIsICdnMWJsb2NrY29kZXdvcmRzJzogMTExLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxMDA2fSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiAxNywgJ2cxYmxvY2tjb2Rld29yZHMnOiA0NiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogNzgyfSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiAzNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNCwgJ3RvdGFsY29kZXdvcmRzJzogNDQyfVxuICAgIH0sXG4gICAgMTk6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyMiwgJ2cxYmxvY2tzJzogMTcsICdnMWJsb2NrY29kZXdvcmRzJzogMjEsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjYsICd0b3RhbGNvZGV3b3Jkcyc6IDQ0NX0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogMTE0LCAnZzFibG9ja3MnOiAzLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDExMywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogNzk1fSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMTEsICdnMmJsb2NrY29kZXdvcmRzJzogNDUsICdnMWJsb2Nrcyc6IDMsICdnMWJsb2NrY29kZXdvcmRzJzogNDQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjYsICd0b3RhbGNvZGV3b3Jkcyc6IDYyN30sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDE2LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE0LCAnZzFibG9ja3MnOiA5LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEzLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI2LCAndG90YWxjb2Rld29yZHMnOiAzNDF9XG4gICAgfSxcbiAgICAxMToge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiA0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDIzLCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDIyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAxODB9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogODEsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjAsICd0b3RhbGNvZGV3b3Jkcyc6IDMyNH0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDQsICdnMmJsb2NrY29kZXdvcmRzJzogNTEsICdnMWJsb2Nrcyc6IDEsICdnMWJsb2NrY29kZXdvcmRzJzogNTAsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDI1NH0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDgsICdnMmJsb2NrY29kZXdvcmRzJzogMTMsICdnMWJsb2Nrcyc6IDMsICdnMWJsb2NrY29kZXdvcmRzJzogMTIsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjQsICd0b3RhbGNvZGV3b3Jkcyc6IDE0MH1cbiAgICB9LFxuICAgIDQwOiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDM0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDI1LCAnZzFibG9ja3MnOiAzNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAyNCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTY2Nn0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDYsICdnMmJsb2NrY29kZXdvcmRzJzogMTE5LCAnZzFibG9ja3MnOiAxOSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMTgsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDI5NTZ9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAzMSwgJ2cyYmxvY2tjb2Rld29yZHMnOiA0OCwgJ2cxYmxvY2tzJzogMTgsICdnMWJsb2NrY29kZXdvcmRzJzogNDcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDIzMzR9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiA2MSwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogMjAsICdnMWJsb2NrY29kZXdvcmRzJzogMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDEyNzZ9XG4gICAgfSxcbiAgICAyMzoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAxNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyNSwgJ2cxYmxvY2tzJzogMTEsICdnMWJsb2NrY29kZXdvcmRzJzogMjQsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDYxNH0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDUsICdnMmJsb2NrY29kZXdvcmRzJzogMTIyLCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEyMSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTA5NH0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDE0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQ4LCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ3LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiA4NjB9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAxNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogMTYsICdnMWJsb2NrY29kZXdvcmRzJzogMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDQ2NH1cbiAgICB9LFxuICAgIDM4OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDE0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDI1LCAnZzFibG9ja3MnOiA0OCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAyNCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTUwMn0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDE4LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDEyMywgJ2cxYmxvY2tzJzogNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMjIsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDI3MDJ9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAzMiwgJ2cyYmxvY2tjb2Rld29yZHMnOiA0NywgJ2cxYmxvY2tzJzogMTMsICdnMWJsb2NrY29kZXdvcmRzJzogNDYsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDIxMDJ9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAzMiwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogNDIsICdnMWJsb2NrY29kZXdvcmRzJzogMTUsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDExNDJ9XG4gICAgfSxcbiAgICAyMToge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiA2LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDIzLCAnZzFibG9ja3MnOiAxNywgJ2cxYmxvY2tjb2Rld29yZHMnOiAyMiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogNTEyfSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxMTcsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogMTE2LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiA5MzJ9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDE3LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI2LCAndG90YWxjb2Rld29yZHMnOiA3MTR9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiA2LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE3LCAnZzFibG9ja3MnOiAxOSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogNDA2fVxuICAgIH0sXG4gICAgMzc6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogMTAsICdnMmJsb2NrY29kZXdvcmRzJzogMjUsICdnMWJsb2Nrcyc6IDQ5LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDI0LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAxNDI2fSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxMjMsICdnMWJsb2Nrcyc6IDE3LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDEyMiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMjU2Nn0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDE0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQ3LCAnZzFibG9ja3MnOiAyOSwgJ2cxYmxvY2tjb2Rld29yZHMnOiA0NiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogMTk5Mn0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDQ2LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE2LCAnZzFibG9ja3MnOiAyNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTA5Nn1cbiAgICB9LFxuICAgIDE3OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDE1LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDIzLCAnZzFibG9ja3MnOiAxLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDIyLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiAzNjd9LFxuICAgICAgICAnTCc6IHsnZzJibG9ja3MnOiA1LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDEwOCwgJ2cxYmxvY2tzJzogMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMDcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjgsICd0b3RhbGNvZGV3b3Jkcyc6IDY0N30sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDEsICdnMmJsb2NrY29kZXdvcmRzJzogNDcsICdnMWJsb2Nrcyc6IDEwLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQ2LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI4LCAndG90YWxjb2Rld29yZHMnOiA1MDd9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAxNywgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNSwgJ2cxYmxvY2tzJzogMiwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogMjgzfVxuICAgIH0sXG4gICAgNToge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAyLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE2LCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE4LCAndG90YWxjb2Rld29yZHMnOiA2Mn0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMDgsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjYsICd0b3RhbGNvZGV3b3Jkcyc6IDEwOH0sXG4gICAgICAgICdNJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogMiwgJ2cxYmxvY2tjb2Rld29yZHMnOiA0MywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNCwgJ3RvdGFsY29kZXdvcmRzJzogODZ9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiAyLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDEyLCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDExLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDIyLCAndG90YWxjb2Rld29yZHMnOiA0Nn1cbiAgICB9LFxuICAgIDM2OiB7XG4gICAgICAgICdRJzogeydnMmJsb2Nrcyc6IDEwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDI1LCAnZzFibG9ja3MnOiA0NiwgJ2cxYmxvY2tjb2Rld29yZHMnOiAyNCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAzMCwgJ3RvdGFsY29kZXdvcmRzJzogMTM1NH0sXG4gICAgICAgICdMJzogeydnMmJsb2Nrcyc6IDE0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDEyMiwgJ2cxYmxvY2tzJzogNiwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMjEsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMzAsICd0b3RhbGNvZGV3b3Jkcyc6IDI0MzR9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAzNCwgJ2cyYmxvY2tjb2Rld29yZHMnOiA0OCwgJ2cxYmxvY2tzJzogNiwgJ2cxYmxvY2tjb2Rld29yZHMnOiA0NywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogMTkxNH0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDY0LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE2LCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiAxMDU0fVxuICAgIH0sXG4gICAgMTA6IHtcbiAgICAgICAgJ1EnOiB7J2cyYmxvY2tzJzogMiwgJ2cyYmxvY2tjb2Rld29yZHMnOiAyMCwgJ2cxYmxvY2tzJzogNiwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxOSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNCwgJ3RvdGFsY29kZXdvcmRzJzogMTU0fSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogMiwgJ2cyYmxvY2tjb2Rld29yZHMnOiA2OSwgJ2cxYmxvY2tzJzogMiwgJ2cxYmxvY2tjb2Rld29yZHMnOiA2OCwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAxOCwgJ3RvdGFsY29kZXdvcmRzJzogMjc0fSxcbiAgICAgICAgJ00nOiB7J2cyYmxvY2tzJzogMSwgJ2cyYmxvY2tjb2Rld29yZHMnOiA0NCwgJ2cxYmxvY2tzJzogNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiA0MywgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNiwgJ3RvdGFsY29kZXdvcmRzJzogMjE2fSxcbiAgICAgICAgJ0gnOiB7J2cyYmxvY2tzJzogMiwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2cxYmxvY2tzJzogNiwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogMTIyfVxuICAgIH0sXG4gICAgNjoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogMTksICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMjQsICd0b3RhbGNvZGV3b3Jkcyc6IDc2fSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogMCwgJ2cyYmxvY2tjb2Rld29yZHMnOiAwLCAnZzFibG9ja3MnOiAyLCAnZzFibG9ja2NvZGV3b3Jkcyc6IDY4LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDE4LCAndG90YWxjb2Rld29yZHMnOiAxMzZ9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiAwLCAnZzJibG9ja2NvZGV3b3Jkcyc6IDAsICdnMWJsb2Nrcyc6IDQsICdnMWJsb2NrY29kZXdvcmRzJzogMjcsICdlY2NvZGV3b3Jkc3BlcmJsb2NrJzogMTYsICd0b3RhbGNvZGV3b3Jkcyc6IDEwOH0sXG4gICAgICAgICdIJzogeydnMmJsb2Nrcyc6IDAsICdnMmJsb2NrY29kZXdvcmRzJzogMCwgJ2cxYmxvY2tzJzogNCwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNSwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyOCwgJ3RvdGFsY29kZXdvcmRzJzogNjB9XG4gICAgfSxcbiAgICAxNDoge1xuICAgICAgICAnUSc6IHsnZzJibG9ja3MnOiA1LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDE3LCAnZzFibG9ja3MnOiAxMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxNiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyMCwgJ3RvdGFsY29kZXdvcmRzJzogMjYxfSxcbiAgICAgICAgJ0wnOiB7J2cyYmxvY2tzJzogMSwgJ2cyYmxvY2tjb2Rld29yZHMnOiAxMTYsICdnMWJsb2Nrcyc6IDMsICdnMWJsb2NrY29kZXdvcmRzJzogMTE1LCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDMwLCAndG90YWxjb2Rld29yZHMnOiA0NjF9LFxuICAgICAgICAnTSc6IHsnZzJibG9ja3MnOiA1LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDQxLCAnZzFibG9ja3MnOiA0LCAnZzFibG9ja2NvZGV3b3Jkcyc6IDQwLCAnZWNjb2Rld29yZHNwZXJibG9jayc6IDI0LCAndG90YWxjb2Rld29yZHMnOiAzNjV9LFxuICAgICAgICAnSCc6IHsnZzJibG9ja3MnOiA1LCAnZzJibG9ja2NvZGV3b3Jkcyc6IDEzLCAnZzFibG9ja3MnOiAxMSwgJ2cxYmxvY2tjb2Rld29yZHMnOiAxMiwgJ2VjY29kZXdvcmRzcGVyYmxvY2snOiAyNCwgJ3RvdGFsY29kZXdvcmRzJzogMTk3fVxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGVycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzOyIsInZhciB2ZXJzaW9uX2NhcGFjaXR5X3RhYmxlID0gcmVxdWlyZSgnLi92ZXJzaW9uX2NhcGFjaXR5X3RhYmxlJyk7XG52YXIgZXJyb3JfY29ycmVjdGlvbl9jb2Rld29yZHMgPSByZXF1aXJlKCcuL2Vycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzJyk7XG52YXIgZ2Fsb2lzX2ZpZWxkID0gcmVxdWlyZSgnLi9nYWxvaXNfZmllbGQnKTtcbnZhciBwb2x5ID0gcmVxdWlyZSgnLi9wb2x5bm9taWFsJyk7XG5cbmZ1bmN0aW9uIFFSQ29kZSh0ZXh0LCBjb3JyZWN0aW9uX2xldmVsKXtcbiAgICAvLyBFcnJvciBjb3JyZWN0aW9uIGxldmVsLCBkZWZhdWx0IHRvIFwiTFwiXG4gICAgdGhpcy5lY2wgPSAoY29ycmVjdGlvbl9sZXZlbCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICEoL15bTE1RSF0kL2kudGVzdChjb3JyZWN0aW9uX2xldmVsKSkpID8gJ0wnIDogY29ycmVjdGlvbl9sZXZlbDtcbiAgICB0aGlzLnRleHQgPSB0ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5hbmFseXplKCk7XG4gICAgdGhpcy5lbmNvZGUoKTtcbiAgICB0aGlzLmVycm9yX2NvcnJlY3QoKTtcbiAgICAvLyB0aGlzLnN0cnVjdHVyZSgpO1xuICAgIC8vIHRoaXMubW9kdWxlX3BsYWNlbWVudCgpO1xuICAgIC8vIHRoaXMubWFza2luZygpO1xuICAgIC8vIHRoaXMudmVyc2lvbl9pbmZvKCk7XG59XG5cblFSQ29kZS5wcm90b3R5cGUuYW5hbHl6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gU2V0IG1vZGUsIGFuZCBhZGQgbW9kZSBpbmRpY2F0b3IgdG8gZGF0YVxuICAgIC8vIE51bWVyaWNcbiAgICBpZiAoL15bMC05XSskL2kudGVzdCh0aGlzLnRleHQpKXtcbiAgICAgICAgdGhpcy5tb2RlID0gMDAwMDE7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKCcwJywgJzAnLCAnMCcsICcxJyk7XG4gICAgfVxuICAgIC8vIEFscGhhbnVtZXJpY1xuICAgIGVsc2UgaWYgKC9eWzAtOUEtWlxcc1xcJFxcJVxcKlxcK1xcLVxcLlxcL1xcOl0rJC9pLnRlc3QodGhpcy50ZXh0KSl7XG4gICAgICAgIHRoaXMubW9kZSA9IDAwMDEwO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCgnMCcsICcwJywgJzEnLCAnMCcpO1xuICAgIH1cblxuICAgIC8vIEFkZCBtb2RlIGluZGljYXRvclxuXG5cbiAgICAvLyBOdW1lcmljIE1vZGUgIDAwMDAxXG4gICAgLy8gQWxwaGFudW1lcmljIE1vZGUgICAwMDAxMFxuICAgIC8vIEJ5dGUgTW9kZSAgIDAwMTAwXG4gICAgLy8gS2FuamkgTW9kZSAgMDEwMDBcbiAgICAvLyBFQ0kgTW9kZSAgICAwMDExMVxuXG4gICAgLy8gVE9ETzogQWRkIGJ5dGUgbW9kZVxuICAgIC8vIFRPRE86IEFkZCBrYW5qaSBtb2RlXG5cbiAgICAvLyBCeXRlIG1vZGVcbiAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgbGVmdCBjb2x1bW4gb2YgdGhlIGFscGhhbnVtZXJpYyB0YWJsZSBidXQgY2FuIGJlIGVuY29kZWQgaW4gSVNPIDg4NTktMSwgdXNlIGJ5dGUgbW9kZS5cblxuICAgIC8vIEthbmppIG1vZGVcbiAgICAvLyBJZiBhbGwgb2YgdGhlIGNoYXJhY3RlcnMgYXJlIGluIHRoZSBTaGlmdCBKSVMgY2hhcmFjdGVyIHNldCwgdXNlIEthbmppIG1vZGUuIFxufTtcblFSQ29kZS5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oKXtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIFNtYWxsZXN0IFZlcnNpb24gZm9yIHRoZSBEYXRhXG4gICAgdmFyIHNtYWxsZXN0ID0gSW5maW5pdHk7XG4gICAgdmFyIGJlc3RfdmVyc2lvbjtcbiAgICBmb3IgKHZhciB2ZXJzaW9uIGluIHZlcnNpb25fY2FwYWNpdHlfdGFibGVbdGhpcy5lY2xdW3RoaXMubW9kZV0pe1xuICAgICAgICB2YXIgc2l6ZSA9IHZlcnNpb25fY2FwYWNpdHlfdGFibGVbdGhpcy5lY2xdW3RoaXMubW9kZV1bdmVyc2lvbl1cbiAgICAgICAgaWYgKHNpemUgPCBzbWFsbGVzdCAmJiBzaXplID49IHRoaXMudGV4dC5sZW5ndGgpe1xuICAgICAgICAgICAgc21hbGxlc3QgPSBzaXplO1xuICAgICAgICAgICAgYmVzdF92ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZlcnNpb24gPSBiZXN0X3ZlcnNpb247XG5cbiAgICAvLyBBZGQgY2hhcmFjdGVyIGNvdW50IGluZGljYXRvclxuICAgIHZhciBjaGFyX2NvdW50O1xuICAgIHZhciBwYWRfbGVuZ3RoID0gMDtcbiAgICBpZiAodGhpcy52ZXJzaW9uIDwgMTApe1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAwMDAwMSl7XG4gICAgICAgICAgICBwYWRfbGVuZ3RoID0gMTA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAwMDAxMCl7XG4gICAgICAgICAgICBwYWRfbGVuZ3RoID0gOTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMTAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSA4O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gMDEwMDApe1xuICAgICAgICAgICAgcGFkX2xlbmd0aCA9IDg7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudmVyc2lvbiA8IDI3KSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IDAwMDAxKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMDEwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMTAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxNjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAxMDAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IDAwMDAxKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxNDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMDEwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMTAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxNjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAxMDAwKXtcbiAgICAgICAgICAgIHBhZF9sZW5ndGggPSAxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFyX2NvdW50ID0gdGhpcy50ZXh0Lmxlbmd0aC50b1N0cmluZygyKTtcbiAgICBjaGFyX2NvdW50ID0gcGFkKGNoYXJfY291bnQsIHBhZF9sZW5ndGgsICcwJyk7XG4gICAgdGhpcy5kYXRhLnB1c2guYXBwbHkodGhpcy5kYXRhLCBjaGFyX2NvdW50LnNwbGl0KCcnKSk7XG5cbiAgICAvLyBFbmNvZGVcbiAgICBpZiAodGhpcy5tb2RlID09PSAwMDAwMSl7XG4gICAgICAgIHZhciBiaW5hcnkgPSB0aGlzLmVuY29kZV9udW1lcmljKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09IDAwMDEwKXtcbiAgICAgICAgdmFyIGJpbmFyeSA9IHRoaXMuZW5jb2RlX2FscGhhbnVtZXJpYygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAwMDEwMCl7XG4gICAgICAgIHZhciBiaW5hcnkgPSB0aGlzLmVuY29kZV9ieXRlcygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAwMTAwMCl7XG4gICAgICAgIHZhciBiaW5hcnkgPSB0aGlzLmVuY29kZV9rYW5qaSgpO1xuICAgIH1cbiAgICAvLyBCcmVhayBVcCBpbnRvIDgtYml0IENvZGV3b3JkcyBhbmQgQWRkIFBhZCBCeXRlcyBpZiBOZWNlc3NhcnlcbiAgICB2YXIgbnVtX2NvZGV3b3JkcyA9IGVycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzW3RoaXMudmVyc2lvbl1bdGhpcy5lY2xdWyd0b3RhbGNvZGV3b3JkcyddO1xuICAgIHZhciBkYXRhID0gW107XG4gICAgZm9yICh2YXIgaT0wOyBpPGJpbmFyeS5sZW5ndGg7IGkrPTgpe1xuICAgICAgICB0aGlzLmRhdGEucHVzaC5hcHBseSh0aGlzLmRhdGEsIGJpbmFyeS5zbGljZShpLGkrOCkuc3BsaXQoJycpKTtcbiAgICB9XG4gICAgLy8gUGFkZCB3aXRoIGF0IG1vc3QgNCAwc1xuICAgIHZhciBkaWZmID0gKG51bV9jb2Rld29yZHMqOCkgLSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIGlmIChkaWZmID4gNCl7XG4gICAgICAgIGRpZmY9NDtcbiAgICB9XG4gICAgd2hpbGUgKGRpZmYgPiAwKXtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goJzAnKTtcbiAgICAgICAgZGlmZi0tO1xuICAgIH1cbiAgICAvLyBBZGQgTW9yZSAwcyB0byBNYWtlIHRoZSBMZW5ndGggYSBNdWx0aXBsZSBvZiA4XG4gICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggJSA4ICE9PSAwKXtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goJzAnKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgUGFkIEJ5dGVzIGlmIHRoZSBTdHJpbmcgaXMgU3RpbGwgdG9vIFNob3J0XG4gICAgLy8gQWx0ZXJuYXRlIGFkZGluZyAxMTEwMTEwMCBhbmQgMDAwMTAwMDEgXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA8IG51bV9jb2Rld29yZHMqOCl7XG4gICAgICAgIGlmIChjb3VudCAlIDIgPT09IDApe1xuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goJzEnLCcxJywnMScsJzAnLCcxJywnMScsJzAnLCcwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCgnMCcsJzAnLCcwJywnMScsJzAnLCcwJywnMCcsJzEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgIH1cbn07XG5RUkNvZGUucHJvdG90eXBlLmVuY29kZV9udW1lcmljID0gZnVuY3Rpb24oKXtcbiAgICAvLyBCcmVhayB0ZXh0IHVwIGludG8gZ3JvdXBzIG9mIHRocmVlXG4gICAgLy8gYW5kIGNvbnZlcnQgZWFjaCBncm91cCBpbnRvIGJpbmFyeVxuICAgIHZhciBjb252ZXJ0ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBjPTA7IGM8dGhpcy50ZXh0Lmxlbmd0aDsgYys9Myl7XG4gICAgICAgIHZhciBiaW5hcnkgPSBwYXJzZUludCh0aGlzLnRleHQuc2xpY2UoYywgYyszKSwgMTApLnRvU3RyaW5nKDIpO1xuICAgICAgICBjb252ZXJ0ZWQucHVzaChiaW5hcnkpO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVkLmpvaW4oJycpO1xufTtcblFSQ29kZS5wcm90b3R5cGUuZW5jb2RlX2FscGhhbnVtZXJpYyA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gQnJlYWsgdXAgaW50byBwYWlyc1xuICAgIC8vIENyZWF0ZSBhIGJpbmFyeSBudW1iZXIgZm9yIGVhY2ggcGFpclxuICAgIHZhciBjb252ZXJ0ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBjPTA7IGM8dGhpcy50ZXh0Lmxlbmd0aDsgYys9Mil7XG4gICAgICAgIC8vIDExLWJpdCBiaW5hcnkgc3RyaW5nXG4gICAgICAgIHZhciBkaWdpdF9wYWlyID0gdGhpcy50ZXh0LnNsaWNlKGMsIGMrMik7XG4gICAgICAgIGlmIChkaWdpdF9wYWlyLmxlbmd0aCA9PSAyKXtcbiAgICAgICAgICAgIHZhciBiaW5hcnkgPSAoKGFscGhhX3ZhbHNbZGlnaXRfcGFpclswXV0gKiA0NSkgKyBhbHBoYV92YWxzW2RpZ2l0X3BhaXJbMV1dKS50b1N0cmluZygyKTtcbiAgICAgICAgICAgIGJpbmFyeSA9IHBhZChiaW5hcnksIDExLCAnMCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGJpbmFyeSA9IGFscGhhX3ZhbHNbZGlnaXRfcGFpclswXV0udG9TdHJpbmcoMik7XG4gICAgICAgICAgICBiaW5hcnkgPSBwYWQoYmluYXJ5LCA2LCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnZlcnRlZC5wdXNoKGJpbmFyeSk7XG4gICAgfVxuICAgIHJldHVybiBjb252ZXJ0ZWQuam9pbignJyk7XG59O1xuUVJDb2RlLnByb3RvdHlwZS5lbmNvZGVfYnl0ZXMgPSBmdW5jdGlvbigpe1xuICAgIC8vIFRPRE9cbn07XG5RUkNvZGUucHJvdG90eXBlLmVuY29kZV9rYW5qaSA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gVE9ET1xufTtcblFSQ29kZS5wcm90b3R5cGUuZXJyb3JfY29ycmVjdCA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gIEJyZWFrIERhdGEgQ29kZXdvcmRzIGludG8gQmxvY2tzIGlmIE5lY2Vzc2FyeVxuICAgIHZhciBncm91cDEgPSBbXTtcbiAgICB2YXIgZ3JvdXAyID0gW107XG5cbiAgICB2YXIgbnVtX2cxYmxvY2tzID0gZXJyb3JfY29ycmVjdGlvbl9jb2Rld29yZHNbdGhpcy52ZXJzaW9uXVt0aGlzLmVjbF1bJ2cxYmxvY2tzJ107XG4gICAgdmFyIG51bV9nMWJsb2NrY29kZXdvcmRzID0gZXJyb3JfY29ycmVjdGlvbl9jb2Rld29yZHNbdGhpcy52ZXJzaW9uXVt0aGlzLmVjbF1bJ2cxYmxvY2tjb2Rld29yZHMnXTtcbiAgICB2YXIgbnVtX2cyYmxvY2tzID0gZXJyb3JfY29ycmVjdGlvbl9jb2Rld29yZHNbdGhpcy52ZXJzaW9uXVt0aGlzLmVjbF1bJ2cyYmxvY2tzJ107XG4gICAgdmFyIG51bV9nMmJsb2NrY29kZXdvcmRzID0gZXJyb3JfY29ycmVjdGlvbl9jb2Rld29yZHNbdGhpcy52ZXJzaW9uXVt0aGlzLmVjbF1bJ2cyYmxvY2tjb2Rld29yZHMnXTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGZvciAodmFyIGk9MDsgaTxudW1fZzFibG9ja3M7aSsrKXtcbiAgICAgICAgZ3JvdXAxLnB1c2goW10pO1xuICAgICAgICBmb3IgKHZhciBqPTA7IGo8bnVtX2cxYmxvY2tjb2Rld29yZHM7aisrKXtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZGF0YS5zbGljZShpbmRleCwgaW5kZXgrOCk7XG4gICAgICAgICAgICBncm91cDFbaV0ucHVzaChibG9jayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG51bV9nMmJsb2Nrcyl7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxudW1fZzJibG9ja3M7aSsrKXtcbiAgICAgICAgICAgIGdyb3VwMi5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxudW1fZzJibG9ja2NvZGV3b3JkcztqKyspe1xuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZGF0YS5zbGljZShpbmRleCwgaW5kZXgrOCk7XG4gICAgICAgICAgICAgICAgZ3JvdXAyW2ldLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGVjY29kZWJsb2NrcyA9IGVycm9yX2NvcnJlY3Rpb25fY29kZXdvcmRzW3RoaXMudmVyc2lvbl1bdGhpcy5lY2xdWydlY2NvZGV3b3Jkc3BlcmJsb2NrJ107XG4gICAgdmFyIG1lc3NhZ2VfcG9seSA9IFtdO1xuICAgIGZvciAodmFyIGkgPTA7IGk8dGhpcy5kYXRhLmxlbmd0aDtpKz04KXtcbiAgICAgICAgdmFyIG51bSA9IHBhcnNlSW50KHRoaXMuZGF0YS5zbGljZShpLCBpKzgpLmpvaW4oJycpLCAyKVxuICAgICAgICBtZXNzYWdlX3BvbHkucHVzaCggbnVtICk7XG4gICAgfVxuICAgIHZhciBnZW5fcG9seSA9IHBvbHkuZ2VuKGVjY29kZWJsb2Nrcyk7XG4gICAgLy8gdmFyIHJlc3VsdCA9IHBvbHkuZGl2KG1lc3NhZ2VfcG9seSwgZ2VuX3BvbHkpO1xuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIC8vIGVuY29kZVxuICAgIGZvciAodmFyIGk9MDsgaTwgZWNjb2RlYmxvY2tzOyBpKyspe1xuICAgICAgICByZXN1bHRbaV0gPSAwO1xuICAgIH1cbiAgICBmb3IgKHZhciBpPTA7aTxtZXNzYWdlX3BvbHkubGVuZ3RoOyBpKyspe1xuICAgICAgICByZXN1bHRbaV0gPSBtZXNzYWdlX3BvbHlbaV1cbiAgICB9XG4gICAgZm9yICh2YXIgaT0wO2k8bWVzc2FnZV9wb2x5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGNvZWYgPSByZXN1bHRbaV07XG4gICAgICAgIGlmIChjb2VmICE9PSAwKXtcbiAgICAgICAgICAgIGZvciAodmFyIGogPTA7IGo8Z2VuX3BvbHkubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2kral0gXj0gcG9seS5nZl9tdWwoZ2VuX3BvbHlbal0sIGNvZWYpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2ldID0gbWVzc2FnZV9wb2x5W2ldXG4gICAgfVxuICAgIGZvciAodmFyIGk9MDtpPG1lc3NhZ2VfcG9seS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHJlc3VsdFtpXSA9IG1lc3NhZ2VfcG9seVtpXVxuICAgIH1cbiAgICBkZWJ1Z2dlclxuXG5cbiAgICAvLyB4XjEwICsgzrFeMjUxeF45ICsgzrFeNjd4XjggKyDOsV40NnheNyArIM6xXjYxeF42ICsgzrFeMTE4eF41ICsgzrFeNzB4XjQgKyDOsV42NHheMyArIM6xXjk0eF4yICsgzrFeMzJ4ICsgzrFeNDVcblxuICAgIC8vIFJlZWQtU29sb21vblxuICAgICAgICAvLyAgT3ZlcmFsbCwgdGhlIHN0ZXBzIG9mIHBvbHlub21pYWwgbG9uZyBkaXZpc2lvbiBhcmU6XG5cbiAgICAgICAgLy8gMS4gRmluZCB0aGUgYXBwcm9wcmlhdGUgdGVybSB0byBtdWx0aXBseSB0aGUgZGl2aXNvciBieS4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24gc2hvdWxkIGhhdmUgdGhlIHNhbWUgZmlyc3QgdGVybSBhcyB0aGUgdGhlIGRpdmlkZW5kIChpbiB0aGUgZmlyc3QgbXVsdGlwbGljYXRpb24gc3RlcCkgb3IgcmVtYWluZGVyIChpbiBhbGwgc3Vic2VxdWVudCBtdWx0aXBsaWNhdGlvbiBzdGVwcykuXG4gICAgICAgIC8vIDIuIFN1YnRyYWN0IHRoZSByZXN1bHQgZnJvbSB0aGUgZGl2aWRlbmQgKGluIHRoZSBmaXJzdCBtdWx0aXBsaWNhdGlvbiBzdGVwKSBvciByZW1haW5kZXIgKGluIGFsbCBzdWJzZXF1ZW50IG11bHRpcGxpY2F0aW9uIHN0ZXBzKS5cbiAgICAgICAgLy8gMy4gUmVwZWF0IHN0ZXBzIDEgYW5kIDIgdW50aWwgaXQgaXMgbm8gbG9uZ2VyIHBvc3NpYmxlIHRvIG11bHRpcGx5IGJ5IGFuIGludGVnZXIsIG9yIGluIG90aGVyIHdvcmRzLCBpdCB3b3VsZCBiZSBuZWNlc3NhcnkgdG8gbXVsdGlwbHkgYnkgYSBmcmFjdGlvbi4gVGhlIG51bWJlciBhdCB0aGUgYm90dG9tIG9mIHRoZSB0YWJsZWF1IGlzIHRoZSByZW1haW5kZXIuXG5cblxufTtcblxuUVJDb2RlLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKXtcbiAgICAvLyBCdWlsZCBtYXRyaXhcbiAgICBmb3IgKHZhciB4PTA7eDxtb2R1bGVzO3grKyl7XG4gICAgICAgIHRoaXNbeF0gPSB7fTtcbiAgICAgICAgZm9yICh2YXIgeT0wO3k8bW9kdWxlczt5Kyspe1xuICAgICAgICAgICAgdGhpc1t4XVt5XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbnZhciBhbHBoYV92YWxzID0ge1xuICAgICcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsXG4gICAgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5LCAnQSc6IDEwLCAnQic6IDExLFxuICAgICdDJzogMTIsICdEJzogMTMsICdFJzogMTQsICdGJzogMTUsICdHJzogMTYsICdIJzogMTcsXG4gICAgJ0knOiAxOCwgJ0onOiAxOSwgJ0snOiAyMCwgJ0wnOiAyMSwgJ00nOiAyMiwgJ04nOiAyMyxcbiAgICAnTyc6IDI0LCAnUCc6IDI1LCAnUSc6IDI2LCAnUic6IDI3LCAnUyc6IDI4LCAnVCc6IDI5LFxuICAgICdVJzogMzAsICdWJzogMzEsICdXJzogMzIsICdYJzogMzMsICdZJzogMzQsICdaJzogMzUsXG4gICAgJyAnOiAzNiwgJyQnOiAzNywgJyUnOiAzOCwgJyonOiAzOSwgJysnOiA0MCwgJy0nOiA0MSxcbiAgICAnLic6IDQyLCAnLyc6IDQzLCAnOic6IDQ0XG59XG5cblxuUVJDb2RlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcbiAgICAvLyB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHZhciBtb2R1bGVzID0gMTcgLyorICh2ZXJzaW9uICogNCkqLztcbiAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVzO1xuICAgIHRoaXMubW9kZSA9IDA7XG5cbiAgICAvLyBEZXRlcm1pbmUgbW9kZVxuXG4gICAgdmFyIGJ5dGVzID0gMDtcblxuICAgIC8vIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgIEVycm9yIENvcnJlY3Rpb24gQ2FwYWJpbGl0eVxuICAgIC8vIEwgICBSZWNvdmVycyA3JSBvZiBkYXRhXG4gICAgLy8gTSAgIFJlY292ZXJzIDE1JSBvZiBkYXRhXG4gICAgLy8gUSAgIFJlY292ZXJzIDI1JSBvZiBkYXRhXG4gICAgLy8gSCAgIFJlY292ZXJzIDMwJSBvZiBkYXRhXG5cbiAgICB2YXIgbW9kZV9pbmRpY2F0b3IgPSB7XG4gICAgICAgIDAwMDE6IFswLDAsMCwxXSwgLy8gTnVtZXJpY1xuICAgICAgICAwMDEwOiBbMCwwLDEsMF0sIC8vIEFscGhhbnVtZXJpY1xuICAgICAgICAwMTAwOiBbMCwxLDAsMF0sIC8vIEJ5dGVcbiAgICAgICAgMTAwMDogWzEsMCwwLDBdLCAvLyBLYW5qaVxuICAgICAgICAwMTExOiBbMCwxLDEsMV0gIC8vIEVDSVxuICAgIH1cblxuICAgIC8vIEVuY29kZVxuXG4gICAgLy8gTnVtZXJpY1xuICAgICAgICAvLyBTdGVwIDE6IEJyZWFrIFN0cmluZyBVcCBJbnRvIEdyb3VwcyBvZiBUaHJlZVxuICAgICAgICAvLyBTdGVwIDI6IENvbnZlcnQgZWFjaCBncm91cCBpbnRvIGJpbmFyeVxuICAgIC8vIEFscGhhbnVtZXJpY1xuICAgICAgICAvLyBCcmVhayB1cCBpbnRvIHBhaXJzXG4gICAgICAgIC8vIENyZWF0ZSBhIGJpbmFyeSBudW1iZXIgZm9yIGVhY2ggcGFpclxuICAgICAgICAvLyBJZiB5b3UgYXJlIGVuY29kaW5nIGFuIG9kZCBudW1iZXIgb2YgY2hhcmFjdGVycywgYXMgd2UgYXJlIGhlcmUsIHRha2UgdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGZpbmFsIGNoYXJhY3RlciBhbmQgY29udmVydCBpdCBpbnRvIGEgNi1iaXQgYmluYXJ5IHN0cmluZy4gXG4gICAgLy8gU3RlcCA0OiBCcmVhayBVcCBpbnRvIDgtYml0IENvZGV3b3JkcyBhbmQgQWRkIFBhZCBCeXRlcyBpZiBOZWNlc3NhcnlcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBSZXF1aXJlZCBOdW1iZXIgb2YgQml0cyBmb3IgdGhpcyBRUiBDb2RlXG4gICAgICAgIC8vIEFkZCBhIFRlcm1pbmF0b3Igb2YgMHMgaWYgTmVjZXNzYXJ5XG4gICAgICAgIC8vIEFkZCBNb3JlIDBzIHRvIE1ha2UgdGhlIExlbmd0aCBhIE11bHRpcGxlIG9mIDhcbiAgICAgICAgLy8gQWRkIFBhZCBCeXRlcyBpZiB0aGUgU3RyaW5nIGlzIFN0aWxsIHRvbyBTaG9ydFxuXG4gICAgLy8gQWRkIHRpbWluZyBwYXR0ZXJuc1xuICAgIGZvciAodmFyIHg9MDsgeDxtb2R1bGVzOyB4Kyspe1xuICAgICAgICB0aGlzW3hdWzZdID0gKHgrMSkgJSAyO1xuICAgIH1cbiAgICBmb3IgKHZhciB5PTA7IHk8bW9kdWxlczsgeSsrKXtcbiAgICAgICAgdGhpc1s2XVt5XSA9ICh5KzEpICUgMjtcbiAgICB9XG5cbiAgICAvLyBBZGQgYWxpZ25tZW50IHBhdHRlcm5zXG5cblxuICAgIC8vIEFkZCBmaW5kZXIgcGF0dGVybiB0byB1cHBlciBsZWZ0L3JpZ2h0IGFuZCBib3R0b20gbGVmdC5cbiAgICB2YXIgb2Zmc2V0ID0gW3sneCc6MCwgJ3knOjB9LHsneCc6bW9kdWxlcy03LCAneSc6MH0seyd4JzowLCAneSc6bW9kdWxlcy03fV07XG4gICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKyl7XG4gICAgICAgIGZvciAodmFyIHg9MDsgeDw3OyB4Kyspe1xuICAgICAgICAgICAgZm9yICh2YXIgeT0wOyB5PDc7IHkrKyl7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICggKCh4PT09MXx8eD09PTUpICYmICh5IT09MCYmeSE9PTYpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgKCh5PT09MXx8eT09PTUpICYmICh4IT09MCYmeCE9PTYpKSApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3grb2Zmc2V0W2ldLnhdW3krb2Zmc2V0W2ldLnldID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3grb2Zmc2V0W2ldLnhdW3krb2Zmc2V0W2ldLnldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIHNlcGFyYXRvcnNcbiAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKXtcbiAgICAgICAgZm9yICh2YXIgeD0tMTsgeDw4OyB4Kyspe1xuICAgICAgICAgICAgZm9yICh2YXIgeT0tMTsgeTw4OyB5Kyspe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW3grb2Zmc2V0W2ldLnhdIT09dW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbeCtvZmZzZXRbaV0ueF1beStvZmZzZXRbaV0ueV0hPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoeD09PSAtMSB8fCB5ID09PSAtMSB8fCB4PT09NyB8fCB5PT09Nyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3grb2Zmc2V0W2ldLnhdW3krb2Zmc2V0W2ldLnldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbmZ1bmN0aW9uIGRyYXdRUihRUiwgY2FudmFzLCBzaXplKXtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIG1vZHVsZV9zaXplID0gTWF0aC5mbG9vcihzaXplIC8gUVIubW9kdWxlcylcbiAgICBmb3IgKHZhciB4PTA7eDxRUi5tb2R1bGVzO3grKyl7XG4gICAgICAgIGZvciAodmFyIHk9MDt5PFFSLm1vZHVsZXM7eSsrKXtcbiAgICAgICAgICAgIGlmIChRUlt5XVt4XSl7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZT0nYmxhY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlPSd3aGl0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoeCptb2R1bGVfc2l6ZSwgeSptb2R1bGVfc2l6ZSwgbW9kdWxlX3NpemUsIG1vZHVsZV9zaXplKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFkKHN0ciwgbGVuLCBwYWRkaW5nLCByaWdodCl7XG4gICAgLy8gUGFkIGEgc3RyaW5nIHRvIHNwZWNpZmllZCBsZW5ndGggd2l0aCBwYWRkaW5nIGNoYXJhY3RlclxuICAgIC8vIExlZnQgcGFkIGJ5IGRlZmF1bHQsIHdpdGggb3B0aW9uYWwgcmlnaHQgcGFkZGluZ1xuICAgIGlmIChyaWdodCl7XG4gICAgICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgbGVuKXtcbiAgICAgICAgICAgIHN0ciA9IHN0ciArIHBhZGRpbmc7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IGxlbil7XG4gICAgICAgICAgICBzdHIgPSBwYWRkaW5nICsgc3RyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUVJDb2RlO1xuXG4vLyBmdW5jdGlvbiBWZXJzaW9uRXJyb3IobWVzc2FnZSkge1xuLy8gICAgIHRoaXMubmFtZSA9IFwiVmVyc2lvbkVycm9yXCI7XG4vLyAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCBcIklsbGVnYWwgdmVyc2lvbiBudW1iZXIuIFZlcnNpb24gbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDQwIGluY2x1c2l2ZS5cIjtcbi8vIH1cbi8vIFZlcnNpb25FcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbi8vIFZlcnNpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWZXJzaW9uRXJyb3I7XG5cbi8vIFFSIENvZGUgTW9kZWwgMlxuXG4vLyByb3cgKGZyb20gdG9wIHRvIGJvdHRvbSksIGNvbHVtbiAoZnJvbSBsZWZ0IHRvIHJpZ2h0KSAoaSxqKSwgKDAsMCk9dXBwZXIgbGVmdFxuXG4vLyBDYW4gZW5jb2RlOlxuLy8gMSkgbnVtZXJpYyBkYXRhIChkaWdpdHMgMC05KTtcbi8vIDIpIGFscGhhbnVtZXJpYyBkYXRhIChkaWdpdHMgMC05OyB1cHBlciBjYXNlIGxldHRlcnMgQSAtWjsgbmluZSBvdGhlciBjaGFyYWN0ZXJzOiBzcGFjZSwgJCAlICogKyAtIC4gLyA6ICk7XG4vLyAzKSA4LWJpdCBieXRlIGRhdGEgKEpJUyA4LWJpdCBjaGFyYWN0ZXIgc2V0IChMYXRpbiBhbmQgS2FuYSkgaW4gYWNjb3JkYW5jZSB3aXRoIEpJUyBYIDAyMDEpO1xuLy8gNCkgS2FuamkgY2hhcmFjdGVycyAoU2hpZnQgSklTIGNoYXJhY3RlciBzZXQgaW4gYWNjb3JkYW5jZSB3aXRoIEpJUyBYIDAyMDggQW5uZXggMSBTaGlmdCBDb2RlZFxuLy8gUmVwcmVzZW50YXRpb24uIE5vdGUgdGhhdCBLYW5qaSBjaGFyYWN0ZXJzIGluIFFSIENvZGUgY2FuIGhhdmUgdmFsdWVzIDgxNDBIRVggLTlGRkNIRVggYW5kIEUwNDBIRVggLVxuLy8gRUJCRkhFWCAsIHdoaWNoIGNhbiBiZSBjb21wYWN0ZWQgaW50byAxMyBiaXRzLilcblxuLy9BIGRhcmsgbW9kdWxlIGlzIGEgYmluYXJ5IG9uZSBhbmQgYSBsaWdodCBtb2R1bGUgaXMgYSBiaW5hcnkgemVyby5cblxuLy9TeW1ib2wgc2l6ZSAobm90IGluY2x1ZGluZyBxdWlldCB6b25lKTpcbi8vIDIxeDIxIG1vZHVsZXMgdG8gMTc3eDE3NyBtb2R1bGVzIChWZXJzaW9ucyAxIHRvIDQwLCBpbmNyZWFzaW5nIGluIHN0ZXBzIG9mIDQgbW9kdWxlcyBwZXIgc2lkZSlcblxuLy8gRGF0YSBjaGFyYWN0ZXJzIHBlciBzeW1ib2wgKGZvciBtYXhpbXVtIHN5bWJvbCBzaXplIOKAkyBWZXJzaW9uIDQwLUwpOlxuLy8gMSkgbnVtZXJpYyBkYXRhOiA3IDA4OSBjaGFyYWN0ZXJzXG4vLyAyKSBhbHBoYW51bWVyaWMgZGF0YTogNCAyOTYgY2hhcmFjdGVyc1xuLy8gMykgOC1iaXQgYnl0ZSBkYXRhOiAyIDk1MyBjaGFyYWN0ZXJzXG4vLyA0KSBLYW5qaSBkYXRhOiAxIDgxNyBjaGFyYWN0ZXJzXG5cbi8vIFNlbGVjdGFibGUgZXJyb3IgY29ycmVjdGlvbjpcbi8vIEZvdXIgbGV2ZWxzIG9mIGVycm9yIGNvcnJlY3Rpb24gYWxsb3dpbmcgcmVjb3Zlcnkgb2Y6XG4vLyBMIDclXG4vLyBNIDE1JVxuLy8gUSAyNSVcbi8vIEggMzAlXG4vLyBvZiB0aGUgc3ltYm9sIGNvZGV3b3Jkcy4iLCJ2YXIgZ2Fsb2lzX2ZpZWxkID0gWzEsMiw0LDgsMTYsMzIsNjQsMTI4LDI5LDU4LDExNiwyMzIsMjA1LDEzNSwxOSwzOCw3NiwxNTIsNDUsOTAsMTgwLDExNywyMzQsMjAxLDE0MywzLDYsMTIsMjQsNDgsOTYsMTkyLDE1NywzOSw3OCwxNTYsMzcsNzQsMTQ4LDUzLDEwNiwyMTIsMTgxLDExOSwyMzgsMTkzLDE1OSwzNSw3MCwxNDAsNSwxMCwyMCw0MCw4MCwxNjAsOTMsMTg2LDEwNSwyMTAsMTg1LDExMSwyMjIsMTYxLDk1LDE5MCw5NywxOTQsMTUzLDQ3LDk0LDE4OCwxMDEsMjAyLDEzNywxNSwzMCw2MCwxMjAsMjQwLDI1MywyMzEsMjExLDE4NywxMDcsMjE0LDE3NywxMjcsMjU0LDIyNSwyMjMsMTYzLDkxLDE4MiwxMTMsMjI2LDIxNywxNzUsNjcsMTM0LDE3LDM0LDY4LDEzNiwxMywyNiw1MiwxMDQsMjA4LDE4OSwxMDMsMjA2LDEyOSwzMSw2MiwxMjQsMjQ4LDIzNywxOTksMTQ3LDU5LDExOCwyMzYsMTk3LDE1MSw1MSwxMDIsMjA0LDEzMywyMyw0Niw5MiwxODQsMTA5LDIxOCwxNjksNzksMTU4LDMzLDY2LDEzMiwyMSw0Miw4NCwxNjgsNzcsMTU0LDQxLDgyLDE2NCw4NSwxNzAsNzMsMTQ2LDU3LDExNCwyMjgsMjEzLDE4MywxMTUsMjMwLDIwOSwxOTEsOTksMTk4LDE0NSw2MywxMjYsMjUyLDIyOSwyMTUsMTc5LDEyMywyNDYsMjQxLDI1NSwyMjcsMjE5LDE3MSw3NSwxNTAsNDksOTgsMTk2LDE0OSw1NSwxMTAsMjIwLDE2NSw4NywxNzQsNjUsMTMwLDI1LDUwLDEwMCwyMDAsMTQxLDcsMTQsMjgsNTYsMTEyLDIyNCwyMjEsMTY3LDgzLDE2Niw4MSwxNjIsODksMTc4LDEyMSwyNDIsMjQ5LDIzOSwxOTUsMTU1LDQzLDg2LDE3Miw2OSwxMzgsOSwxOCwzNiw3MiwxNDQsNjEsMTIyLDI0NCwyNDUsMjQ3LDI0MywyNTEsMjM1LDIwMywxMzksMTEsMjIsNDQsODgsMTc2LDEyNSwyNTAsMjMzLDIwNywxMzEsMjcsNTQsMTA4LDIxNiwxNzMsNzEsMTQyXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbG9pc19maWVsZDsiLCJ2YXIgZ2Fsb2lzX2ZpZWxkID0gcmVxdWlyZSgnLi9nYWxvaXNfZmllbGQnKTtcbi8vIHZhciBsb2cgPSByZXF1aXJlKCcuL2xvZ190YWJsZScpO1xuLy8gdmFyIGV4cCA9IHJlcXVpcmUoJy4vYW50aWxvZ190YWJsZScpO1xuXG52YXIgbG9nID0gW107XG52YXIgZXhwID0gW107XG52YXIgeCA9IDE7XG5leHBbMF0gPSAxO1xuXG5mb3IgKHZhciBpPTE7IGk8MjU1O2krKyl7XG4gICAgeCA8PD0gMTtcbiAgICBpZiAoeCAmIDB4MTAwKXtcbiAgICAgIHggXj0gMHgxMWQ7XG4gICAgfVxuICAgIGV4cFtpXSA9IHhcbiAgICBsb2dbeF0gPSBpXG59XG5mb3IgKHZhciBpPTI1NTsgaTw1MTI7aSsrKXtcbiAgIGV4cFtpXSA9IGV4cFtpLTI1NV1cbn1cbmxvZ1tleHBbMjU1XV0gPSAyNTVcblxuXG5cbmZ1bmN0aW9uIHNjYWxlKHAseCl7XG4gICAgdmFyIHIgPSBbXVxuICAgIGZvciAodmFyIGk9MDsgaSA8IHAubGVuZ3RoOyBpKyspe1xuICAgICAgICByLnB1c2goIGdmX211bChwW2ldLCB4KSApO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gYWRkKHAscSl7XG4gICAgdmFyIG1heGxlbiA9IE1hdGgubWF4KHAubGVuZ3RoLHEubGVuZ3RoKTtcbiAgICB2YXIgciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4bGVuOyBpKyspe1xuICAgICAgICByLnB1c2goMCk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHJbaStyLmxlbmd0aC1wLmxlbmd0aF0gPSBwW2ldO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHEubGVuZ3RoOyBpKyspe1xuICAgICAgICByW2krci5sZW5ndGgtcS5sZW5ndGhdIF49IHFbaV07XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtdWwocCwgcSl7XG4gICAgdmFyIGxlbiA9IHAubGVuZ3RoICsgcS5sZW5ndGggLSAxO1xuICAgIHZhciByID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgIHJbaV0gPSAwO1xuICAgIH1cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHEubGVuZ3RoOyBqKyspe1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgcltpK2pdIF49IGdmX211bChwW2ldLCBxW2pdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZXZhbChwLHgpe1xuICAgdmFyIHkgPSBwWzBdXG4gICBmb3IgKHZhciBpID0gMTsgaSA8IHAubGVuZ3RoOyBpKyspe1xuICAgICAgeSA9IGdmX211bCh5LHgpIF4gcFtpXTtcbiAgIH1cbiAgIHJldHVybiB5XG59XG5cbmZ1bmN0aW9uIGdmX2Rpdih4LHkpe1xuICAgaWYgKHk9PT0wKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWmVybyBEaXZpc2lvbicpO1xuICAgfVxuICAgaWYgKHg9PT0wKXtcbiAgICAgIHJldHVybiAwO1xuICAgfVxuICAgcmV0dXJuIGV4cFtsb2dbeF0gKyAyNTUgLSBsb2dbeV1dXG59XG5cbmZ1bmN0aW9uIGdmX211bCh4LHkpe1xuICAgaWYgKHg9PT0wIHx8IHk9PT0wKXtcbiAgICAgIHJldHVybiAwO1xuICAgfVxuICAgcmV0dXJuIGV4cFtsb2dbeF0gKyBsb2dbeV1dXG59XG5cbmZ1bmN0aW9uIGdlbihuc3ltKXtcbiAgICB2YXIgZyA9IFsxXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnN5bTsgaSsrKXtcbiAgICAgICAgZyA9IG11bChnLCBbMSwgZXhwW2ldXSlcbiAgICB9XG4gICByZXR1cm4gZ1xufVxuXG4vLyBkZWYgcnNfZW5jb2RlX21zZyhtc2dfaW4sIG5zeW0pOlxuLy8gICAgZ2VuID0gcnNfZ2VuZXJhdG9yX3BvbHkobnN5bSlcbi8vICAgIG1zZ19vdXQgPSBbMF0gKiAobGVuKG1zZ19pbikgKyBuc3ltKVxuLy8gICAgZm9yIGkgaW4gcmFuZ2UoMCwgbGVuKG1zZ19pbikpOlxuLy8gICAgICAgbXNnX291dFtpXSA9IG1zZ19pbltpXVxuLy8gICAgZm9yIGkgaW4gcmFuZ2UoMCwgbGVuKG1zZ19pbikpOlxuLy8gICAgICAgY29lZiA9IG1zZ19vdXRbaV1cbi8vICAgICAgIGlmIGNvZWYgIT0gMDpcbi8vICAgICAgICAgIGZvciBqIGluIHJhbmdlKDAsIGxlbihnZW4pKTpcbi8vICAgICAgICAgICAgIG1zZ19vdXRbaStqXSBePSBnZl9tdWwoZ2VuW2pdLCBjb2VmKVxuLy8gICAgZm9yIGkgaW4gcmFuZ2UoMCwgbGVuKG1zZ19pbikpOlxuLy8gICAgICAgbXNnX291dFtpXSA9IG1zZ19pbltpXVxuLy8gICAgcmV0dXJuIG1zZ19vdXRcblxudmFyIHBvbHkgPSB7XG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIGFkZDogYWRkLFxuICAgIG11bDogbXVsLFxuICAgIGV2YWw6IGV2YWwsXG4gICAgZ2VuOiBnZW4sXG4gICAgZ2ZfbXVsOiBnZl9tdWxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5OyIsInZhciB2ZXJzaW9uX2NhcGFjaXR5X3RhYmxlPXtcbiAgICBcIkxcIjp7XG4gICAgICAgIFwiMVwiOntcbiAgICAgICAgICAgIFwiMVwiOjQxLFwiMlwiOjc3LFwiM1wiOjEyNyxcIjRcIjoxODcsXCI1XCI6MjU1LFwiNlwiOjMyMixcIjdcIjozNzAsXCI4XCI6NDYxLFwiOVwiOjU1MixcIjEwXCI6NjUyLFwiMTFcIjo3NzIsXCIxMlwiOjg4MyxcIjEzXCI6MTAyMixcIjE0XCI6MTEwMSxcIjE1XCI6MTI1MCxcIjE2XCI6MTQwOCxcIjE3XCI6MTU0OCxcIjE4XCI6MTcyNSxcIjE5XCI6MTkwMyxcIjIwXCI6MjA2MSxcIjIxXCI6MjIzMixcIjIyXCI6MjQwOSxcIjIzXCI6MjYyMCxcIjI0XCI6MjgxMixcIjI1XCI6MzA1NyxcIjI2XCI6MzI4MyxcIjI3XCI6MzUxNyxcIjI4XCI6MzY2OSxcIjI5XCI6MzkwOSxcIjMwXCI6NDE1OCxcIjMxXCI6NDQxNyxcIjMyXCI6NDY4NixcIjMzXCI6NDk2NSxcIjM0XCI6NTI1MyxcIjM1XCI6NTUyOSxcIjM2XCI6NTgzNixcIjM3XCI6NjE1MyxcIjM4XCI6NjQ3OSxcIjM5XCI6Njc0MyxcIjQwXCI6NzA4OVxuICAgICAgICB9LFxuICAgICAgICBcIjhcIjp7XG4gICAgICAgICAgICBcIjFcIjoyNSxcIjJcIjo0NyxcIjNcIjo3NyxcIjRcIjoxMTQsXCI1XCI6MTU0LFwiNlwiOjE5NSxcIjdcIjoyMjQsXCI4XCI6Mjc5LFwiOVwiOjMzNSxcIjEwXCI6Mzk1LFwiMTFcIjo0NjgsXCIxMlwiOjUzNSxcIjEzXCI6NjE5LFwiMTRcIjo2NjcsXCIxNVwiOjc1OCxcIjE2XCI6ODU0LFwiMTdcIjo5MzgsXCIxOFwiOjEwNDYsXCIxOVwiOjExNTMsXCIyMFwiOjEyNDksXCIyMVwiOjEzNTIsXCIyMlwiOjE0NjAsXCIyM1wiOjE1ODgsXCIyNFwiOjE3MDQsXCIyNVwiOjE4NTMsXCIyNlwiOjE5OTAsXCIyN1wiOjIxMzIsXCIyOFwiOjIyMjMsXCIyOVwiOjIzNjksXCIzMFwiOjI1MjAsXCIzMVwiOjI2NzcsXCIzMlwiOjI4NDAsXCIzM1wiOjMwMDksXCIzNFwiOjMxODMsXCIzNVwiOjMzNTEsXCIzNlwiOjM1MzcsXCIzN1wiOjM3MjksXCIzOFwiOjM5MjcsXCIzOVwiOjQwODcsXCI0MFwiOjQyOTZcbiAgICAgICAgfSxcbiAgICAgICAgXCI2NFwiOntcbiAgICAgICAgICAgIFwiMVwiOjE3LFwiMlwiOjMyLFwiM1wiOjUzLFwiNFwiOjc4LFwiNVwiOjEwNixcIjZcIjoxMzQsXCI3XCI6MTU0LFwiOFwiOjE5MixcIjlcIjoyMzAsXCIxMFwiOjI3MSxcIjExXCI6MzIxLFwiMTJcIjozNjcsXCIxM1wiOjQyNSxcIjE0XCI6NDU4LFwiMTVcIjo1MjAsXCIxNlwiOjU4NixcIjE3XCI6NjQ0LFwiMThcIjo3MTgsXCIxOVwiOjc5MixcIjIwXCI6ODU4LFwiMjFcIjo5MjksXCIyMlwiOjEwMDMsXCIyM1wiOjEwOTEsXCIyNFwiOjExNzEsXCIyNVwiOjEyNzMsXCIyNlwiOjEzNjcsXCIyN1wiOjE0NjUsXCIyOFwiOjE1MjgsXCIyOVwiOjE2MjgsXCIzMFwiOjE3MzIsXCIzMVwiOjE4NDAsXCIzMlwiOjE5NTIsXCIzM1wiOjIwNjgsXCIzNFwiOjIxODgsXCIzNVwiOjIzMDMsXCIzNlwiOjI0MzEsXCIzN1wiOjI1NjMsXCIzOFwiOjI2OTksXCIzOVwiOjI4MDksXCI0MFwiOjI5NTNcbiAgICAgICAgfSxcbiAgICAgICAgXCI1MTJcIjp7XG4gICAgICAgICAgICBcIjFcIjoxMCxcIjJcIjoyMCxcIjNcIjozMixcIjRcIjo0OCxcIjVcIjo2NSxcIjZcIjo4MixcIjdcIjo5NSxcIjhcIjoxMTgsXCI5XCI6MTQxLFwiMTBcIjoxNjcsXCIxMVwiOjE5OCxcIjEyXCI6MjI2LFwiMTNcIjoyNjIsXCIxNFwiOjI4MixcIjE1XCI6MzIwLFwiMTZcIjozNjEsXCIxN1wiOjM5NyxcIjE4XCI6NDQyLFwiMTlcIjo0ODgsXCIyMFwiOjUyOCxcIjIxXCI6NTcyLFwiMjJcIjo2MTgsXCIyM1wiOjY3MixcIjI0XCI6NzIxLFwiMjVcIjo3ODQsXCIyNlwiOjg0MixcIjI3XCI6OTAyLFwiMjhcIjo5NDAsXCIyOVwiOjEwMDIsXCIzMFwiOjEwNjYsXCIzMVwiOjExMzIsXCIzMlwiOjEyMDEsXCIzM1wiOjEyNzMsXCIzNFwiOjEzNDcsXCIzNVwiOjE0MTcsXCIzNlwiOjE0OTYsXCIzN1wiOjE1NzcsXCIzOFwiOjE2NjEsXCIzOVwiOjE3MjksXCI0MFwiOjE4MTdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJNXCI6e1xuICAgICAgICBcIjFcIjp7XG4gICAgICAgICAgICBcIjFcIjozNCxcIjJcIjo2MyxcIjNcIjoxMDEsXCI0XCI6MTQ5LFwiNVwiOjIwMixcIjZcIjoyNTUsXCI3XCI6MjkzLFwiOFwiOjM2NSxcIjlcIjo0MzIsXCIxMFwiOjUxMyxcIjExXCI6NjA0LFwiMTJcIjo2OTEsXCIxM1wiOjc5NixcIjE0XCI6ODcxLFwiMTVcIjo5OTEsXCIxNlwiOjEwODIsXCIxN1wiOjEyMTIsXCIxOFwiOjEzNDYsXCIxOVwiOjE1MDAsXCIyMFwiOjE2MDAsXCIyMVwiOjE3MDgsXCIyMlwiOjE4NzIsXCIyM1wiOjIwNTksXCIyNFwiOjIxODgsXCIyNVwiOjIzOTUsXCIyNlwiOjI1NDQsXCIyN1wiOjI3MDEsXCIyOFwiOjI4NTcsXCIyOVwiOjMwMzUsXCIzMFwiOjMyODksXCIzMVwiOjM0ODYsXCIzMlwiOjM2OTMsXCIzM1wiOjM5MDksXCIzNFwiOjQxMzQsXCIzNVwiOjQzNDMsXCIzNlwiOjQ1ODgsXCIzN1wiOjQ3NzUsXCIzOFwiOjUwMzksXCIzOVwiOjUzMTMsXCI0MFwiOjU1OTZcbiAgICAgICAgfSxcbiAgICAgICAgXCI4XCI6e1xuICAgICAgICAgICAgXCIxXCI6MjAsXCIyXCI6MzgsXCIzXCI6NjEsXCI0XCI6OTAsXCI1XCI6MTIyLFwiNlwiOjE1NCxcIjdcIjoxNzgsXCI4XCI6MjIxLFwiOVwiOjI2MixcIjEwXCI6MzExLFwiMTFcIjozNjYsXCIxMlwiOjQxOSxcIjEzXCI6NDgzLFwiMTRcIjo1MjgsXCIxNVwiOjYwMCxcIjE2XCI6NjU2LFwiMTdcIjo3MzQsXCIxOFwiOjgxNixcIjE5XCI6OTA5LFwiMjBcIjo5NzAsXCIyMVwiOjEwMzUsXCIyMlwiOjExMzQsXCIyM1wiOjEyNDgsXCIyNFwiOjEzMjYsXCIyNVwiOjE0NTEsXCIyNlwiOjE1NDIsXCIyN1wiOjE2MzcsXCIyOFwiOjE3MzIsXCIyOVwiOjE4MzksXCIzMFwiOjE5OTQsXCIzMVwiOjIxMTMsXCIzMlwiOjIyMzgsXCIzM1wiOjIzNjksXCIzNFwiOjI1MDYsXCIzNVwiOjI2MzIsXCIzNlwiOjI3ODAsXCIzN1wiOjI4OTQsXCIzOFwiOjMwNTQsXCIzOVwiOjMyMjAsXCI0MFwiOjMzOTFcbiAgICAgICAgfSxcbiAgICAgICAgXCI2NFwiOntcbiAgICAgICAgICAgIFwiMVwiOjE0LFwiMlwiOjI2LFwiM1wiOjQyLFwiNFwiOjYyLFwiNVwiOjg0LFwiNlwiOjEwNixcIjdcIjoxMjIsXCI4XCI6MTUyLFwiOVwiOjE4MCxcIjEwXCI6MjEzLFwiMTFcIjoyNTEsXCIxMlwiOjI4NyxcIjEzXCI6MzMxLFwiMTRcIjozNjIsXCIxNVwiOjQxMixcIjE2XCI6NDUwLFwiMTdcIjo1MDQsXCIxOFwiOjU2MCxcIjE5XCI6NjI0LFwiMjBcIjo2NjYsXCIyMVwiOjcxMSxcIjIyXCI6Nzc5LFwiMjNcIjo4NTcsXCIyNFwiOjkxMSxcIjI1XCI6OTk3LFwiMjZcIjoxMDU5LFwiMjdcIjoxMTI1LFwiMjhcIjoxMTkwLFwiMjlcIjoxMjY0LFwiMzBcIjoxMzcwLFwiMzFcIjoxNDUyLFwiMzJcIjoxNTM4LFwiMzNcIjoxNjI4LFwiMzRcIjoxNzIyLFwiMzVcIjoxODA5LFwiMzZcIjoxOTExLFwiMzdcIjoxOTg5LFwiMzhcIjoyMDk5LFwiMzlcIjoyMjEzLFwiNDBcIjoyMzMxXG4gICAgICAgIH0sXG4gICAgICAgIFwiNTEyXCI6e1xuICAgICAgICAgICAgXCIxXCI6OCxcIjJcIjoxNixcIjNcIjoyNixcIjRcIjozOCxcIjVcIjo1MixcIjZcIjo2NSxcIjdcIjo3NSxcIjhcIjo5MyxcIjlcIjoxMTEsXCIxMFwiOjEzMSxcIjExXCI6MTU1LFwiMTJcIjoxNzcsXCIxM1wiOjIwNCxcIjE0XCI6MjIzLFwiMTVcIjoyNTQsXCIxNlwiOjI3NyxcIjE3XCI6MzEwLFwiMThcIjozNDUsXCIxOVwiOjM4NCxcIjIwXCI6NDEwLFwiMjFcIjo0MzgsXCIyMlwiOjQ4MCxcIjIzXCI6NTI4LFwiMjRcIjo1NjEsXCIyNVwiOjYxNCxcIjI2XCI6NjUyLFwiMjdcIjo2OTIsXCIyOFwiOjczMixcIjI5XCI6Nzc4LFwiMzBcIjo4NDMsXCIzMVwiOjg5NCxcIjMyXCI6OTQ3LFwiMzNcIjoxMDAyLFwiMzRcIjoxMDYwLFwiMzVcIjoxMTEzLFwiMzZcIjoxMTc2LFwiMzdcIjoxMjI0LFwiMzhcIjoxMjkyLFwiMzlcIjoxMzYyLFwiNDBcIjoxNDM1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUVwiOntcbiAgICAgICAgXCIxXCI6e1xuICAgICAgICAgICAgXCIxXCI6MjcsXCIyXCI6NDgsXCIzXCI6NzcsXCI0XCI6MTExLFwiNVwiOjE0NCxcIjZcIjoxNzgsXCI3XCI6MjA3LFwiOFwiOjI1OSxcIjlcIjozMTIsXCIxMFwiOjM2NCxcIjExXCI6NDI3LFwiMTJcIjo0ODksXCIxM1wiOjU4MCxcIjE0XCI6NjIxLFwiMTVcIjo3MDMsXCIxNlwiOjc3NSxcIjE3XCI6ODc2LFwiMThcIjo5NDgsXCIxOVwiOjEwNjMsXCIyMFwiOjExNTksXCIyMVwiOjEyMjQsXCIyMlwiOjEzNTgsXCIyM1wiOjE0NjgsXCIyNFwiOjE1ODgsXCIyNVwiOjE3MTgsXCIyNlwiOjE4MDQsXCIyN1wiOjE5MzMsXCIyOFwiOjIwODUsXCIyOVwiOjIxODEsXCIzMFwiOjIzNTgsXCIzMVwiOjI0NzMsXCIzMlwiOjI2NzAsXCIzM1wiOjI4MDUsXCIzNFwiOjI5NDksXCIzNVwiOjMwODEsXCIzNlwiOjMyNDQsXCIzN1wiOjM0MTcsXCIzOFwiOjM1OTksXCIzOVwiOjM3OTEsXCI0MFwiOjM5OTNcbiAgICAgICAgfSxcbiAgICAgICAgXCI4XCI6e1xuICAgICAgICAgICAgXCIxXCI6MTYsXCIyXCI6MjksXCIzXCI6NDcsXCI0XCI6NjcsXCI1XCI6ODcsXCI2XCI6MTA4LFwiN1wiOjEyNSxcIjhcIjoxNTcsXCI5XCI6MTg5LFwiMTBcIjoyMjEsXCIxMVwiOjI1OSxcIjEyXCI6Mjk2LFwiMTNcIjozNTIsXCIxNFwiOjM3NixcIjE1XCI6NDI2LFwiMTZcIjo0NzAsXCIxN1wiOjUzMSxcIjE4XCI6NTc0LFwiMTlcIjo2NDQsXCIyMFwiOjcwMixcIjIxXCI6NzQyLFwiMjJcIjo4MjMsXCIyM1wiOjg5MCxcIjI0XCI6OTYzLFwiMjVcIjoxMDQxLFwiMjZcIjoxMDk0LFwiMjdcIjoxMTcyLFwiMjhcIjoxMjYzLFwiMjlcIjoxMzIyLFwiMzBcIjoxNDI5LFwiMzFcIjoxNDk5LFwiMzJcIjoxNjE4LFwiMzNcIjoxNzAwLFwiMzRcIjoxNzg3LFwiMzVcIjoxODY3LFwiMzZcIjoxOTY2LFwiMzdcIjoyMDcxLFwiMzhcIjoyMTgxLFwiMzlcIjoyMjk4LFwiNDBcIjoyNDIwXG4gICAgICAgIH0sXG4gICAgICAgIFwiNjRcIjp7XG4gICAgICAgICAgICBcIjFcIjoxMSxcIjJcIjoyMCxcIjNcIjozMixcIjRcIjo0NixcIjVcIjo2MCxcIjZcIjo3NCxcIjdcIjo4NixcIjhcIjoxMDgsXCI5XCI6MTMwLFwiMTBcIjoxNTEsXCIxMVwiOjE3NyxcIjEyXCI6MjAzLFwiMTNcIjoyNDEsXCIxNFwiOjI1OCxcIjE1XCI6MjkyLFwiMTZcIjozMjIsXCIxN1wiOjM2NCxcIjE4XCI6Mzk0LFwiMTlcIjo0NDIsXCIyMFwiOjQ4MixcIjIxXCI6NTA5LFwiMjJcIjo1NjUsXCIyM1wiOjYxMSxcIjI0XCI6NjYxLFwiMjVcIjo3MTUsXCIyNlwiOjc1MSxcIjI3XCI6ODA1LFwiMjhcIjo4NjgsXCIyOVwiOjkwOCxcIjMwXCI6OTgyLFwiMzFcIjoxMDMwLFwiMzJcIjoxMTEyLFwiMzNcIjoxMTY4LFwiMzRcIjoxMjI4LFwiMzVcIjoxMjgzLFwiMzZcIjoxMzUxLFwiMzdcIjoxNDIzLFwiMzhcIjoxNDk5LFwiMzlcIjoxNTc5LFwiNDBcIjoxNjYzXG4gICAgICAgIH0sXG4gICAgICAgIFwiNTEyXCI6e1xuICAgICAgICAgICAgXCIxXCI6NyxcIjJcIjoxMixcIjNcIjoyMCxcIjRcIjoyOCxcIjVcIjozNyxcIjZcIjo0NSxcIjdcIjo1MyxcIjhcIjo2NixcIjlcIjo4MCxcIjEwXCI6OTMsXCIxMVwiOjEwOSxcIjEyXCI6MTI1LFwiMTNcIjoxNDksXCIxNFwiOjE1OSxcIjE1XCI6MTgwLFwiMTZcIjoxOTgsXCIxN1wiOjIyNCxcIjE4XCI6MjQzLFwiMTlcIjoyNzIsXCIyMFwiOjI5NyxcIjIxXCI6MzE0LFwiMjJcIjozNDgsXCIyM1wiOjM3NixcIjI0XCI6NDA3LFwiMjVcIjo0NDAsXCIyNlwiOjQ2MixcIjI3XCI6NDk2LFwiMjhcIjo1MzQsXCIyOVwiOjU1OSxcIjMwXCI6NjA0LFwiMzFcIjo2MzQsXCIzMlwiOjY4NCxcIjMzXCI6NzE5LFwiMzRcIjo3NTYsXCIzNVwiOjc5MCxcIjM2XCI6ODMyLFwiMzdcIjo4NzYsXCIzOFwiOjkyMyxcIjM5XCI6OTcyLFwiNDBcIjoxMDI0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSFwiOntcbiAgICAgICAgXCIxXCI6e1xuICAgICAgICAgICAgXCIxXCI6MTcsXCIyXCI6MzQsXCIzXCI6NTgsXCI0XCI6ODIsXCI1XCI6MTA2LFwiNlwiOjEzOSxcIjdcIjoxNTQsXCI4XCI6MjAyLFwiOVwiOjIzNSxcIjEwXCI6Mjg4LFwiMTFcIjozMzEsXCIxMlwiOjM3NCxcIjEzXCI6NDI3LFwiMTRcIjo0NjgsXCIxNVwiOjUzMCxcIjE2XCI6NjAyLFwiMTdcIjo2NzQsXCIxOFwiOjc0NixcIjE5XCI6ODEzLFwiMjBcIjo5MTksXCIyMVwiOjk2OSxcIjIyXCI6MTA1NixcIjIzXCI6MTEwOCxcIjI0XCI6MTIyOCxcIjI1XCI6MTI4NixcIjI2XCI6MTQyNSxcIjI3XCI6MTUwMSxcIjI4XCI6MTU4MSxcIjI5XCI6MTY3NyxcIjMwXCI6MTc4MixcIjMxXCI6MTg5NyxcIjMyXCI6MjAyMixcIjMzXCI6MjE1NyxcIjM0XCI6MjMwMSxcIjM1XCI6MjM2MSxcIjM2XCI6MjUyNCxcIjM3XCI6MjYyNSxcIjM4XCI6MjczNSxcIjM5XCI6MjkyNyxcIjQwXCI6MzA1N1xuICAgICAgICB9LFxuICAgICAgICBcIjhcIjp7XG4gICAgICAgICAgICBcIjFcIjoxMCxcIjJcIjoyMCxcIjNcIjozNSxcIjRcIjo1MCxcIjVcIjo2NCxcIjZcIjo4NCxcIjdcIjo5MyxcIjhcIjoxMjIsXCI5XCI6MTQzLFwiMTBcIjoxNzQsXCIxMVwiOjIwMCxcIjEyXCI6MjI3LFwiMTNcIjoyNTksXCIxNFwiOjI4MyxcIjE1XCI6MzIxLFwiMTZcIjozNjUsXCIxN1wiOjQwOCxcIjE4XCI6NDUyLFwiMTlcIjo0OTMsXCIyMFwiOjU1NyxcIjIxXCI6NTg3LFwiMjJcIjo2NDAsXCIyM1wiOjY3MixcIjI0XCI6NzQ0LFwiMjVcIjo3NzksXCIyNlwiOjg2NCxcIjI3XCI6OTEwLFwiMjhcIjo5NTgsXCIyOVwiOjEwMTYsXCIzMFwiOjEwODAsXCIzMVwiOjExNTAsXCIzMlwiOjEyMjYsXCIzM1wiOjEzMDcsXCIzNFwiOjEzOTQsXCIzNVwiOjE0MzEsXCIzNlwiOjE1MzAsXCIzN1wiOjE1OTEsXCIzOFwiOjE2NTgsXCIzOVwiOjE3NzQsXCI0MFwiOjE4NTJcbiAgICAgICAgfSxcbiAgICAgICAgXCI2NFwiOntcbiAgICAgICAgICAgIFwiMVwiOjcsXCIyXCI6MTQsXCIzXCI6MjQsXCI0XCI6MzQsXCI1XCI6NDQsXCI2XCI6NTgsXCI3XCI6NjQsXCI4XCI6ODQsXCI5XCI6OTgsXCIxMFwiOjExOSxcIjExXCI6MTM3LFwiMTJcIjoxNTUsXCIxM1wiOjE3NyxcIjE0XCI6MTk0LFwiMTVcIjoyMjAsXCIxNlwiOjI1MCxcIjE3XCI6MjgwLFwiMThcIjozMTAsXCIxOVwiOjMzOCxcIjIwXCI6MzgyLFwiMjFcIjo0MDMsXCIyMlwiOjQzOSxcIjIzXCI6NDYxLFwiMjRcIjo1MTEsXCIyNVwiOjUzNSxcIjI2XCI6NTkzLFwiMjdcIjo2MjUsXCIyOFwiOjY1OCxcIjI5XCI6Njk4LFwiMzBcIjo3NDIsXCIzMVwiOjc5MCxcIjMyXCI6ODQyLFwiMzNcIjo4OTgsXCIzNFwiOjk1OCxcIjM1XCI6OTgzLFwiMzZcIjoxMDUxLFwiMzdcIjoxMDkzLFwiMzhcIjoxMTM5LFwiMzlcIjoxMjE5LFwiNDBcIjoxMjczXG4gICAgICAgIH0sXG4gICAgICAgIFwiNTEyXCI6e1xuICAgICAgICAgICAgXCIxXCI6NCxcIjJcIjo4LFwiM1wiOjE1LFwiNFwiOjIxLFwiNVwiOjI3LFwiNlwiOjM2LFwiN1wiOjM5LFwiOFwiOjUyLFwiOVwiOjYwLFwiMTBcIjo3NCxcIjExXCI6ODUsXCIxMlwiOjk2LFwiMTNcIjoxMDksXCIxNFwiOjEyMCxcIjE1XCI6MTM2LFwiMTZcIjoxNTQsXCIxN1wiOjE3MyxcIjE4XCI6MTkxLFwiMTlcIjoyMDgsXCIyMFwiOjIzNSxcIjIxXCI6MjQ4LFwiMjJcIjoyNzAsXCIyM1wiOjI4NCxcIjI0XCI6MzE1LFwiMjVcIjozMzAsXCIyNlwiOjM2NSxcIjI3XCI6Mzg1LFwiMjhcIjo0MDUsXCIyOVwiOjQzMCxcIjMwXCI6NDU3LFwiMzFcIjo0ODYsXCIzMlwiOjUxOCxcIjMzXCI6NTUzLFwiMzRcIjo1OTAsXCIzNVwiOjYwNSxcIjM2XCI6NjQ3LFwiMzdcIjo2NzMsXCIzOFwiOjcwMSxcIjM5XCI6NzUwLFwiNDBcIjo3ODRcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uX2NhcGFjaXR5X3RhYmxlOyJdfQ==
(2)
});
