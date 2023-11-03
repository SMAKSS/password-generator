# Password Generator

![npm](https://img.shields.io/npm/v/@smakss/password-generator) ![NPM](https://img.shields.io/npm/l/@smakss/password-generator) ![npm](https://img.shields.io/npm/dt/@smakss/password-generator) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/password-generator)

Creating secure passwords for users might be a big challenge for developers. This package will help you generate secure random passwords easily. You can choose from a predefined set of character types or define your own characters with a specified or random length. This package is written using ES6+ syntax, so if you're using older standards of JavaScript, a transpiler like Babel may be required.

## Demo

Check out the [working demo](https://runkit.com/smakss/password-generator) on RunKit.

or

[![View @smakss/password-generator](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-password-generator-o9ev4k?fontsize=14&hidenavigation=1&theme=dark)

## How It Works

To install the package, run:

```bash
npm i @smakss/password-generator
# or
yarn add @smakss/password-generator
```

To include it using CommonJS syntax:

```js
const PasswordGenerator = require('@smakss/password-generator');
```

For ECMAScript modules:

```js
import PasswordGenerator from '@smakss/password-generator';
```

To use it within your application:

The `PasswordGenerator` function accepts an options object with the following optional parameters:

- `length` (`number`, Default: random between 1-20): The length of the desired password.
- `lowerIncluded` (`boolean`, Default: `true`): Include lowercase characters.
- `capsIncluded` (`boolean`, Default: `true`): Include uppercase characters.
- `numIncluded` (`boolean`, Default: `true`): Include numeric characters.
- `specIncluded` (`boolean`, Default: `true`): Include special characters.
- `characters` (`Array<string | number>`): Specify custom characters for the password.

## Examples of Usage

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
  lowerIncluded: false,
  numIncluded: false
});
// Result might be something like: ":+U,G:JNXL"
```

### Generate a password using only specified characters

```js
const password = PasswordGenerator({ length: 10, characters: ['a', 1, '~'] });
// Result might be something like: "~a~a1~~~a~"
```

## Contributing

If you're interested in contributing to this project, please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

We value the well-being of all contributors and users. To ensure this project remains welcoming to everyone, please refer to our [Code of Conduct](./CODE_OF_CONDUCT.md).
