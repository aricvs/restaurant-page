import "./styles.css";
import { tab1 } from "./tab1.js";
import { tab2 } from "./tab2.js";
import { tab3 } from "./tab3.js";

tab1();

// remove tabs from html and add them here

const firstTab = document.querySelector(".tab1");
const secondTab = document.querySelector(".tab2");
const thirdTab = document.querySelector(".tab3");

firstTab.addEventListener("click", () => {
  const mainContent = document.querySelector("#content");
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }

  firstTab.classList.add("selected");
  secondTab.classList.remove("selected");
  thirdTab.classList.remove("selected");

  tab1();
});

secondTab.addEventListener("click", () => {
  const mainContent = document.querySelector("#content");
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }

  secondTab.classList.add("selected");
  firstTab.classList.remove("selected");
  thirdTab.classList.remove("selected");

  tab2();
});

thirdTab.addEventListener("click", () => {
  const mainContent = document.querySelector("#content");
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }

  thirdTab.classList.add("selected");
  firstTab.classList.remove("selected");
  secondTab.classList.remove("selected");

  tab3();
});
