import inquirer from "inquirer";

// Define an async function to perform calculations
async function calculate() {
  let answer: number;

  const Cal_Answer = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter First Number: ",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter Second Number: ",
    },
    {
      type: "list",
      name: "operator",
      message: "What Method do you want to perform:",
      choices: ["Divide", "Multiply", "Add", "Subtract"],
    },
  ]);

  switch (Cal_Answer.operator) {
    case "Add":
      answer = Cal_Answer.num1 + Cal_Answer.num2;
      console.log("The answer for addition is: " + answer);
      break;

    case "Subtract":
      answer = Cal_Answer.num1 - Cal_Answer.num2;
      console.log("The answer for subtraction is: " + answer);
      break;

    case "Multiply":
      answer = Cal_Answer.num1 * Cal_Answer.num2;
      console.log("The answer for multiplication is: " + answer);
      break;

    case "Divide":
      if (Cal_Answer.num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
      } else {
        answer = Cal_Answer.num1 / Cal_Answer.num2;
        console.log("The answer for division is: " + answer);
      }
      break;

    default:
      console.log("Invalid operator selected.");
  }
}

// Define an async function to ask if the user wants to continue
async function askToContinue() {
  const response = await inquirer.prompt([
    {
      type: "list",
      name: "continue",
      message: "Do you want to perform another calculation?",
      choices: ["Yes", "No"],
    },
  ]);

  return response.continue === "Yes";
}

// Main loop
(async () => {
  let continueCalculating = true;
  while (continueCalculating) {
    await calculate();
    continueCalculating = await askToContinue();
  }
})();
