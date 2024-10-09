export default function iterateThroughObject(reportWithIterator) {
  let newString = '';
  for (let value = 0; value < reportWithIterator.length; value += 1) {
    newString += reportWithIterator[value];

    if ((value + 1) !== reportWithIterator.length) {
      newString += ' | ';
    }
  }
  return (newString);
}
