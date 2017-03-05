function Chronogram(text) {
    var date = 0;
    var used_characters = [];
    for (var i = 0, len = text.length; i < len; i++) {
        var character = text[i];
        var upperCaseRegex = /[A-Z]/;
        if (upperCaseRegex.test(character)) {
            switch (character) {
                case 'I':
                    date += 1;
                    used_characters.push(character);
                    break;
                case 'J':
                    console.log("Upper-case letter 'J' encountered. Assuming value of 1.");
                    date += 1;
                    used_characters.push(character);
                    break;
                case 'V':
                    date += 5;
                    used_characters.push(character);
                    break;
                case 'U':
                    console.log("Upper-case letter 'U' encountered. Assuming value of 5.");
                    date += 5;
                    used_characters.push(character);
                    break;
                case 'X':
                    date += 10;
                    used_characters.push(character);
                    break;
                case 'L':
                    date += 50;
                    used_characters.push(character);
                    break;
                case 'C':
                    date += 100;
                    used_characters.push(character);
                    break;
                case 'D':
                    date += 500;
                    used_characters.push(character);
                    break;
                case 'M':
                    date += 1000;
                    used_characters.push(character);
                    break;
                default:
                    console.info("An upper-case character was encountered that is not a valid Roman Numeral: " + character);
            }
        }
    }

    this.date = date;
    this.used_characters = used_characters;
    this.formatted_text = FormattedText(text);
}

/**
 * @return {string}
 */
function FormattedText(text) {
    var result = "";
    for (var i = 0, len = text.length; i < len; i++) {
        var character = text[i];
        var upperCaseRegex = /[A-Z]/;
        var lowerCaseRegex = /[a-z]/;

        if (lowerCaseRegex.test(character)) {
            result += "<span class='lower'>" + character.toUpperCase() + "</span>";
        } else if (upperCaseRegex.test(character)) {
            result += "<span class='upper'>" + character + "</span>";
        } else {
            result += character;
        }
    }

    return result;
}