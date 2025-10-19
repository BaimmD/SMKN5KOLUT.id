document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle-kc'); 
    const mobileMenu = document.getElementById('mobileMenu');     
    const closeMenu = document.getElementById('closeMenu');       

    // 1. Fungsi untuk membuka menu
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden'; 
        });
    }

    // 2. Fungsi untuk menutup menu dengan tombol X
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = ''; 
        });
    }

    // 3. Menutup menu ketika mengklik link atau di luar menu
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
        
        // Tutup menu jika mengklik di luar area konten menu (background gelap)
        mobileMenu.addEventListener('click', function(event) {
            if (event.target === mobileMenu) {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
});