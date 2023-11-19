// Character Sets
const num = '0123456789'.split('');
const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const spec = "@%+\\/'!#$^?:,)(}{][~-_.".split('');

/**
 * Options for the PasswordGenerator function.
 * @interface
 */
interface PasswordGeneratorOptions {
  length?: number;
  includeLower?: boolean;
  includeCaps?: boolean;
  includeNums?: boolean;
  includeSpecs?: boolean;
  characters?: string;
  numberOfPasswords?: number;
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
 * @returns A string representing the generated password or an array of passwords if numberOfPasswords is specified.
 *
 * @example
 * // Generates a 12-character password with all options enabled
 * const password = PasswordGenerator({ length: 12 });
 * console.log(password);
 *
 * @example
 * // Generates 5 passwords using a custom set of characters
 * const passwordBulk = PasswordGenerator({ characters: 'abcdef', numberOfPasswords: 5 });
 * console.log(passwordBulk);
 */
function PasswordGenerator({
  length = Math.ceil(Math.random() * 20),
  includeLower = true,
  includeCaps = true,
  includeNums = true,
  includeSpecs = true,
  characters = '',
  numberOfPasswords = 1
}: PasswordGeneratorOptions = {}): string | string[] {
  const customCharacters = characters?.split('') || [];

  const allowedCharacters =
    characters.length > 0
      ? customCharacters
      : [
          ...(includeLower ? lower : []),
          ...(includeCaps ? caps : []),
          ...(includeNums ? num : []),
          ...(includeSpecs ? spec : [])
        ];

  const generatePassword = () =>
    Array.from(
      { length },
      () => allowedCharacters[getRandomIndex(allowedCharacters.length)]
    ).join('');

  if (numberOfPasswords > 1) {
    return Array.from({ length: numberOfPasswords }, generatePassword);
  }

  return generatePassword();
}

export default PasswordGenerator;
