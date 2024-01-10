// Create a teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // it's optional
  location: string;
  [key: string]: any;
}
function createTeacher(
  firstName: string,
  lastName: string,
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
