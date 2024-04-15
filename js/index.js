// document.addEventListener("DOMContentLoaded", function () {});
// Line 1 maybe important?!
console.log("My First App");

const bookmarkIcons = document.querySelectorAll("[data-js='bookmark']");

// bookmarkIcons.addEventListener("click", () => {
//   bookmarkIcons.classList.toggle("fa-bookmark-o");
//   bookmarkIcons.classList.toggle("fa-bookmark");
// }); Only single use

bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("fa-bookmark-o");
    bookmarkIcon.classList.toggle("fa-bookmark");
  });
});

function toggleAnswer(answer1) {
  const answerButton = document.getElementById(answer1);
  const answerDiv = document.getElementById(answer1);
  if (answerDiv.style.display === "none" || answerDiv.style.display === "") {
    answerButton.textContent = answerDiv.textContent;
    answerDiv.style.display = "block";
  } else {
    answerButton.textContent = answerDiv.textContent;
    answerDiv.style.display = "none";
  }
}
