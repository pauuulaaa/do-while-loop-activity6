function promptPassword() {
    let password = prompt("Enter your password:");
    if (password === "emelang") {
        alert("Password accepted! Access granted.");
    } else {
        alert("Incorrect password. Access denied.");
    }
}