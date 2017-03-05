values = {
    'I': 1,
    'J': 1,
    'V': 5,
    'U': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

function Chronogram(text) {
    var date = 0;
    var used_characters = [];
    for (var i = 0, len = text.length; i < len; i++) {
        var character = text[i];
        if (character in values) {
            date += values[character];
            used_characters.push(character);
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

        if (character in values) {
            result += "<span class='upper'>" + character + "</span>";
        } else {
            result += "<span class='lower'>" + character.toUpperCase() + "</span>";
        }
    }

    return result;
}