const tab2 = () => {
  const mainContent = document.querySelector("#content");
  const tabDiv = document.createElement("div");
  const para = document.createElement("p");

  tabDiv.classList.add("tab-div");

  para.textContent = `This project was done mainly to learn about integrating
  a project in Webpack, I got lazy and did not want to add any content or make
  it look good. Please don't take this as a demonstration of my design skills.`;

  tabDiv.appendChild(para);
  mainContent.appendChild(tabDiv);
};

export { tab2 };
