/* eslint-disable */

window.onload = function() {
  //write your code herelet who = ['The dog','My grandma','His turtle','My bird'];
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let paragraphElement = document.getElementById("excuse");
  paragraphElement.innerText =
    who[getRandomInt(who.length)] +
    " " +
    action[getRandomInt(action.length)] +
    " " +
    what[getRandomInt(what.length)] +
    " " +
    when[getRandomInt(when.length)];
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
