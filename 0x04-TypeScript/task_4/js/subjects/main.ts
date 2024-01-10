export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Mercy',
  lastName: 'Cheps',
  experienceTeachingC: 5,
};

console.log('C++:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nreact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
