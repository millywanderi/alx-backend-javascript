export const weakMap = new WeakMap();

export function querryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const calls = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, calls);

    if (calls >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
