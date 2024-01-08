export const weakMap = new WeakMap();
const MAX_ENDPOINT_CALLS = 5;

export function querryAPI(endpoint) {
  const calls = weakMap.get(endpoint) || 0;
  if (calls >= MAX_ENDPOINT_CALLS) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, calls + 1);
}
