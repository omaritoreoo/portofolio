// src/app.js

import { HomePresenter } from './pages/Home/HomePresenter.js';
import { ProjectDetailPresenter } from './pages/Project/ProjectDetailPresenter.js';
import { Loader } from './components/Loader/loader.js'; 
// Pastikan nama file loader.js kecil/besar sesuai file aslinya

class App {
  constructor() {
    this.root = document.getElementById('app');
    
    // --- KONFIGURASI NAMA REPO (PENTING!) ---
    // Sesuaikan persis dengan URL GitHub kamu: /portofolio
    this.repoName = '/portofolio'; 

    this.router = {
      navigateTo: (path) => {
        // Saat pindah halaman, kita tempelkan nama repo agar URL tetap valid
        // Misal: user klik project -> URL jadi /portofolio/project/1
        const fullPath = this.repoName + path;
        window.history.pushState({}, '', fullPath);
        this.renderPage(fullPath);
      }
    };

    window.addEventListener('popstate', () => {
      this.renderPage(window.location.pathname);
    });
  }

  init() {
    this.renderPage(window.location.pathname);
  }

  renderPage(path) {
    // 1. TAMPILKAN LOADER
    const loader = new Loader(document.body);
    loader.render();

    setTimeout(() => {
        this.root.innerHTML = ''; 

        // --- PERBAIKAN ROUTER ---
        
        let normalizedPath = path;

        // 1. Cek apakah path mengandung nama repo? Jika ya, hapus.
        // Contoh: "/portofolio/index.html" -> "/index.html"
        if (normalizedPath.startsWith(this.repoName)) {
            normalizedPath = normalizedPath.replace(this.repoName, '');
        }

        // 2. Bersihkan slash di depan & belakang
        // Contoh: "/index.html" -> "index.html"
        const cleanPath = normalizedPath.replace(/^\/|\/$/g, '');
        
        const parts = cleanPath.split('/');
        
        // 3. Tentukan Route (Logic agar Home terdeteksi)
        // Jika kosong '' atau 'index.html', arahkan ke home
        let route = parts[0];
        if (route === '' || route === 'index.html') {
            route = 'home';
        }

        // --- SWITCH HALAMAN ---

        if (route === 'home') {
             const homePresenter = new HomePresenter(this.router);
             homePresenter.init();
        } else if (route === 'project') {
             const projectId = parts[1];
             const detailPresenter = new ProjectDetailPresenter(this.router);
             detailPresenter.init(projectId);
        } else {
             console.log("Error 404. Path asli:", path, "| Path bersih:", route);
             this.root.innerHTML = '<h1 style="color:white; text-align:center; margin-top:100px;">404 - Page Not Found</h1>';
        }
        
        window.scrollTo(0, 0);

    }, 100); 
  }
}

const app = new App();
app.init();