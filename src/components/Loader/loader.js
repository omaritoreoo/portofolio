// src/components/Loader/Loader.js

export class Loader {
  constructor(targetElement) {
    this.target = targetElement;
  }

  render() {
    const loaderContainer = document.createElement('div');
    loaderContainer.id = 'page-loader';
    
    // PILIH SALAH SATU STYLE DI BAWAH INI:
    
    // --- OPSI 1: MODERN SPINNER (Rekomendasi) ---
    

     const loadingIcon = `
      <svg class="loading-svg" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
        <path d="M12 22a10 10 0 0 1-10-10"></path>
      </svg>
    `;
    

    loaderContainer.innerHTML = `
      <div class="loader-content">
        <div class="spinner-wrapper">
            ${loadingIcon}
        </div>
        <div class="loader-text">LOADING</div>
      </div>
    `;

    this.target.prepend(loaderContainer);
    this.initLoader();
  }

  initLoader() {
    const loader = document.getElementById('page-loader');
    
    const hideLoader = () => {
      loader.classList.add('hidden');
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 1000); // Sesuai durasi transisi CSS
    };

    // LOGIKA SPA FRIENDLY:
    // Cek apakah halaman sudah selesai dimuat sebelumnya?
    if (document.readyState === 'complete') {
      // Jika pindah halaman (Router), kasih delay dikit biar efek blurnya kerasa
      setTimeout(hideLoader, 1500); 
    } else {
      // Jika Refresh / Pertama buka, tunggu window load
      window.addEventListener('load', () => {
        setTimeout(hideLoader, 1000);
      });
    }
  }
}