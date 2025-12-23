// src/pages/Project/ProjectDetailPresenter.js

import { ProjectDetailView } from './ProjectDetailView.js';
import { projectsData } from '../../data/projects.js';

export class ProjectDetailPresenter {
  constructor(router) {
    this.router = router;
    this.view = new ProjectDetailView(document.getElementById('app'));
  }

  init(projectId) {
    const rawProject = projectsData[projectId];

    if (rawProject) {
      // 1. OLAH DATA DI SINI (Logic)
      // Kita ubah data mentah menjadi ViewModel yang bersih
      const viewModel = this._createViewModel(rawProject);

      // 2. Kirim data yang sudah bersih ke View
      this.view.render(viewModel, () => {
        this.handleBack();
      });
    } else {
      this.renderError();
    }
  }

  // Helper Private: Mengolah data mentah agar View tidak perlu mikir
  _createViewModel(project) {
    const demoLink = project.links?.demo || project.demo;
    
    return {
      title: project.title,
      category: project.category,
      year: project.year,
      techStack: project.techStack || [],
      description: project.description,
      
      // LOGIKA GAMBAR: Pilih gambar pertama jika array
      mainImage: Array.isArray(project.images) ? project.images[0] : project.image,
      
      // LOGIKA LINK: Tentukan apakah link valid/aktif
      demoLink: demoLink,
      hasDemo: demoLink && demoLink !== '#',
      
      githubLink: project.links?.github || project.github,
      
      // LOGIKA YOUTUBE: Regex dipindah ke sini
      videoId: this._extractYouTubeId(project.links?.video || project.video),
      
      // TIM: Pastikan array selalu ada
      team: project.team || []
    };
  }

  // Helper Private: Regex YouTube
  _extractYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  handleBack() {
    this.router.navigateTo('/');
  }

  renderError() {
    // Error handling code...
    document.getElementById('app').innerHTML = '<h1 style="color:white; text-align:center;">404 Not Found</h1>';
  }
}