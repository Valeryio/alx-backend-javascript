import * as math from "mathjs";

export function calculateNumber(type, a, b) {
  switch (type) {
    case "SUM":
      return math.round(a) + math.round(b);
      break;
    case "SUBTRACT":
      return math.round(a) - math.round(b);
      break;
    case "DIVIDE":
      if (math.round(b) === 0) {
        return "Error";
      }
      return math.round(a) / math.round(b);
      break;
    default:
        console.log("");
  }
}
