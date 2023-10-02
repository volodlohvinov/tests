export function pow(num, degree) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new Error("Entered value not a number!");
  }
   if (!Number.isInteger(degree)) {
    throw new Error("Degree is not integer");
  }
  if (degree === 0) {
    return 1;
  } else if (degree < 0) {
    return 1 / pow(num, -degree);
  } else if (degree % 2 === 0) {
    return pow(num * num, degree / 2);
  } else {
    return num * pow(num * num, Math.floor(degree / 2));
  }
}

const num = 6;
const degree = 3;
const result = pow(num, degree);
console.log(result);

