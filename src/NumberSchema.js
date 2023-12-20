export default class NumberSchema {
  validators = [(value) => typeof value === 'number'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}
