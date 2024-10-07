export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = false;
    task2 = true;

  //  task = true;
  //  task2 = false;
  }

  return [task, task2];
}
