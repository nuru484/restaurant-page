const createFoodElement = (imageSrc, name, statement) => {
  const foodImage = document.createElement("img");
  foodImage.className = "menu-image";
  foodImage.src = imageSrc;

  const foodName = document.createElement("p");
  foodName.className = "menu-name";
  foodName.textContent = name;

  const foodStatement = document.createElement("p");
  foodStatement.className = "menu-statement";
  foodStatement.textContent = statement;

  const foodElement = document.createElement("div");
  foodElement.className = "food-container";
  foodElement.append(foodImage, foodName, foodStatement);

  return foodElement;
};

const menuPage = () => {
  const foods = document.createElement("div");
  foods.className = "food-menu-container";
  const content = document.getElementById("content");

  const foodData = [
    {
      imageSrc: "../images/eggs.jpg",
      name: "Eggs",
      statement: "Protein-packed food for muscle health.",
    },
    {
      imageSrc: "../images/fruits.jpg",
      name: "Fruits",
      statement: "Nature's sweet and colorful bounty.",
    },
    {
      imageSrc: "../images/spaghetti.jpg",
      name: "Spaghetti",
      statement: "Classic pasta for hearty and comforting meals.",
    },
    {
      imageSrc: "../images/sliced-bread.jpg",
      name: "Sliced Bread",
      statement: "Global variety, from baguettes to naan.",
    },
  ];

  const foodElements = foodData.map((foodItem) =>
    createFoodElement(foodItem.imageSrc, foodItem.name, foodItem.statement)
  );
  foods.append(...foodElements);

  content.appendChild(foods);
};

export default menuPage;
