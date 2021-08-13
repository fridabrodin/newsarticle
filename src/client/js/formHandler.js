// Our HTML elements
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");

async function handleSubmit(event) {
  event.preventDefault();
  // check what URL was put into the form field
  let news = document.getElementById("name").value;
  Client.checkForName(news);
  // Send the URL to the server with a POST request
  const article = { news };
  const options = {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  }

  // Get back the data including the API
  const res = await fetch("/api", options);
  try {
    const json = await res.json();
    //Update the UI with the information sent from the server
    heading.innerHTML = "So, this is what our analyze says about the article:";
    agreement.innerHTML = "Agreement: " + json.agreement;
    subjectivity.innerHTML = "Subjectivity: " + json.subjectivity;
    confidence.innerHTML = "Confidence: " + json.confidence;
    irony.innerHTML = "Irony: " + json.irony;
  } catch (error) {
    console.log(error);
  }

}

export { handleSubmit }