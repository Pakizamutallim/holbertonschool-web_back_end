// Display initial message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input from stdin
process.stdin.on('data', (input) => {
  // Convert the input buffer to a string and remove trailing spaces or newline characters
  const name = input.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close the input stream and display the closing message
  process.exit();
});

// Handle process exit and display a message when the program closes
process.on('exit', () => {
  console.log("This important software is now closing");
});
