import assert from 'node:assert/strict';
import test from 'node:test';
import PasswordGenerator from '../dist/esm/index.js';

function withoutCrypto(callback) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'crypto');
  Object.defineProperty(globalThis, 'crypto', {
    configurable: true,
    value: undefined
  });

  try {
    callback();
  } finally {
    if (descriptor) {
      Object.defineProperty(globalThis, 'crypto', descriptor);
    } else {
      delete globalThis.crypto;
    }
  }
}

test('uses Web Crypto to choose the default password length', (context) => {
  let callCount = 0;
  context.mock.method(globalThis.crypto, 'getRandomValues', (values) => {
    callCount += 1;
    values[0] = 4;
    return values;
  });

  assert.equal(PasswordGenerator().length, 5);
  assert.equal(callCount, 6);
});

test('uses rejection sampling to choose password characters', (context) => {
  let callCount = 0;
  context.mock.method(globalThis.crypto, 'getRandomValues', (values) => {
    values[0] = callCount++ === 0 ? 0xffffffff : 2;
    return values;
  });

  assert.equal(PasswordGenerator({ length: 1, characters: 'abc' }), 'c');
  assert.equal(callCount, 2);
});

test('throws when secure randomness is unavailable', () => {
  withoutCrypto(() => {
    assert.throws(() => PasswordGenerator(), /Secure randomness is unavailable/);
  });
});

test('rejects requests with no enabled character sets', () => {
  assert.throws(
    () =>
      PasswordGenerator({
        length: 1,
        includeLower: false,
        includeCaps: false,
        includeNums: false,
        includeSpecs: false
      }),
    /At least one character set must be enabled/
  );
});
