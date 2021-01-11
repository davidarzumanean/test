function func(s = '', a, b) {
  if (!isString(s) || !s.length) {
    return -1;
  }
	
  const aIndex = getCharIndex(s, a);
  const bIndex = getCharIndex(s, b);
  return Math.max(aIndex, bIndex);
}

function getCharIndex(str, char) {
  const index = isString(char) ? str.lastIndexOf(char) : -1;
  return index > 0 ? index : -1; 
}

function isString(s) {
  return s && typeof s === 'string';
}
