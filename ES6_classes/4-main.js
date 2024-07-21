// 4-main.js

import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p); // Logs the Pricing object
console.log(p.displayFullPrice()); // Output: 100 Euro (EUR)

// Example of converting price
const convertedAmount = Pricing.convertPrice(100, 1.2);
console.log(convertedAmount); // Output will be 120 (100 * 1.2)
