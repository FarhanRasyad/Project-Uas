const selectedProduct = localStorage.getItem("selectedProduct");
const selectedPrice = parseInt(localStorage.getItem("selectedPrice"));

const produkInput = document.getElementById("produkTerpilih");
const totalHargaInput = document.getElementById("totalHarga");
const jumlahInput = document.querySelector('input[type="number"]');

if (selectedProduct) {
  produkInput.value = selectedProduct;
}

if (selectedPrice && jumlahInput) {
  function updateTotal() {
    const qty = parseInt(jumlahInput.value) || 1;
    const total = selectedPrice * qty;
    totalHargaInput.value = "Rp" + total.toLocaleString();
  }

  jumlahInput.addEventListener("input", updateTotal);
  updateTotal();
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    nama: formData.get("nama"),
    email: formData.get("email"),
    telepon: formData.get("telepon"),
    alamat: formData.get("alamat"),
    kota: formData.get("kota"),
    kodePos: formData.get("kodePos"),
    produk: formData.get("produk"),
    harga: selectedPrice,
    jumlah: parseInt(formData.get("jumlah")),
    total: selectedPrice * parseInt(formData.get("jumlah")),
    ukuran: formData.get("ukuran"),
    metode: formData.get("metode"),
    catatan: formData.get("catatan"),
    tanggal: new Date().toLocaleString("id-ID"),
  };

  localStorage.setItem("invoiceData", JSON.stringify(data));

  const invoiceHistory = JSON.parse(localStorage.getItem("invoiceHistory") || "[]");
  invoiceHistory.push(data);
  localStorage.setItem("invoiceHistory", JSON.stringify(invoiceHistory));

  window.location.href = "invoice.html";
});