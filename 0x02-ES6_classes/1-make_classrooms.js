import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const students = [19, 20, 34];
  const classrooms = [];

  for (const studentNumber of students) {
    classrooms.push(new ClassRoom(studentNumber));
  }

  return (classrooms);
}
