
// Task 1: Building a Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: boolean | string | number | undefined;
}

// Task 2: Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Task 3: Printing Teachers
function printTeacher(firstName: string, lastName: string) {
 let abName: string = firstName[0] + '. ' + lastName;
 return abName;
}

console.log(director1);
console.log(printTeacher("Joe", "Mosh"));

// Task 4: writing a Class

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

let Linson = new StudentClass("Linson", "Dmt");
console.log(Linson.workOnHomework());
console.log(Linson.displayName());
