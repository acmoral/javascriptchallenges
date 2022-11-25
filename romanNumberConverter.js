function convertToRoman(num) {
    const romanNumerals = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    };

    var romanString = "";
    while (num > 0) {
        for (const [letter, number] of Object.entries(romanNumerals)) {
            let isDivisor = num % number;
            if (isDivisor < num) {
                let value = Math.floor(num / number);
                romanString += letter.repeat(value);
                num -= value * number;
                if (num == 0) {
                    break;
                }
            }
        }
    }
    return romanString;
}

console.log(convertToRoman(1919));
