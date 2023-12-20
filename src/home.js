// Named export
const homeElements = () => {
  const container = document.createElement("div");
  const topStatement = document.createElement("p");
  const homeImage = document.createElement("img");
  const downStatement = document.createElement("p");

  // The top statement on the home page.
  topStatement.id = "homepage-top-statement";
  topStatement.textContent =
    "Best pizza in your country Made with passion since 1908";

  // The middle image
  homeImage.id = "homepage-image";
  homeImage.src = "../images/chef1.jpg";

  // The bottom statement
  downStatement.id = "homepage-down-statement";
  downStatement.textContent = "Order online or visit us!";

  // To append to the container
  container.id = "homepage-container";
  container.append(topStatement, homeImage, downStatement);

  // To append to the content container from the page load module
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(container);
};

export default homeElements;
