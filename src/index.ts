/** Array of numeric characters */
const num: string[] = '0123456789'.split('');

/** Array of uppercase alphabetic characters */
const caps: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/** Array of lowercase alphabetic characters */
const lower: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

/** Array of special characters */
const spec: string[] = [
  '@',
  '%',
  '+',
  '\\',
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

/**
 * Options for the PasswordGenerator function.
 * @interface
 */
interface PasswordGeneratorOptions {
  length?: number;
  lowerIncluded?: boolean;
  capsIncluded?: boolean;
  numIncluded?: boolean;
  specIncluded?: boolean;
  characters?: (string | number)[];
}

/**
 * Generates a random index within a given range.
 * @param max The upper bound of the random index (exclusive).
 * @returns A random integer between 0 and max.
 */
function getRandomIndex(max: number): number {
  return Math.floor(Math.random() * max);
}

/**
 * Generates a random password based on the provided options.
 * @param options Configuration options for generating the password.
 * @param options.length The length of the password.
 * @param options.lowerIncluded Whether to include lowercase characters.
 * @param options.capsIncluded Whether to include uppercase characters.
 * @param options.numIncluded Whether to include numeric characters.
 * @param options.specIncluded Whether to include special characters.
 * @param options.characters A custom array of characters to be used for generating the password.
 * @returns A string representing the generated password.
 *
 * @example
 * // Generates a 12-character password with all options enabled
 * const password = PasswordGenerator({ length: 12 });
 * console.log(password);
 *
 * @example
 * // Generates a password using a custom set of characters
 * const customChars = 'abcdef'.split('');
 * const password = PasswordGenerator({ characters: customChars });
 * console.log(password);
 */
function PasswordGenerator({
  length = Math.ceil(Math.random() * 20),
  lowerIncluded = true,
  capsIncluded = true,
  numIncluded = true,
  specIncluded = true,
  characters = []
}: PasswordGeneratorOptions = {}): string {
  const allowedCharacters =
    characters.length > 0
      ? characters
      : [
          ...(lowerIncluded ? lower : []),
          ...(capsIncluded ? caps : []),
          ...(numIncluded ? num : []),
          ...(specIncluded ? spec : [])
        ];

  const password = Array.from(
    { length },
    () => allowedCharacters[getRandomIndex(allowedCharacters.length)]
  ).join('');

  return password;
}

export default PasswordGenerator;
