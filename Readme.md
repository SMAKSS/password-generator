# Password Generator

![npm](https://img.shields.io/npm/v/@smakss/password-generator) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/password-generator) ![NPM](https://img.shields.io/npm/l/@smakss/password-generator) ![npm](https://img.shields.io/npm/dt/@smakss/password-generator) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/password-generator)

Secure passwords for users might be a big challenge for us. This package will help you to generate secure random password easily. You can choose allowed characters and even defined them by yourself with random or given length. Also, this package uses ES6+ syntax so if you using older standards for writing JS code you may need a transpiler for it.

## Demo

You can check the [working demo](https://runkit.com/smakss/password-generator) in runkit.

or

[![View @smakss/password-generator](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-password-generator-o9ev4k?fontsize=14&hidenavigation=1&theme=dark)

## How it works?

To install it you can simply do the following command:

```bash
npm i @smakss/password-generator
or
yarn add @smakss/password-generator
```

to include it with common js module you should do this:

```js
var PasswordGenerator = require("@smakss/password-generator");
```

and to include it with ECMAscript module you can simply do this one:

```js
import PasswordGenerator from "@smakss/password-generator";
```

then to use it within your application you can do it just like below:

The search function will accept 6 optional input parameter:

- `length` (`Number`, , Default: `1-20`): The length of the desired password. If you left it blank it will be a random number between 1 to 20.
- `lowerIncluded` (`Boolean`, Default: `True`): You can include or exclude lowercase characters, by default, it's `True` which means the lowercase characters are included.
- `capsIncluded` (`Boolean`, Default: `True`): You can include or exclude capital characters, by default, it's `True` which means the capital characters are included.
- `numIncluded` (`Boolean`, Default: `True`): You can include or exclude numbers, by default, it's `True` which means the numbers are included.
- `specIncluded` (`Boolean`, Default: `True`): You can include or exclude special characters, by default, it's `True` which means the special characters are included.
- `characters` (`Array`): You can assign your desired characters to the function with an array of them, e. g. `["a", 1, "~"]`.

## Examples of usage

### Invoking function with default parameters

```js
PasswordGenerator({});

// Result: "s%gu?TcT]bvc9"
```

### Invoking function with optional parameters

Generate a password with length of 10 including all sets of characters:

```js
PasswordGenerator({ length: 10 });

// Result: ",tWy%[T8fU"
```

Exclude numbers and lowercase characters:

```js
PasswordGenerator({ length: 10, lowerIncluded: false, numIncluded: false });

// Result: ":+U,G:JNXL"
```

Just use `"a"`, `1`, and `"~"` characters to generate a new password:

```js
PasswordGenerator({ length: 10, characters: ["a", 1, "~"] });

// Result: "~a~a1~~~a~"
```

## Contributing

Interested in making contributions to this project? Please see [CONTRIBUTING.md](https://github.com/SMAKSS/password-generator/blob/master/.github/CONTRIBUTING.md) for guidelines and details.

## Code of Conduct

We value and prioritize the well-being of all our contributors and users. To ensure that this project remains a welcoming space for everyone, please refer to our [Code of Conduct](https://github.com/SMAKSS/password-generator/blob/master/.github/CODE_OF_CONDUCT.md).
