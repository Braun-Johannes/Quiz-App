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
