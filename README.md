## The main task is deployed on
https://test-pro-2021.web.app/

### Main task
For this task 2 external packages are used.
1. Mirage.js to mock api.
2. react-number-format for easier number formatting.

### Code refactoring task.

```
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
```
