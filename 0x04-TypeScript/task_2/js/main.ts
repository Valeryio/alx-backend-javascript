// Task 5: Advanced types Part 1

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }

  toString(): string {
    return 'Director';
  }
}

class Teacher implements TeacherInterface {
  
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }

  toString(): string {
    return 'Teacher';
  }
}

function createEmployee(salary: string | number): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200).toString());
console.log(createEmployee(1000).toString());


// Task 6: Creating functions specific to employees

function isDirector(employee: any): boolean {
  return employee instanceof Director;
}
console.log(isDirector(createEmployee(200)));


function executeWork(employee: any) {

  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }

}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));


// Task 7: String literal types

let Subject: "Math" | "History";

function teachClass(todayClass: any): string {
  if (todayClass == "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
