const weight = process.argv[2];
const height = process.argv[3];
const calculateBmi = (weight, height) => {
  const bmi = weight / (height * height);
  return bmi;
};
const result = calculateBmi(weight, height);
