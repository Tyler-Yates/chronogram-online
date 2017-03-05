/**
 * @return {number}
 */
function CalculateChronogramDate(text) {
    var date = 0;
    for (var i = 0, len = text.length; i < len; i++) {
        var character = text[i];
        var upperCaseRegex = /[A-Z]/;
        if (upperCaseRegex.test(character)) {
            switch (character) {
                case 'I':
                    date += 1;
                    break;
                case 'V':
                    date += 5;
                    break;
                case 'U':
                    console.log("Upper-case letter 'U' encountered. Assuming value of 5.");
                    date += 5;
                    break;
                case 'X':
                    date += 10;
                    break;
                case 'L':
                    date += 50;
                    break;
                case 'C':
                    date += 100;
                    break;
                case 'D':
                    date += 500;
                    break;
                case 'M':
                    date += 1000;
                    break;
                default:
                    console.info("An upper-case character was encountered that is not a valid Roman Numeral: " + character);
            }
        }
    }

    return date;
}