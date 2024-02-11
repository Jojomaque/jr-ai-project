function displayPoem(response) {
    console.log("poem generated")
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "01t385ae4o4576bbb84530da05b3d38f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={apiKey}`;
  let prompt = `user instructions: Generate a French poem about ${instructionsInput.value}`;
  let context = "You are a romantic poem expert and love to write short poems, your mission is to generate a 4 line poem in basic html. Make sure to follow the user instructions.";

  console.log("generating poem");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  // Make a call to the API
  axios.get(apiUrl).then(displayPoem);
}

  //Display the generated poem



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
