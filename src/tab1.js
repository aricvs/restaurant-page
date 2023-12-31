import Bbq from "./img/bbq.jpg";

const tab1 = () => {
  const mainContent = document.querySelector("#content");
  const image = document.createElement("img");
  image.src = Bbq;
  image.alt = "meats on a grill";
  image.width = "300";
  const header = document.createElement("h1");
  header.textContent = "The best barbecue!";
  mainContent.appendChild(image);
  mainContent.appendChild(header);
};

export { tab1 };
