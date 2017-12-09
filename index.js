export const getNextChar = (string, index) => {
  if (index < string.length - 1) {
    return string[index + 1];
  }

  return string[0];
};

export default function solveCaptcha(captcha) {
  let sum = 0;

  captcha.split('').forEach((char, index) => {
    if (char === getNextChar(captcha, index)) {
      sum += Number(char);
    }
  });

  return sum;
}
