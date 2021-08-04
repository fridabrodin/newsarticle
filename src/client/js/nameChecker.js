function checkForName(inputText) {
    // Checking if user entered a valid URL
    let pattern = /^https:\/\//i;
    if(pattern.test(inputText)) {
        return true;
    } else {
        // If it's not a valid URL, we send an alert
        alert("Please enter a valid URL");
    }
}

export { checkForName }
