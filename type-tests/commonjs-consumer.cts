import PasswordGenerator = require('@smakss/password-generator');

const value: string | string[] = PasswordGenerator.default({
  numberOfPasswords: 2
});
void value;
