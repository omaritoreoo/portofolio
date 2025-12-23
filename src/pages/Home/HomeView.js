import userPhoto from '../../../assets/foto-ariel.jpg';

export class HomeView {
  constructor(rootElement) {
    this.root = rootElement;
    // State untuk slider
    this.currentSlide = 0;
    this.totalSlides = 0;
  }

  render(data) {
    // --- 1. PERSIAPAN DATA SLIDER ---
    const allProjects = [];
    
    // Masukkan Main Project
    if (data.projects.main && data.projects.main.id) {
        allProjects.push(data.projects.main);
    }
    
    // Masukkan Secondary Projects
    if (data.projects.secondary && Array.isArray(data.projects.secondary)) {
        allProjects.push(...data.projects.secondary);
    } else if (data.projects.secondary && typeof data.projects.secondary === 'object') {
        allProjects.push(data.projects.secondary);
    }
    
    this.totalSlides = allProjects.length;

    // --- 2. DEFINISI ICON BACKGROUND (SVG) ---
    const floatingIconsHTML = `
        <svg class="bg-floating-icon icon-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        <svg class="bg-floating-icon icon-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        <svg class="bg-floating-icon icon-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>
        <svg class="bg-floating-icon icon-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
        <svg class="bg-floating-icon icon-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 12 16.5 4.21"></polyline><polyline points="7.5 19.79 12 12 16.5 19.79"></polyline><polyline points="3.29 10.5 12 12 20.71 10.5"></polyline><polyline points="3.29 13.5 12 12 20.71 13.5"></polyline></svg>
        <svg class="bg-floating-icon icon-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
    `;

    // --- 3. RENDER STRUKTUR UTAMA ---
    this.root.innerHTML = `
      <div id="navbar-area"></div>
      
      <section id="home" class="hero-full-width">
        <div class="hero-inner-content">
            <div class="status-badge-container">
              <div class="status-badge">
                 <img src="${userPhoto}" alt="Profile" class="status-avatar">
                 <div class="status-text-container">
                     <div style="color: white; font-weight:bold;">Ariel Febrio Hadi</div>
                     <div style="font-size: 0.8rem; color: #888;">Available for Work</div>
                 </div>
              </div>
            </div>
            <h1>
              <span class="scrolling-layer" data-text="CREATIVE">CREATIVE</span><br>
              <span class="outlined">DEVELOPER</span>
            </h1>
            <p style="max-width: 600px;">Informatics Student at Universitas Trisakti | Passionate about AI, Networking & Innovation</p>
        </div>
      </section>

      <div class="cyber-landscape">
        <div class="landscape-ground"></div>
        <div class="character-parade">
           <div class="parade-track">
              <span class="char floating"><svg xmlns="http://www.w3.org/2000/svg" class="cyber-icon" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></span>
              <span class="char bounce"><svg xmlns="http://www.w3.org/2000/svg" class="cyber-icon" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span>
           </div>
        </div>
      </div>

      <div class="home-container" style="padding-bottom: 0;">
        <section id="works" class="projects-section">
           
           <div class="carousel-header">
               <h2 class="section-title" style="margin-bottom:0;">/// SELECTED WORKS</h2>
           </div>
           
           <div class="carousel-container">
               
               <button id="prev-btn" class="nav-btn disabled" aria-label="Previous Project">
                   <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
               </button>

               <div class="carousel-track" id="project-track">
                  ${allProjects.map(project => `
                      <div class="carousel-item">
                          ${this._renderProjectCard(project)}
                      </div>
                  `).join('')}
               </div>

               <button id="next-btn" class="nav-btn" aria-label="Next Project">
                   <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
               </button>

           </div>

        </section>
      </div>

      <section id="about-me" class="contact-section-separated">
         ${floatingIconsHTML} 
         <div class="contact-content">
            <h2 class="contact-heading">HAVE AN IDEA?</h2>
            <p class="contact-sub">Let's build something useful together.</p>
            <button id="btn-contact" class="btn-neon-large">
               START A PROJECT <span style="margin-left:10px;">➔</span>
            </button>
         </div>
      </section>

      <div class="about-experience-wrapper">
        
        ${floatingIconsHTML} 
        
        <section id="about-me" class="about-section">
            <div class="about-container">
                <div class="about-image-wrapper">
                    <img src="${userPhoto}" alt="Ariel Febrio Hadi" class="profile-img">
                    <div class="img-glow"></div>
                </div>
                <div class="about-text-content">
                    <h2 class="section-heading">ABOUT <span class="text-accent">ME</span></h2>
                    <p>
                        I am an <strong>Informatics student at Universitas Trisakti</strong> dedicated to continuous learning and innovation. With a GPA of <strong>3.6 (Academic Achievement Scholarship)</strong>, I combine academic excellence with practical experience.
                    </p>
                    <p>
                        My journey spans from being a <strong>Laboratory Assistant</strong> (AI, Algorithms, Networks) to holding strategic roles like <strong>Secretary at BEM FTI</strong>. I also have hands-on IT field experience in maintenance & support.
                    </p>
                    <p>
                        I aim to develop meaningful projects that combine <strong>AI, Technology, and Community Impact.</strong>
                    </p>
                    <div class="mini-skills">
                        <span>Python</span><span>Neural Networks</span><span>Web Dev</span><span>IT Support</span><span>Leadership</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="about-me" class="experience-section">
            <h2 class="section-heading center-text">EXPERIENCE</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Aug 2025 - Present</div>
                    <div class="timeline-content">
                        <h3>Apprenticeship: AI & Web Back-End</h3>
                        <span class="company">Asah led by Dicoding (Remote)</span>
                        <p>Focusing on Front-End, Back-End Web Development, and Artificial Intelligence (AI) integration.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Jan 2025 - Present</div>
                    <div class="timeline-content">
                        <h3>Organizational Leadership</h3>
                        <span class="company">BEM FTI & HMTIF Usakti</span>
                        <ul class="exp-list">
                            <li><strong>Secretary (BEM FTI - Kabinet Arka 25/26):</strong> Managing administrative workflows, official correspondence, proposal verification, and organizational data archiving.</li>
                            <li><strong>Staff of Research & Tech (BEM):</strong> Supported academic innovation programs and seminars.</li>
                            <li><strong>Staff of Kominfo (HMTIF):</strong> Managed internal/external communications and digital content.</li>
                            <li><strong>Event Coordinator:</strong> Led "Innovative Idea Contest 2025".</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Jan 2025 - Present</div>
                    <div class="timeline-content">
                        <h3>Laboratory Assistant</h3>
                        <span class="company">Universitas Trisakti</span>
                        <ul class="exp-list">
                            <li><strong>Neural Networks & Deep Learning:</strong> Guiding students in TensorFlow, Keras, perceptrons, and backpropagation models.</li>
                            <li><strong>Algorithms & Programming:</strong> Teaching programming fundamentals using Python.</li>
                            <li><strong>Computer Networks:</strong> Instructing on Cisco Packet Tracer, LAN, VLAN, and network troubleshooting.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Aug 2021 - Dec 2021</div>
                    <div class="timeline-content">
                        <h3>IT Support & Maintenance Intern</h3>
                        <span class="company">PT. Liberty Jaya</span>
                        <p>Responsible for hardware/software maintenance, CCTV installation assistance, and client technical support/troubleshooting.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact-area" class="social-footer-section">
             <h2 class="section-heading center-text">CONNECT</h2>
             <p style="color:#888; margin-bottom:30px;">Feel free to reach out or follow my daily tech journey.</p>
             <div class="social-grid">
                <a href="mailto:arielfebriohadi@gmail.com" class="social-card email"><svg class="social-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span>Email</span></a>
                <a href="https://linkedin.com/in/ariel-febrio" target="_blank" class="social-card linkedin"><svg class="social-icon" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg><span>LinkedIn</span></a>
                <a href="https://instagram.com/arieel.f" target="_blank" class="social-card instagram"><svg class="social-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg><span>Instagram</span></a>
                <a href="https://www.youtube.com/@arieels" class="social-card youtube"><svg class="social-icon" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg><span>YouTube</span></a>
                <a href="https://x.com/arielfeb" class="social-card twitter"><svg class="social-icon" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg><span>Twitter / X</span></a>
                <a href="https://open.spotify.com/user/dmo2ppvnx6oeyc21z38yvfbqb?si=857e8b3cea5a4406" class="social-card spotify"><svg class="social-icon" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.299z"/></svg><span>Spotify</span></a>
                <a href="https://discord.gg/add/{<@433987557450317844>}>" class="social-card discord"><svg class="social-icon" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg><span>Discord</span></a>
             </div>
        </section>
      </div>
    `;

    this.bindEvents(data);
    this.initSlider(); 
    this.initScrollSpy(); 
  }

  // --- HELPER: RENDER KARTU PROJECT ---
  _renderProjectCard(project) {
    if (!project) return '';
    
    let bgIcon = '';
    if (project.id && project.id.includes('mvco')) {
        bgIcon = `<svg class="card-bg-icon mining-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
    } else {
        bgIcon = `<svg class="card-bg-icon abstract-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    }

    const bgImageStyle = (project.images && project.images[0]) 
        ? `background-image: url('${project.images[0]}');` 
        : '';

    return `
      <div class="premium-card project-card-trigger" data-id="${project.id}">
        <div class="card-bg-image" style="${bgImageStyle}"></div>
        <div class="card-icon-layer">${bgIcon}</div>
        <div class="card-overlay-gradient"></div>

        <div class="card-content-wrapper">
           <div class="tags-wrapper">
              <span class="project-tag">${project.category || 'Development'}</span>
              <span class="project-tag tag-highlight">${project.year || '2024'}</span>
           </div>

           <div class="text-content">
              <h3 class="premium-title">${project.title}</h3>
              <p class="premium-desc">${project.shortDescription || project.description || 'No description available.'}</p>
           </div>

           <div class="card-footer">
              <div class="tech-list">${(project.techStack || []).slice(0, 3).join(' • ')}</div>
              <div class="arrow-circle">↗</div>
           </div>
        </div>
      </div>
    `;
  }

  // --- LOGIKA SCROLL SPY ---
  initScrollSpy() {
    const sections = document.querySelectorAll("section");
    // Pastikan navbar Anda di HTML utama memiliki class .nav-link
    const navLinks = document.querySelectorAll(".nav-link"); 

    const sectionMap = {
      'home': '#home', // Home aktifkan Home
      'works': '#works', // Works aktifkan Works
      'have-an-idea': '#about', // Have Idea aktifkan About
      'about-me': '#about', // About aktifkan About
      'experience': '#about', // Experience aktifkan About
      'contact-area': '#contact' // Connect aktifkan Contact
    };

    const observerOptions = {
      root: null,
      threshold: 0.25, 
      rootMargin: "-10% 0px -50% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;
          const targetHref = sectionMap[currentId];

          if (targetHref) {
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeLink = document.querySelector(`.nav-link[href="${targetHref}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  // --- LOGIKA SLIDER (Tetap sama) ---
  initSlider() {
    const track = this.root.querySelector('#project-track');
    const prevBtn = this.root.querySelector('#prev-btn');
    const nextBtn = this.root.querySelector('#next-btn');

    if (!track || !prevBtn || !nextBtn) return;

    const updatePosition = () => {
        const items = track.querySelectorAll('.carousel-item');
        if (items.length === 0) return;
        
        const itemWidth = items[0].offsetWidth; 
        const gap = 30; 
        const moveAmount = itemWidth + gap;

        track.style.transform = `translateX(-${this.currentSlide * moveAmount}px)`;

        const containerWidth = this.root.querySelector('.carousel-container').offsetWidth;
        // eslint-disable-next-line no-unused-vars
        const visibleItems = Math.floor(containerWidth / moveAmount);
        
        if (this.currentSlide === 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }

        const totalTrackWidth = this.totalSlides * moveAmount;
        const currentScroll = this.currentSlide * moveAmount;
        
        if (currentScroll + containerWidth >= totalTrackWidth - 50) { 
             nextBtn.classList.add('disabled');
        } else {
             nextBtn.classList.remove('disabled');
        }
    };

    nextBtn.addEventListener('click', () => {
        const items = track.querySelectorAll('.carousel-item');
        const itemWidth = items[0].offsetWidth + 30;
        const containerWidth = this.root.querySelector('.carousel-container').offsetWidth;
        const totalTrackWidth = this.totalSlides * itemWidth;
        const currentScroll = this.currentSlide * itemWidth;

        if (currentScroll + containerWidth < totalTrackWidth - 10) {
            this.currentSlide++;
            updatePosition();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            updatePosition();
        }
    });

    window.addEventListener('resize', () => {
        this.currentSlide = 0;
        updatePosition();
    });

    updatePosition();
  }

  bindEvents(data) {
    const contactBtn = this.root.querySelector('#btn-contact');
    if (contactBtn && data.onContactClick) {
      contactBtn.addEventListener('click', data.onContactClick);
    }

    const projectCards = this.root.querySelectorAll('.project-card-trigger');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-id');
            if (data.onProjectClick) {
                data.onProjectClick(projectId);
            }
        });
    });
  }
}