document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen
    const menuToggle = document.getElementById('menu-toggle-kc'); // Tombol Hamburger di Navbar
    const mobileMenu = document.getElementById('mobileMenu');     // Overlay menu
    const closeMenu = document.getElementById('closeMenu');       // Tombol Tutup (X)

    // 1. Fungsi untuk membuka menu
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden'; // Mencegah scrolling pada body
        });
    }

    // 2. Fungsi untuk menutup menu dengan tombol X
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = ''; // Mengaktifkan kembali scrolling
        });
    }

    // 3. Fungsi untuk menutup menu ketika mengklik link di dalamnya
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Beri sedikit penundaan agar transisi penutupan menu terlihat
                setTimeout(() => {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                }, 300); 
            });
        });
        
        // 4. Tutup menu jika mengklik di luar area konten menu (background gelap)
        mobileMenu.addEventListener('click', function(event) {
            if (event.target === mobileMenu) {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
});