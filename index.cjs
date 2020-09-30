'use strict';
const caps = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
const lower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const spec = [
  '@',
  '%',
  '+',
  '',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function PasswordGenerator({
  length = 0,
  lowerIncluded = true,
  capsIncluded = true,
  numIncluded = true,
  specIncluded = true,
  characters = []
}) {
  if (!length) length = Math.ceil(Math.random() * 10 * 2);
  let password = '';
  const allowedCharacters =
    characters.length > 0
      ? characters
      : [
          ...(lowerIncluded ? lower : []),
          ...(numIncluded ? num : []),
          ...(capsIncluded ? caps : []),
          ...(specIncluded ? spec : [])
        ];
  const allowedCharactersLength = allowedCharacters.length;
  for (let i = 0; i < length; i++) {
    password +=
      allowedCharacters[Math.floor(Math.random() * allowedCharactersLength)];
  }

  return password;
}

module.exports = PasswordGenerator;
