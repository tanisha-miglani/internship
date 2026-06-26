const products = [
  {
    name: "Laptop",
    description: "High-performance laptop for work and gaming.",
    price: "₹50,000",
    image:"laptop1.jpg",
  },
  {
    name: "Smartphone",
    description: "Latest Android smartphone with amazing camera with AI features.",
    price: "₹25,000",
    image: "phone.jpg",
  },
  {
    name: "Headphones",
    description: "Wireless headphones with noise cancellation.",
    price: "₹3,000",
    image: "headphone.jpg",
  },
  {
    name: "Smart Watch",
    description: "Track your health and notifications.",
    price: "₹25,000",
    image: "watch1.jpg",
  },

  {
    name: "Panasonic ac",
    description: "Track your health and notifications.",
    price: "₹40,000",
    image: "ac.jpg",
  },
];

const cardContainer = document.getElementById("cardContainer");
const name = "Tanisha";
cardContainer.innerHTML = products.map(
  (product) =>
    `<div class="card">
  <img src="${product.image}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p class="price">${product.price}</p>
</div>
`,
);