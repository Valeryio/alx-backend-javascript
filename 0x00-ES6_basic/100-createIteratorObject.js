export default function createIteratorObject(report) {
  const newArray = [];
  const array = Object.values(report.allEmployees);
  for (const arr of array) {
    newArray.push(...arr);
  }
  return newArray;
}
