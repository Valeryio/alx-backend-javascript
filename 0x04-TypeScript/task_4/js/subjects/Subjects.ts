

namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;
  
    constructor (teacher: Subjects.Teacher) {
      this.teacher.firstName = teacher.firstName;
      this.teacher.lastName = teacher.lastName;
    }
  
    setTeacher(teacher: Subjects.Teacher) {
      this.teacher.firstName = teacher.firstName;
      this.teacher.lastName = teacher.lastName;
    }
  }
}