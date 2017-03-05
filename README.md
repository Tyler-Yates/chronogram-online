# Online Chronogram Calculator
This is an online program to calculate Roman numberal chronograms.

You can access the program here: https://tyler-yates.github.io/chronogram-online/

## Background
A chronogram is a sentence or inscription in which specific letters, interpreted as numerals, stand for a particular date when rearranged [[1]](https://en.wikipedia.org/wiki/Chronogram).

A chronogram is usually expressed as a phrase with unusual punctutation: valid Roman numeral characters are made upper-case to signify that they contribute to the date. Capitalization does not have to be at the start of a word.

For instance, see the following chronogram:
```
In honoreM
InsIgnIs athLetae
DIVI fLorIanI
IneXstrVCta
```

There are several upper-case letters in this chronogram:<br>
`I, M, I, I, I, L, D, I, V, I, L, I, I, I, X, V, C`

If we add the Roman numeral value of all of these characters together:<br>
`1 + 1000 + 1 + 1 + 1 + 50 + 500 + 1 + 5 + 1 + 50 + 1 + 1 + 1 + 10 + 5 + 100`

We get the date that inscription represented:<br>
`1729`

## Rules
The program using the following values when analyzing a given text to calculate the date:

| Character | Value |
|-----------|-------|
| I         | 1     |
| V         | 5     |
| U         | 5     |
| X         | 10    |
| L         | 50    |
| C         | 100   |
| D         | 500   |
| M         | 1000  |

* The letter 'U' is given a value of 5 since Latin did not have the letter 'U'.
