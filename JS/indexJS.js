const products = [
  { name: "Basic Tee 1", image: "images/1.jpg" },
  { name: "Basic Tee 2", image: "images/2.jpg" },
  { name: "Basic Tee 3", image: "images/3.jpg" },
  { name: "Basic Tee 4", image: "images/4.jpg" },
  { name: "Basic Tee 5", image: "images/5.jpg" },
  { name: "Basic Tee 2", image: "images/2.jpg" },
  { name: "Basic Tee 3", image: "images/3.jpg" },
  { name: "Basic Tee 5", image: "images/5.jpg" },
  { name: "Basic Tee 4", image: "images/4.jpg" },
  { name: "Basic Tee 1", image: "images/1.jpg" },
];

const container = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p><b>Produk:</b> ${product.name}</p>
      <p><b>Harga:</b> Rp150.000</p>
      <a href="transaksi.html" onclick="selectProduct('${product.name}', 150000)">Beli Sekarang</a>
    `;
  container.appendChild(card);
});

function selectProduct(productName, price) {
  localStorage.setItem("selectedProduct", productName);
  localStorage.setItem("selectedPrice", price);
}