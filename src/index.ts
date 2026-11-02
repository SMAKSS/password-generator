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
 * Generates an unbiased random index with the Web Crypto API.
 * @param max The exclusive upper bound for the random index.
 * @returns A secure random integer between 0 and max - 1.
 */
function getRandomIndex(max: number): number {
  if (!Number.isSafeInteger(max) || max < 1 || max > 0x1_0000_0000) {
    throw new RangeError(
      'max must be a positive safe integer no greater than 2^32.'
    );
  }

  const cryptoProvider = globalThis.crypto;
  if (!cryptoProvider?.getRandomValues) {
    throw new Error('Secure randomness is unavailable in this environment.');
  }

  const range = 0x1_0000_0000;
  const limit = range - (range % max);
  const randomValue = new Uint32Array(1);

  do {
    cryptoProvider.getRandomValues(randomValue);
  } while (randomValue[0] >= limit);

  return randomValue[0] % max;
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
  length = getRandomIndex(20) + 1,
  includeLower = true,
  includeCaps = true,
  includeNums = true,
  includeSpecs = true,
  characters = '',
  numberOfPasswords = 1
}: PasswordGeneratorOptions = {}): string | string[] {
  if (!Number.isSafeInteger(length) || length < 1) {
    throw new RangeError('length must be a positive safe integer.');
  }

  if (!Number.isSafeInteger(numberOfPasswords) || numberOfPasswords < 1) {
    throw new RangeError('numberOfPasswords must be a positive safe integer.');
  }

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

  if (allowedCharacters.length === 0) {
    throw new RangeError('At least one character set must be enabled.');
  }

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
