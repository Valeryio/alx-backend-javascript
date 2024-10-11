
/// <reference path="Teacher.ts" />

namespace Subjects {

  export class Cpp extends Subject {

    experienceTeachingC?: number;
  
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
  
    getAvailableTeacher(): string {
  
      if (this.experienceTeachingC) {
        return `Available Teacher ${this.teacher.firstName}`; 
      } else {
        return "No available teacher";
      }
    }
  }

}
