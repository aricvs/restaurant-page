import Bbq from "./img/bbq.jpg";

const tab1 = () => {
  const mainContent = document.querySelector("#content");
  const image = document.createElement("img");
  const header = document.createElement("h1");
  const para = document.createElement("p");

  image.src = Bbq;
  image.alt = "meats on a grill";
  image.width = "300";

  header.textContent = "The best barbecue!";

  para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`;

  mainContent.appendChild(image);
  mainContent.appendChild(header);
  mainContent.appendChild(para);
};

export { tab1 };
