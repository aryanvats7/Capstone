const readline = require('readline');
const add = require('./addition');
const subtract = require('./subtraction');
const multiply = require('./multiplication');
const divide = require('./division');

// Set up readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display menu and handle operations
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    rl.question("Choose an option (1-5): ", (option) => {
        if (option === '5') {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        rl.question("Enter the first number: ", (num1) => {
            rl.question("Enter the second number: ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);

                let result;

                switch (option) {
                    case '1':
                        result = add(a, b);
                        break;
                    case '2':
                        result = subtract(a, b);
                        break;
                    case '3':
                        result = multiply(a, b);
                        break;
                    case '4':
                        result = divide(a, b);
                        break;
                    default:
                        console.log("Invalid option. Please try again.");
                        calculator();
                        return;
                }

                console.log(`The result is: ${result}`);
                calculator();
            });
        });
    });
}

// Start the calculator
calculator();
