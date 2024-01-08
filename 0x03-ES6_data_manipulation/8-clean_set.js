export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const newSet = new Set();
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      newSet.add(value.slice(startString.length));
    }
  }
  return Array.from(newSet).join('-');
}
