// 5-building.js

export default class Building {
    constructor(sqft) {
      if (new.target === Building) {
        throw new Error('Cannot instantiate an abstract class directly');
      }
      this._sqft = this._validateSqft(sqft);
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  
    // Private validation method
    _validateSqft(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
      return sqft;
    }
  }
  