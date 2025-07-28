// 4. Check whether a character is digit or not
// Algorithm:
// Input character

// Check if it is between '0' and '9' (ASCII or direct check)

// If yes → digit

// Else → not digit



var digit = parseInt(prompt("Enter Value"));  // Assign directly

if (digit >= '0' && digit <= '9') {
    document.write("Digit");
} else {
    document.write("Not Digit");
}
