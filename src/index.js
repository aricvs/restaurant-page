import "./styles.css";
import { tab1 } from "./tab1.js";
import { tab2 } from "./tab2.js";
import { tab3 } from "./tab3.js";

const addTabs = () => {
  const docBody = document.body;
  const tabOne = document.createElement("div");
  const tabTwo = document.createElement("div");
  const tabThree = document.createElement("div");

  tabOne.classList.add("tab1", "tab-selector", "selected");
  tabTwo.classList.add("tab2", "tab-selector");
  tabThree.classList.add("tab3", "tab-selector");

  tabOne.textContent = "Home";
  tabTwo.textContent = "About";
  tabThree.textContent = "Contact";

  docBody.prepend(tabThree);
  docBody.prepend(tabTwo);
  docBody.prepend(tabOne);
};

const switchTab1 = () => {
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
};

const switchTab2 = () => {
  const firstTab = document.querySelector(".tab1");
  const secondTab = document.querySelector(".tab2");
  const thirdTab = document.querySelector(".tab3");
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
};

const switchTab3 = () => {
  const firstTab = document.querySelector(".tab1");
  const secondTab = document.querySelector(".tab2");
  const thirdTab = document.querySelector(".tab3");
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
};

const tabSwitcher = () => {
  switchTab1();
  switchTab2();
  switchTab3();
};

addTabs();
tab1();
tabSwitcher();
