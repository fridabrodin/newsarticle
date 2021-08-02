function checkForName(inputText) {

    let pattern = /^https:\/\//i;
    console.log("::: Running checkForName :::", inputText);

    if(pattern.test(inputText)) {
        alert("Welcome, Captain!")
    }

    else {
        document.getElementById("results").innerHTML = "Please enter a valid URL";
    }
}

export { checkForName }
