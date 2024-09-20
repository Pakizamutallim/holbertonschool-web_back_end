// Display initial message
console.log("Welcome to Holberton School, what is your name?");

// Capture user input using stdin
process.stdin.setEncoding('utf8');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
  process.exit();
});

// Capture the process exit and display closing message
process.on('exit', () => {
  console.log("This important software is now closing");
});
