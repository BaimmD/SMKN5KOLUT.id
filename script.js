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