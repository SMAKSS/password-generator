# Password Generator

![npm](https://img.shields.io/npm/v/@smakss/password-generator) ![NPM](https://img.shields.io/npm/l/@smakss/password-generator) ![npm](https://img.shields.io/npm/dt/@smakss/password-generator) ![npm unpacked size](https://img.shields.io/npm/unpacked-size/%40smakss%2Fpassword-generator)

Generating secure and random passwords is a common necessity in today's digital world. The `@smakss/password-generator` package simplifies this task, providing an easy-to-use tool for creating random passwords. Whether you need a single password or a bulk set, this package offers the flexibility to include various character types or use a custom set of characters.

Passwords and the default length use the Web Crypto API. Generation throws if secure randomness is unavailable rather than falling back to `Math.random()`.

Node.js 20 or later is required. In browsers, the Web Crypto API must be available.

## Demo

Explore the functionality in a live environment on CodeSandbox:

[![View @smakss/password-generator](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-password-generator-o9ev4k?fontsize=14&hidenavigation=1&theme=dark)

## Installation

Install the package using npm or pnpm:

```bash
npm install @smakss/password-generator
# or
pnpm add @smakss/password-generator
```

To include it using CommonJS syntax:

```js
const { default: PasswordGenerator } = require('@smakss/password-generator');
```

For ECMAScript modules:

```js
import PasswordGenerator from '@smakss/password-generator';
```

## Usage

The `PasswordGenerator` function accepts an options object with the following parameters:

- `length` (`number`, Default: random between 1-20): The length of the desired password.
- `includeLower` (`boolean`, Default: `true`): Include lowercase characters.
- `includeCaps` (`boolean`, Default: `true`): Include uppercase characters.
- `includeNums` (`boolean`, Default: `true`): Include numeric characters.
- `includeSpecs` (`boolean`, Default: `true`): Include special characters.
- `characters` (`string`): Specify a custom string of characters for the password.
- `numberOfPasswords` (`number`): Number of passwords to generate in bulk.

## Examples

### Generate a password with default parameters

```js
const password = PasswordGenerator();
// Result might be something like: "s%gu?TcT]bvc9"
```

### Generate a password with a specified length

```js
const password = PasswordGenerator({ length: 10 });
// Result might be something like: ",tWy%[T8fU"
```

### Generate a password excluding numbers and lowercase characters

```js
const password = PasswordGenerator({
  length: 10,
  includeLower: false,
  includeNums: false
});
// Result might be something like: ":+U,G:JNXL"
```

### Generate a password using only specified characters

```js
const password = PasswordGenerator({ length: 10, characters: 'a1~' });
// Result might be something like: "~a~a1~~~a~"
```

### Generate a bulk set of passwords

```js
const passwords = PasswordGenerator({ numberOfPasswords: 5 });
// Results in an array of 5 random passwords
console.log(passwords);
```

## Contributing

Contributions to enhance `@smakss/password-generator` are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Code of Conduct

Our commitment to providing a welcoming and inclusive environment is outlined in our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Local playground

This repository includes a Vite playground linked to the package through the pnpm workspace. Try the current local build without publishing a package version:

```sh
pnpm install
pnpm run dev:playground
```

To build the playground app, run this from the package root:

```sh
pnpm run build:playground
```
