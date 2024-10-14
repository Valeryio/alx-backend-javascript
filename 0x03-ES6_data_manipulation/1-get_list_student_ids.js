export default function getListStudentIds(arg) {
  if (Array.isArray(arg)) {
    const idArray = arg.map((arg) => arg.id);
    return idArray;
  }
  return [];
}
