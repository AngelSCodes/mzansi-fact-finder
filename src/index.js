function generateFact(event){
    event.preventDefault();

    new Typewriter('#fact-response', {
        strings: "Fact about South Africa.",
        autoStart: true,
        delay: 5,
        cursor: "💡",
      });
}

let factRequest = document.querySelector("#fact-generator-form");
factRequest.addEventListener("submit", generateFact);