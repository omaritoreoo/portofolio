// src/app.js

import { HomePresenter } from './pages/Home/HomePresenter.js';
import { ProjectDetailPresenter } from './pages/Project/ProjectDetailPresenter.js';
import { Loader } from './components/Loader/loader.js';


class App {
  constructor() {
    this.root = document.getElementById('app');
    
    this.router = {
      navigateTo: (path) => {
        window.history.pushState({}, '', path);
        this.renderPage(path);
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

        // --- PERBAIKAN ROUTER UNTUK GITHUB PAGES ---
        
        // Masukkan nama repository kamu di sini (sesuai yang dibuat di Langkah 1)
        // Jika nanti pakai domain sendiri (misal ariel.com), kosongkan jadi ''
        const repoName = '/portfolio'; 
        
        // Kita hapus nama repo dari path agar Router tidak bingung
        let normalizedPath = path.replace(repoName, '');
        
        // Hapus slash depan/belakang
        const cleanPath = normalizedPath.replace(/^\/|\/$/g, '');
        
        const parts = cleanPath.split('/');
        const route = parts[0] === '' ? 'home' : parts[0];

        // --- AKHIR PERBAIKAN ---

        if (route === 'home') {
             // ... (kode sama) ...
             const homePresenter = new HomePresenter(this.router);
             homePresenter.init();
        } else if (route === 'project') {
             // ... (kode sama) ...
             const projectId = parts[1];
             const detailPresenter = new ProjectDetailPresenter(this.router);
             detailPresenter.init(projectId);
        } else {
             this.root.innerHTML = '<h1 style="color:white; text-align:center; margin-top:100px;">404 - Page Not Found</h1>';
        }
        
        window.scrollTo(0, 0);

    }, 100); 
  }
}

const app = new App();
app.init();