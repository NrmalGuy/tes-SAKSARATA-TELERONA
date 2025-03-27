// script.js

// Fungsi untuk mengelola pengiriman formulir kontak
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Ambil nilai dari input
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // Validasi sederhana
    if (name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        // Reset formulir setelah pengiriman
        this.reset();
    } else {
        alert('Silakan lengkapi semua kolom.');
    }
});

// Fungsi untuk animasi scroll ke bagian tertentu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll halus ke elemen target
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk mengelola tombol pembelian tiket
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const ticketType = this.parentElement.parentElement.children[0].innerText;
        alert(`Anda telah memilih untuk membeli tiket: ${ticketType}`);
        // Di sini Anda bisa menambahkan logika untuk mengarahkan ke halaman pembayaran
    });
});