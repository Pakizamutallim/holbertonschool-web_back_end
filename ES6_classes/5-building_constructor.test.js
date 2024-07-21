// 5-building_constructor.test.js

import Building from './5-building.js';

describe('Building', () => {
  test('Cannot instantiate an abstract class directly', () => {
    expect(() => {
      new Building(100);
    }).toThrow('Cannot instantiate an abstract class directly');
  });

  test('Subclasses must override evacuationWarningMessage', () => {
    class TestBuilding extends Building {}

    expect(() => {
      new TestBuilding(200);
    }).toThrow('Class extending Building must override evacuationWarningMessage');
  });
});
