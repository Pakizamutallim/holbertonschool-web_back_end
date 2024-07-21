// 5-main.js

import Building from './5-building.js';

// This will work fine
const b = new Building(100);
console.log(b); // Output: Building { _sqft: 100 }

// This will throw an error because TestBuilding does not implement evacuationWarningMessage
class TestBuilding extends Building {}

try {
    new TestBuilding(200);
} catch (err) {
    console.log(err); // Output: Error: Class extending Building must override evacuationWarningMessage
}
