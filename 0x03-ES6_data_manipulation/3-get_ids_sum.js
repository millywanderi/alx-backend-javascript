export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const minimize = (accumulator, currValue) => accumulator + currValue;
    return students.map((student) => student.id).reduce(minimize);
  }
  return [];
}
