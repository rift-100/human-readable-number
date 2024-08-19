module.exports = function toReadable (number) {
    const numbers = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    if (number === 0) {
        return 'zero'
    }
    function generateTens(number) {
        if (numbers[number]) {
            return numbers[number];
        }
        const idx = 10 * Math.floor(number / 10);
        const tens =  numbers[idx];
        const units = (number % 10) === 0 ? '' : numbers[number % 10];
        return `${tens} ${units}`;
    }
    if (number < 100) {
        return generateTens(number);
    } else {
        const hundreds = Math.floor(number / 100);
        const tens = generateTens(number % 100);
        return `${numbers[hundreds]} hundred ${tens}`.trimEnd();
    }
}
