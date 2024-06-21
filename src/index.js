function displayFact(response){

    new Typewriter('#fact-response', {
        strings: response.data.answer,
        autoStart: true,
        delay: 5,
        cursor: "📖",
      });

}

function generateFact(event){
    event.preventDefault();

    let factElement = document.querySelector("#fact-response");
    factElement.classList.remove("hidden");
    factElement.innerHTML = `<div class="generating">⌛ Gathering factual data...</div>`;
    
    let userEnquiry = document.querySelector("#user-enquiry");

    let apiKey = "ta0fa480a5ddb93fe2fa0b479bf3b70o";
    let prompt = `user question: ${userEnquiry.value}`;
    let context = "You are a historian who specialises in South African history and highly equipped with its current affairs and trends. Your mission is to provide users with detailed facts about the country in basic HTML and separate each line with <br />. Please respond to the user's question.Sign the fact with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning. do not start your response with YES";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Genarating fact");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);

      axios.get(apiUrl).then(displayFact);
}

let factRequest = document.querySelector("#fact-generator-form");
factRequest.addEventListener("submit", generateFact);