async function loadProducts() {
  try {
    const response = await fetch("products.json");
    const products = await response.json();
    const grid = document.getElementById("product-grid");

    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <a href="${product.link}" target="_blank" class="btn">View</a>
      `;
      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

loadProducts();
