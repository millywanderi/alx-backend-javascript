export default function cleanSet(set, startString) {
  const myStr = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      myStr.push(s.slice(startString.length));
    }
  });
  return myStr.join('-');
}
