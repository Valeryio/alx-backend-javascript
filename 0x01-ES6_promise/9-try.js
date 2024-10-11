export default function guardrail(mathFunction) {
  const queue = [];
  let result = '';

  try {
    result = mathFunction();
    queue.push(result);
    queue.push('Guardian was processed');
  } catch (error) {
    queue.push('Error: cannot divide by 0');
    queue.push('Guardian was processed');
  }

  return (queue);
}
