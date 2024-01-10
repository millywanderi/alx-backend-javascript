// Create the teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // it is optional
  location: string;
  [key: string]: any;  // allows adding any additional attributes dynamically
}

function createTeacher(
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean,
  location: string,
  additionalAttributes: Record<string, any> = {}
); Teacher {
  const teacher: Teacher = {
    firstName: 'Dorothy',
    lastName: 'Atieno',
    fullTimeEmployee: true,
    location: 'Nairobi',
    contract: false,
  };
  return teacher;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: 'Miriam',
  lastName: 'Mwangi',
  fullTimeEmployment: true,
  location: 'Nairobi',
  numberOfReports: 10
}
console.log(director);

// Function for printing teacher
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase();

  return `${firstLetter}. ${$formattedLastName}`;
}
console.log(printTeacher('john', 'doe'));
