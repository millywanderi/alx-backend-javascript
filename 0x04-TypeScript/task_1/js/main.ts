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

// create a Class named StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentInterface extends StudentClassConstructor, StudentClassMethods {}

class StudentClass implements StudentClassMethods {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
}

const currStudent = new StudentClass('Kylie', 'Kinsley');
console.log(currStudent.workOnHomework());  // Currently working
onsole.log(currStudent.displayName());  // Kylie
