import { HomeView } from './HomeView.js';
import { projectsData } from '../../data/projects.js';
import { Navbar } from '../../components/Navbar/Navbar.js';

export class HomePresenter {
  constructor(router) {
    this.router = router;
    this.view = new HomeView(document.getElementById('app'));
  }

  init() {
    // 1. SIAPKAN DATA
    const mainProjectId = 'mvco-ai'; // ID Project Utama
    
    // Ambil object Main Project
    const mainProject = projectsData[mainProjectId];

    // Ambil Project Lainnya (Secondary) sebagai ARRAY
    // Kita filter projectsData agar Main Project tidak muncul dobel di slider (opsional, tapi lebih rapi)
    const secondaryProjects = Object.values(projectsData).filter(
        project => project.id !== mainProjectId
    );

    const viewData = {
      role: "Creative Developer", 
      projects: {
        // Project yang akan tampil paling kiri (pertama)
        main: mainProject || { title: "Loading...", category: "Error", techStack: [] },
        
        // Sisa project yang akan masuk ke slider (harus Array)
        secondary: secondaryProjects 
      },
      
      onContactClick: () => {
        window.location.href = "mailto:arielfebriohadi@gmail.com"; 
      },
      
      onProjectClick: (projectId) => {
        if (this.router) {
            this.router.navigateTo(`project/${projectId}`);
        }
      }
    };

    // 2. RENDER HALAMAN HOME
    this.view.render(viewData);

    // 3. RENDER NAVBAR
    // Pastikan elemen #navbar-area sudah ada di DOM setelah view.render()
    const navbarContainer = document.getElementById('navbar-area');
    if (navbarContainer) {
        const navbar = new Navbar(navbarContainer);
        navbar.render();
    }
  }
}