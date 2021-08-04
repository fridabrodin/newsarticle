function handleSubmit(event) {
  event.preventDefault();
  // check what URL was put into the form field
  let news = document.getElementById("name").value;
  Client.checkForName(news);
  console.log("::: Form Submitted :::")
}

export { handleSubmit }

// HTML elements

const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");

// Update UI

