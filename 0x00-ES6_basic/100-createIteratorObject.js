export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]: function* () {
      for (const department in report.allEmployees) {
        const employeesInDepartment = report.allEmployees[department];
        for (const employee of employeesInDepartment) {
          yield employee;
        }
      }
    },
  };
  return iterator;
}
