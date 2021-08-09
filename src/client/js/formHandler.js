async function handleSubmit(event) {
  event.preventDefault();
  // check what URL was put into the form field
  let news = document.getElementById("name").value;
  Client.checkForName(news);
  console.log("::: Form Submitted :::")

 const article = {news};
 const options = {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
        'Content-Type': 'application/json',
  },
    body: JSON.stringify(article),
 }
 const res = await fetch("/api", options);
 const json = await res.json();
 console.log(data);
 console.log("What now?");
}


export { handleSubmit }



// HTML elements

const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");

// Update UI
