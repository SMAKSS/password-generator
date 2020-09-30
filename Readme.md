# Password Generator

![npm](https://img.shields.io/npm/v/@smakss/password-generator) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/password-generator) ![NPM](https://img.shields.io/npm/l/@smakss/password-generator) ![npm](https://img.shields.io/npm/dt/@smakss/password-generator) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/password-generator)

Secure passwords for users might be a big challenge for us. This package will help you to generate secure random password easily. You can choose allowed characters and even defined them by yourself with random or given length. Also, this package uses ES6+ syntax so if you using older standards for writing JS code you may need a transpiler for it.

## How it works?

To install it you can simply do the following command:

```
npm i @smakss/password-generator
or
yarn add @smakss/password-generator
```

to include it with common js module you should do this:

```
var PasswordGenerator = require('@smakss/password-generator');
```

and to include it with ECMAscript module you can simply do this one:

```
import PasswordGenerator from '@smakss/password-generator';
```

then to use it within your application you can do it just like below:

The search function will accept 6 optional input parameter:

- `length` (`Number`): The length of the desired password. If you left it blank it will be a random number between 0 to 20.
- `lowerIncluded` (`Boolean`, Default: `True`): You can include or exclude lowercase characters, by default, it's `True` which means the lowercase characters are included.
- `capsIncluded` (`Boolean`, Default: `True`): You can include or exclude capital characters, by default, it's `True` which means the capital characters are included.
- `numIncluded` (`Boolean`, Default: `True`): You can include or exclude numbers, by default, it's `True` which means the numbers are included.
- `specIncluded` (`Boolean`, Default: `True`): You can include or exclude special characters, by default, it's `True` which means the special characters are included.
- `characters` (`Array`): You can assign your desired characters to the function with an array of them, e. g. `["a", 1, "~"]`.

## Examples of usage

**Invoking function with default parameters:**

```
PasswordGenerator({});

// Result: "s%gu?TcT]bvc9"
```

**Invoking function with optional parameters:**

```
PasswordGenerator({ length: 10 });

// Result: ",tWy%[T8fU"

PasswordGenerator({ length: 10, lowerIncluded: false, numIncluded: false });

// Result: ":+U,G:JNXL"

PasswordGenerator({ length: 10, characters: ["a", 1, "~"] });

// Result: "~a~a1~~~a~"
```

## Demo

You can check the [working demo](https://runkit.com/smakss/password-generator) in runkit.
