// document.addEventListener("DOMContentLoaded", function () {});
// Line 1 maybe important?!
console.log("My First App");

const bookmarkIcons = document.querySelectorAll("[data-js='bookmark']");

bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("fa-bookmark-o");
    bookmarkIcon.classList.toggle("fa-bookmark");
  });
});

function toggleAnswer(answer) {
  console.log("läuft");
  const answerDisplay = document.getElementById(answer);
  const answerDiv = document.getElementById(answer);

  if (answerDiv.style.display === "none" || answerDiv.style.display === "") {
    answerDisplay.textContent = answerDiv.textContent;
    answerDiv.style.display = "block";
    answerDisplay.value = "Hide Answer";
  } else {
    answerDisplay.textContent = answerDiv.textContent;
    answerDiv.style.display = "none";
    answerDisplay.value = "Show Answer";
  }
}

const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
answerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "Hide Answer") {
      button.textContent = "Show Answer";
    } else {
      button.textContent = "Hide Answer";
    }
  });
});
