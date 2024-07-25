// 8-clean_set.js

const cleanSet = (set, startString) => {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return filteredValues;
};

export default cleanSet;
