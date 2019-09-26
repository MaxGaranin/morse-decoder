const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const SPACE_CODE = '**********';
const ZERO_CODE = '00';
const DOT_CODE = '10';
const DASH_CODE = '11';

function decode(expr) {
    let result = '';

    let i = 0;
    let step = 10;
    while (i < expr.length) {
        let j = i + step;
        let byteCode = expr.slice(i, j);
        if (byteCode === SPACE_CODE) {
            result += " ";
        }
        else {
            let morseCode = getMorseCode(byteCode);
            let ch = MORSE_TABLE[morseCode];
            result += ch;
        }

        i = j;
    }

    return result;
}

function getMorseCode(byteCode) {
    let result = '';

    let step = 2;
    for (let i = byteCode.length - step; i >= 0; i -= step) {
        let code = byteCode.slice(i, i + step);
        if (code == ZERO_CODE) {
            break;
        }
        else if (code == DOT_CODE) {
            result += ".";
        }
        else if (code == DASH_CODE) {
            result += "-";
        }
        else {
            throw new SyntaxError("Illegal code: " + code);
        }
    }

    return simpleReverse(result);
}

function simpleReverse(str) {
    return str.split('').reverse().join('');
}

module.exports = {
    decode
}