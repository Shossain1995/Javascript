// Main Menu
var choice = prompt("Press 1 for Login/Register or 2 for Billing:");

// switch শুরু
switch (choice) {
    case "1": // Login/Register
        var password = prompt("Enter password:");

        if (password === "1234") {
            alert("Login Successful!");

            var innerChoice = prompt("Press 1 for Registration or 2 for Logout:");

            switch (innerChoice) {
                case "1":
                    // Registration Details
                    var name = prompt("Enter your name:");
                    var fatherName = prompt("Enter your father's name:");
                    var village = prompt("Enter your village:");

                    alert("Registration Successful!\nName: " + name + "\nFather: " + fatherName + "\nVillage: " + village);
                    break;

                case "2":
                    alert("You have logged out.");
                    break;

                default:
                    alert("Invalid Option!");
                    break;
            }
        } else {
            alert("Wrong password!");
        }
        break;

    case "2": // Billing
        var medicineBill = parseFloat(prompt("Enter medicine bill:"));
        var cabinBill = parseFloat(prompt("Enter cabin bill:"));
        var serviceCharge = parseFloat(prompt("Enter service charge:"));

        // Extra 100 tk যোগ
        var totalBill = medicineBill + cabinBill + serviceCharge + 100;

        alert("Total Bill (including extra 100): " + totalBill);

        // Logout option
        var logout = prompt("Press 2 to Logout:");

        if (logout === "2") {
            alert("You have logged out.");
        }
        break;

    default:
        alert("Invalid Input!");
        break;
}
