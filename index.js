// ESERCIZIO EXTRA 1

let twitter = document.querySelector(
  ".col-md-4.blog-sidebar .p-4:last-of-type .list-unstyled li:nth-of-type(2) a"
);
console.log(twitter);
const remove = function () {
  twitter.remove();
};
remove();

// ESERCIZIO EXTRA 2

let removeOne = document.querySelector(".col-md-6.px-0");
let input = document.querySelector(".jumbotron a");
console.log(input);

const removeCard = function () {
  removeOne.remove();
};
input.addEventListener("click", removeCard);

// ESERCIZIO EXTRA 3

let inputAllertDue = document.querySelector(
  ".col-md-8.blog-main .blog-post:nth-of-type(2) .blog-post-meta a"
);
let inputAllertUno = document.querySelector(
  ".col-md-8.blog-main .blog-post:nth-of-type(1) .blog-post-meta a"
);
let inputAllertTre = document.querySelector(
  ".col-md-8.blog-main .blog-post:nth-of-type(3) .blog-post-meta a"
);

const bigAlert = function (event) {
  alert(event.target.innerText);
};
let uno = inputAllertUno.addEventListener("mouseover", bigAlert);
let due = inputAllertDue.addEventListener("mouseover", bigAlert);
let tre = inputAllertTre.addEventListener("mouseover", bigAlert);
