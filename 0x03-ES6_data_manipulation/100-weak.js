export const weakMap = new WeakMap();

export const querryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endpointdata = weakMap.get(endpoint);
    if (endpointdata >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, endpointdata + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
};
