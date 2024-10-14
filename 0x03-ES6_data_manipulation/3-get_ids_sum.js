export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((initialAcc, curr) => {
    const acc = initialAcc + curr.id;
    return acc;
  }, 0);
}
