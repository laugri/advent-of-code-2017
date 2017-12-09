import readline from 'readline';
import solveCaptcha from './index';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Input ?', input => {
  // eslint-disable-next-line no-console
  console.log(solveCaptcha(input));
  rl.close();
});

