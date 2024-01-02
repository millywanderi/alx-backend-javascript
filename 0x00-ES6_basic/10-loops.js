export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, param] of array.entries()) {
   array[idx] = appendString + param;
  }

  return array;
}
