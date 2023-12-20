const content = document.getElementById("content");

const initialPageLoad = () => {
  // Navigation Bar
  const navBar = document.createElement("nav");
  const statement = document.createElement("h1");
  const homePage = createNavLink("Home", "#", "nav-link", "home-link");
  const menuPage = createNavLink("Menu", "#", "nav-link", "menu-link");
  const contactPage = createNavLink("Contact", "#", "nav-link", "contact-link");

  statement.id = "page-statement";
  statement.textContent = "Sample Restaurant";
  navBar.append(statement, homePage, menuPage, contactPage);

  // Main Content
  const mainContent = document.createElement("div");
  mainContent.id = "main-content";

  // Appending to content
  content.appendChild(navBar);
};

//The footer function

export const footerFunc = () => {
  const footer = document.createElement("footer");
  footer.textContent = "@Nurudeen23";
  content.appendChild(footer);
};

// A Helper function to create navigation links with classes and IDs
const createNavLink = (text, href, className, id) => {
  const link = document.createElement("a");
  link.textContent = text;
  link.setAttribute("href", href);

  if (className) {
    link.classList.add(className);
  }

  if (id) {
    link.setAttribute("id", id);
  }

  return link;
};

export default initialPageLoad;
