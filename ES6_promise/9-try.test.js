// 9-try.test.js

import guardrail from './9-try';
import divideFunction from './8-try';

test('guardrail catch errors', () => {
  expect(guardrail(() => { return divideFunction(10, 0) })).toEqual([
    'cannot divide by 0', // Ensure this matches the actual message format
    'Guardrail was processed',
  ]);
});
