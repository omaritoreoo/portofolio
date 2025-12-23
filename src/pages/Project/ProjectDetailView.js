// src/pages/Project/ProjectDetailView.js

export class ProjectDetailView {
  constructor(rootElement) {
    this.root = rootElement;
  }

  render(data, onBackClick) {
    window.scrollTo(0, 0);

    // --- PERBAIKAN UTAMA: LOGIKA BASE PATH ---
    // 1. Cek apakah kita sedang di GitHub Pages?
    const isGitHub = window.location.hostname.includes('github.io');
    
    // 2. Tentukan awalan alamat (Prefix)
    // Jika di GitHub, tambahkan '/portofolio/'. Jika di Localhost, cukup '/'
    const repoName = 'portofolio'; // Pastikan ejaan sama dengan nama repo kamu
    const basePath = isGitHub ? `/${repoName}/` : '/';

    // 3. Fungsi pembantu untuk memperbaiki link gambar
    const fixImg = (path) => {
        if (!path) return '';
        // Jika path adalah link internet (https://...), biarkan saja
        if (path.startsWith('http')) return path;
        
        // Hapus tanda '/' di depan nama file jika ada, biar tidak double
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        
        // Gabungkan: /portofolio/ + assets/foto.jpg
        return `${basePath}${cleanPath}`;
    };
    // ------------------------------------------

    this.root.innerHTML = `
      <div class="project-detail-container fade-in">
        
        <div class="detail-nav">
          <button id="btn-back" class="btn-back">
            <span>&lt; SYSTEM_LOGS / BACK</span>
          </button>
        </div>

        <div class="detail-hero">
          <img src="${fixImg(data.mainImage)}" alt="${data.title}" class="detail-img">
          <div class="detail-overlay"></div>
          
          <h1 class="detail-title">${data.title}</h1>

          <div class="hero-cta-container">
             ${data.hasDemo 
               ? `<a href="${data.demoLink}" target="_blank" class="btn-launch">
                    <span class="btn-text">LAUNCH PROJECT</span>
                    <span class="btn-icon">↗</span>
                  </a>`
               : `<div class="status-offline">
                    <span class="blink-red">●</span> SYSTEM OFFLINE / INTERNAL ONLY
                  </div>`
             }
          </div>
        </div>

        <div class="detail-content">
          
          <div class="detail-sidebar">
            <div class="info-block">
              <span class="label">CATEGORY</span>
              <p>${data.category}</p>
            </div>
            <div class="info-block">
              <span class="label">YEAR</span>
              <p>${data.year}</p>
            </div>
            <div class="info-block">
              <span class="label">TECH STACK</span>
              <div class="tech-tags">
                ${data.techStack.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
              </div>
            </div>
            
            <div class="action-buttons">
              ${data.githubLink ? `
                <a href="${data.githubLink}" target="_blank" class="btn-outline-block">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                   SOURCE CODE
                </a>
              ` : ''}
            </div>
          </div>

          <div class="detail-main-area">
            
            <div class="detail-desc">
              <div class="desc-header">/// PROJECT_DESCRIPTION_Render.md</div>
              <div class="desc-body">
                ${data.description}
              </div>
            </div>

            ${data.videoId ? `
              <div class="detail-desc" style="margin-top: 30px;">
                <div class="desc-header">/// VISUAL_DEMO_SEQUENCE.mp4</div>
                <div class="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/${data.videoId}" 
                    title="Project Demo Video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            ` : ''}

            ${data.team.length > 0 ? `
              <div class="team-section">
                <div class="desc-header" style="margin-top: 40px;">/// SQUAD_CREDITS.exe</div>
                <div class="team-grid">
                  ${data.team.map(member => `
                    <a href="${member.linkedin}" target="_blank" class="team-card">
                       <div class="team-avatar">
                          <img src="${fixImg(member.photo)}" alt="${member.name}" class="avatar-img">
                       </div>
                       <div class="team-info">
                          <div class="team-name">${member.name}</div>
                          <div class="team-role">${member.role}</div>
                       </div>
                       <div class="team-link">↗</div>
                    </a>
                  `).join('')}
                </div>
              </div>
            ` : ''}

          </div>
        </div>
      </div>
    `;

    const btnBack = this.root.querySelector('#btn-back');
    if(btnBack) btnBack.addEventListener('click', onBackClick);
  }
}