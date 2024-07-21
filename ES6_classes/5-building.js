// 5-building.js

export default class Building {
    constructor(sqft) {
      if (new.target === Building) {
        throw new Error('Cannot instantiate an abstract class directly');
      }
      this._sqft = this._validateSqft(sqft);
    }
  
    _validateSqft(sqft) {
      if (typeof sqft !== 'number' || sqft <= 0) {
        throw new Error('Invalid sqft');
      }
      return sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
  }
  