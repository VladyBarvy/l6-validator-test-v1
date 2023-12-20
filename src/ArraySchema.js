export default class ArraySchema {
  validators = [(value) => Array.isArray(value) === true];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  allIntegers() {
    const validator = (value) => {
      // eslint-disable-next-line
      let res = value.every(function(element) {return Number.isInteger(element)});
      if (res === true) {
        return true;
        // eslint-disable-next-line
      } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }

  custom(func) {
    const validator = (value) => {
      // eslint-disable-next-line
      let res = value.every(function(element) {return func(element)});
      if (res === true) {
        return true;
        // eslint-disable-next-line
      } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }
}
