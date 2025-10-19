
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function () {
        setTimeout(() => {
            preloader.classList.add('loaded');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    });

    // Catatan: Script untuk Mobile Menu telah dihapus karena elemen nav dihilangkan.
});

document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Tentukan waktu minimum tampilan preloader (misal: 0.5 detik)
    const MIN_LOAD_TIME = 300; // dalam milidetik (ms)
    let loadStartTime = Date.now();

    // Fungsi untuk menyembunyikan preloader
    const hidePreloader = () => {
        let loadEndTime = Date.now();
        let timeElapsed = loadEndTime - loadStartTime;
        let delay = 0;

        // Hitung delay yang diperlukan agar preloader tampil MIN_LOAD_TIME
        if (timeElapsed < MIN_LOAD_TIME) {
            delay = MIN_LOAD_TIME - timeElapsed;
        }

        setTimeout(() => {
            preloader.classList.add('loaded');

            // Hapus elemen dari DOM setelah animasi fade out selesai (600ms)
            setTimeout(() => {
                preloader.remove();
            }, 600);
        }, delay);
    };

    // 1. Sembunyikan setelah semua aset dimuat
    window.addEventListener('load', hidePreloader);

    // 2. Sembunyikan sebagai fallback jika 'load' event gagal (jarang terjadi)
    //    Kita tidak menggunakan ini untuk menghindari konflik, fokus pada window.onload
});

document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    // PRELOADER
    window.addEventListener('load', function () {
        setTimeout(() => {
            preloader.classList.add('loaded');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    });

    // NAVBAR MOBILE TOGGLE
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden'; // Mencegah scroll saat menu terbuka
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    }

    // Tutup menu saat link diklik (di mobile)
    document.querySelectorAll('.mobile-nav-overlay a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        });
    });
});
// Fungsi yang dipanggil setelah seluruh aset (gambar, css, js) dimuat
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader-kc');
    if (preloader) {
        // Tambahkan kelas untuk memulai transisi CSS (opacity: 0 dan visibility: hidden)
        preloader.classList.add('preloader-hidden');

        // Opsional: Hapus elemen dari DOM setelah transisi selesai
        preloader.addEventListener('transitionend', function () {
            preloader.remove();
        });
    }
});

// ===========================================
// 1. Fungsionalitas PRELOADER (Splash Screen)
// ===========================================
const mainContent = document.querySelector('main');

function initializeContentAnimation() {
    // Pastikan mainContent ada sebelum menambahkan kelas
    if (mainContent) {
        // Tambahkan kelas setelah preloader selesai atau setelah loading
        mainContent.classList.add('content-loaded');
    }
}

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader-kc');

    // Logika Preloader (menyembunyikan)
    if (preloader) {
        setTimeout(function () {
            preloader.classList.add('preloader-hidden');
            preloader.addEventListener('transitionend', function () {
                preloader.style.display = 'none';
                // Panggil fungsi untuk memunculkan konten utama setelah preloader hilang
                initializeContentAnimation();
            });
        }, 300);
    } else {
        // Jika preloader dinonaktifkan/tidak ada, segera munculkan konten
        initializeContentAnimation();
    }
});

particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;