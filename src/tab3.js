const tab3 = () => {
  const mainContent = document.querySelector("#content");
  const tabDiv = document.createElement("div");
  const para = document.createElement("p");

  tabDiv.classList.add("tab-div");

  para.textContent = `There is no contact information here, but if you like my 
  Webpack skills and want to hire me please send me an email at 
  aricvs@gmail.com.`;

  tabDiv.appendChild(para);
  mainContent.appendChild(tabDiv);
};

export { tab3 };
