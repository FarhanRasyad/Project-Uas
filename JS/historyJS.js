const container = document.getElementById("historyContainer");
const historyData = JSON.parse(localStorage.getItem("invoiceHistory") || "[]");

if (historyData.length === 0) {
  container.innerHTML = `
        <div class="empty-state">
          <h2>Belum ada transaksi</h2>
          <p>Silakan lakukan pembelian terlebih dahulu.</p>
        </div>
      `;
} else {
  historyData.reverse().forEach((data, index) => {
    const card = document.createElement("div");
    card.className = "invoice-card";
    card.innerHTML = `
          <h3>Invoice #${historyData.length - index}</h3>
          <p><b>Nama:</b> ${data.nama}</p>
          <p><b>Produk:</b> ${data.produk} (${data.ukuran})</p>
          <p><b>Jumlah:</b> ${data.jumlah}</p>
          <p><b>Metode Pembayaran:</b> ${data.metode}</p>
          <p><b>Total:</b> Rp${data.total.toLocaleString("id-ID")}</p>
          <p><b>Tanggal:</b> ${data.tanggal}</p>
        `;
    container.appendChild(card);
  });
}