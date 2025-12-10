/**
 * ====================================
 * 1. STATUS HELPER (Universal)
 * ====================================
 * Fungsi untuk menampilkan pesan status pada elemen #status.
 * @param {string} msg - Pesan yang akan ditampilkan.
 * @param {string} color - Warna teks (misal: 'red', 'lime', '#00eaff').
 */
function setStatus(msg, color) {
    const statusElement = document.getElementById("status");
    
    // Pastikan elemen #status ada sebelum mencoba mengaturnya
    if (statusElement) {
        statusElement.textContent = msg; 
        statusElement.style.color = color;
    }
}


/**s
 * ====================================
 * 2. FORM HANDLING (Logika Utama)
 * ====================================
 * Menangani submission form di #kontak section (id="contactForm").
 */
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    
    // Logika hanya berjalan jika elemen form ditemukan
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            // DOM Caching dan Sanitasi Input
            const namaInput = document.getElementById("nama").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            // Input lain seperti 'telepon' dan 'pesan' tidak di-cache jika tidak diperlukan validasi khusus di sini

            // --- Validasi Input Wajib ---
            if (namaInput === "" || emailInput === "") {
                setStatus("⚠ Harap isi Nama Lengkap dan Email!", "red");
                return; 
            }
            
            // --- SIMULASI Pengiriman Data ---
            // Di sini adalah tempat untuk menambahkan logika pengiriman data ke server (misal: AJAX/Fetch API)
            
            // 1. Tampilkan pesan sukses
            setStatus("✔ Pendaftaran awal Anda berhasil dikirim! Kami akan segera menghubungi Anda.", "lime");
            
            // 2. Kosongkan form
            contactForm.reset();

            // 3. Tambahan UX: Hapus pesan status setelah 5 detik
            setTimeout(() => {
                setStatus("", "white"); 
            }, 5000);
        });
    }
});