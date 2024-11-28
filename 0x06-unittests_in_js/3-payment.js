import Utils from "./utils.js";


export function sendPaymentRequestToApi(totalAmount, totalShipping) {
  result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}