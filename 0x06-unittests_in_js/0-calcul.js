import * as math from 'mathjs';

export function calculateNumber(a, b) {
  return math.round(a) + math.round(b);
}