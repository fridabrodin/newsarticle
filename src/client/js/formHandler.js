function handleSubmit(event) {
    event.preventDefault()
    // Select the form element and get the text
    let news =  document.getElementById("name").value;
    console.log(news);
    document.getElementById("results").innerHTML = news;
    // Once we have the text, we need to make a post request to the server

        Client.checkForName(news);
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            postData('/addNews', {url: news})
        })
    }


export { handleSubmit }

// HTML elements

const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");

// Update UI

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      let allData = await request.json();
      agreement.innerHTML = "Agreement" + allData.agreement;
      subjectivity.innerHTML = "Subjectivity" + allData.subjectivity;
      confidence.innerHTML = "Confidence" + allData.confidence;
      irony.innerHTML = "Irony" + allData.irony;

    }catch(error){
      console.log("error", error);
    }
  }