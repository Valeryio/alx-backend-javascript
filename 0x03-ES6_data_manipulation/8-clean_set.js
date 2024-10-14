export default function cleanSet(set, startString) {
  let result = '';
  const newSet = [...set];

  if (startString === '') {
    return '';
  }

  for (let i = 0; i < newSet.length; i += 1) {
    if (i !== 0 && i !== (newSet.length - 1)) {
      result = `${result}-`;
    }

    if (newSet[i].startsWith(startString)) {
      result += newSet[i].slice(startString.length);
    }
  }

  return result;
}