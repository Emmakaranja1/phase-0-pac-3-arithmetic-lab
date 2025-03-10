// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract b from a
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide a by b
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Function to increment a number
function increment(n) {
    return n + 1;
}

// Function to decrement a number
function decrement(n) {
    return n - 1;
}
// Function to parse an input as an integer
function makeInt(n) {
    const parsedValue = parseInt(n, 10); // Parse n as an integer in base 10
    return isNaN(parsedValue) ? NaN : parsedValue; // Return NaN if the parsed value is not a number
}
// Function to parse an input as a floating point number
function preserveDecimal(n) {
    const parsedValue = parseFloat(n); // Parse n as a floating point number
    return isNaN(parsedValue) ? NaN : parsedValue; // Return NaN if the parsed value is not a number
}


