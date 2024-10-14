export default function createInt8TypedArray(length, position, value) {
  let newBuffer = new Int8Array(length);
  newBuffer.set(value, position);
  return newBuffer;
}