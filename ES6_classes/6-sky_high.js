// 6-sky_high.js

import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this._validateFloors(floors);
  }

  _validateFloors(floors) {
    if (typeof floors !== 'number' || floors <= 0) {
      throw new Error('Invalid floors');
    }
    return floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
