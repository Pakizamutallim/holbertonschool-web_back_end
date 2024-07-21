const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  get brand() {
    return this[brandSymbol];
  }

  set brand(value) {
    this[brandSymbol] = value;
  }

  get motor() {
    return this[motorSymbol];
  }

  set motor(value) {
    this[motorSymbol] = value;
  }

  get color() {
    return this[colorSymbol];
  }

  set color(value) {
    this[colorSymbol] = value;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    clonedCar[brandSymbol] = this[brandSymbol];
    clonedCar[motorSymbol] = this[motorSymbol];
    clonedCar[colorSymbol] = this[colorSymbol];
    return clonedCar;
  }
}
