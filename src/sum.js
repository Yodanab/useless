import { utilsFun } from "./utils";

export function sum(a, b) {
  const isTrue = utilsFun();
  if (isTrue) {
    return a + b;
  }
  return a * b;
}
