// src/components/Navbar/Navbar.js
import { FunGame } from '../FunGame/FunGame.js'; // Import Class Game

export class Navbar {
  constructor(targetElement) {
    this.target = targetElement;
    // Inisialisasi Game tapi jangan di-render tombolnya dulu
    // Kita akan panggil method open() nya nanti
    this.gameModule = new FunGame(document.body); 
  }

  render() {
    this.target.innerHTML = `
      <div class="navbar-container">
        
        <nav class="nav-segment left">
          <a href="#home" class="nav-link active" data-section="home">Home</a>
          <a href="#works" class="nav-link" data-section="works">Works</a>
        </nav>

        <button id="navGameBtn" class="center-game-btn" aria-label="Play Game">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4m-2-2v4"></path><line x1="15" y1="11" x2="15.01" y2="11"></line><line x1="18" y1="13" x2="18.01" y2="13"></line></svg>
        </button>

        <nav class="nav-segment right">
          <a href="#about-me" class="nav-link" data-section="about-me">About</a>
          <a href="#contact-area" class="nav-link" data-section="contact-area">Contact</a>
        </nav>

      </div>
    `;

    // Render Modal Game (Hanya modalnya, tombolnya pakai yang di navbar)
    this.gameModule.renderModalOnly(); 

    this.bindEvents();
    this.initScrollSpy();
  }

  bindEvents() {
    const links = this.target.querySelectorAll('.nav-link');
    const gameBtn = this.target.querySelector('#navGameBtn');

    // 1. EVENT KLIK TOMBOL GAME
    gameBtn.addEventListener('click', (e) => {
        // Efek Sparkle (Biar seru)
        this.createSparkleEffect(e, gameBtn);
        
        // Buka Game
        this.gameModule.openGame(); 
    });

    // 2. EVENT KLIK LINK BIASA
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.createSparkleEffect(e, link);
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
      });
    });
  }

  createSparkleEffect(e, btn) {
    const particleCount = 8; 
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    for (let i = 0; i < particleCount; i++) {
      const sparkle = document.createElement('span');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      const angle = Math.random() * Math.PI * 2;
      const velocity = 30 + Math.random() * 30;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      sparkle.style.setProperty('--tx', `${tx}px`);
      sparkle.style.setProperty('--ty', `${ty}px`);
      sparkle.style.animation = `sparkle-burst ${0.5 + Math.random() * 0.2}s ease-out forwards`;

      btn.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    }
  }

  initScrollSpy() {
    // (Logika Scroll Spy sama persis seperti sebelumnya)
    const navLinks = this.target.querySelectorAll('.nav-link');
    const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href').substring(1));
    const onScroll = () => {
        const scrollPosition = window.scrollY + (window.innerHeight * 0.4);
        let currentSection = '';
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = id;
                }
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) link.classList.add('active');
        });
    };
    window.addEventListener('scroll', onScroll);
    setTimeout(onScroll, 100); 
  }
}