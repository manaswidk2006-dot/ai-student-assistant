function chat() {
  let input = document.getElementById("userInput").value;
  let response = document.getElementById("response");

  if (input.toLowerCase().includes("exam")) {
    response.innerText = "Prepare previous papers and revise daily!";
  } else if (input.toLowerCase().includes("project")) {
    response.innerText = "Try building an AI-based project!";
  } else {
    response.innerText = "I'm still learning 🤖";
  }
}

function analyze() {
  let text = document.getElementById("resume").value;
  let result = document.getElementById("result");

  if (text.includes("Python") && text.includes("AI")) {
    result.innerText = "Great resume for AI roles!";
  } else {
    result.innerText = "Add AI or Python skills to improve.";
  }
}
