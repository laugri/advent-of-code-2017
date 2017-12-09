import readline from 'readline';
import checksum from './index';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

let buffer = '';

rl.on('line', (line) => {
  if (line) {
    buffer += `${line}\n`;
  } else {
    // eslint-disable-next-line no-console
    console.log('checksum: ', checksum(buffer.trim()));

    rl.close();
  }
}).on('close', () => {
  // eslint-disable-next-line no-console
  console.log('Have a great day!');
  process.exit(0);
});
