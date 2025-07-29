const data = JSON.parse(localStorage.getItem("invoiceData"));
const container = document.getElementById("invoiceData");

if (data) {
  container.innerHTML = `
      <div class="invoice-item"><span class="label">Nama:</span> ${data.nama}</div>
      <div class="invoice-item"><span class="label">Email:</span> ${data.email}</div>
      <div class="invoice-item"><span class="label">Telepon:</span> ${data.telepon}</div>
      <div class="invoice-item"><span class="label">Alamat:</span> ${data.alamat}, ${data.kota}, ${data.kodePos}</div>
      <div class="invoice-item"><span class="label">Produk:</span> ${data.produk}</div>
      <div class="invoice-item"><span class="label">Ukuran:</span> ${data.ukuran}</div>
      <div class="invoice-item"><span class="label">Harga Satuan:</span> Rp${data.harga.toLocaleString()}</div>
      <div class="invoice-item"><span class="label">Jumlah:</span> ${data.jumlah}</div>
      <div class="invoice-item total"><span class="label">Total Bayar:</span> Rp${data.total.toLocaleString()}</div>
      <div class="invoice-item"><span class="label">Metode Pembayaran:</span> ${data.metode}</div>
    `;
} else {
  container.innerHTML = `<p>Data tidak ditemukan. Silakan lakukan transaksi terlebih dahulu.</p>`;
}