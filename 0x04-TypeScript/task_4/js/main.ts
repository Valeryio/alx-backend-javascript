
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const cTeacher: Subjects.Teacher = {
    firstName: "Louis",
    lastName: "ACC"
}

export const cpp: Subjects.Cpp = new Subjects.Cpp(cTeacher);
cpp.experienceTeachingC = 10;
cpp.getRequirements();
cpp.getAvailableTeacher();

export const java: Subjects.Java = new Subjects.Java(cTeacher);
java.getRequirements();
java.getAvailableTeacher();


export const react: Subjects.React = new Subjects.React(cTeacher);
react.getRequirements();
react.getAvailableTeacher();
