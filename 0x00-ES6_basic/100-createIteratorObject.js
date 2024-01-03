export default function createIteratorObject(report) {
  const iterator = [];
  for (const depart of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[depart]) {
      iterator.push(employee);
    }
  }
  return iterator;
}
