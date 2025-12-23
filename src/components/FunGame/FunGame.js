import './FunGame.css';

export class FunGame {
  constructor(targetElement) {
    this.target = targetElement; // Biasanya document.body
    this.currentQuestion = 0;
    this.score = 0;
    
    // --- DATABASE ICON ---
    this.icons = {
      close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
      trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`
    };

    // --- DATABASE PERTANYAAN ---
    this.questions = [
      {
        question: "Lagu apa yang paling sering saya dengar?",
        options: ["Tabola Bale", "Separuh Aku", "Bon Voyage", "Yellow"],
        answer: 2
      },
      {
        question: "Nama 'Ariel' diambil dari mana?",
        options: ["Mermaid", "Penyanyi Noah", "Merek Deterjen", "Tokoh Anime"],
        answer: 0
      },
      {
        question: "Makanan favorit saya adalah?",
        options: ["Nasi Goreng", "Mie Instan", "Sate Padang", "Dimsum Mentai"],
        answer: 3
      },
      {
        question: "Hobi apa yang paling saya suka?",
        options: ["Bermain Game", "Turu", "Nonton Drakor", "Fotografi"],
        answer: 2
      },
        {
        question: "Bahasa pemrograman apa yang paling saya kuasai?",
        options: ["Python", "JavaScript", "Java", "C++"],
        answer: 1
      }
    ];
  }

  // --- METHOD UTAMA YANG DICARI NAVBAR ---
  // Method ini hanya membuat Modal (Pop-up) tapi menyembunyikannya dulu
  renderModalOnly() {
    const container = document.createElement('div');
    container.className = 'fungame-wrapper'; // Wrapper agar rapi

    container.innerHTML = `
      <div id="gameModal" class="game-modal">
        <div class="game-content">
           <button id="btnCloseGame" class="close-btn" aria-label="Close">
             ${this.icons.close}
           </button>
           
           <div id="quizBody">
              </div>
        </div>
      </div>
    `;

    this.target.appendChild(container);
    this.bindInternalEvents();
  }

  // --- METHOD UNTUK MEMBUKA GAME ---
  // Dipanggil saat tombol Joystick di Navbar diklik
  openGame() {
    const modal = document.querySelector('#gameModal');
    if (modal) {
        modal.classList.add('active');
        this.resetGame();
    } else {
        console.error("Game Modal belum ter-render!");
    }
  }

  // --- EVENT LISTENER TOMBOL CLOSE ---
  bindInternalEvents() {
    const btnClose = document.querySelector('#btnCloseGame');
    const modal = document.querySelector('#gameModal');

    if (btnClose && modal) {
        btnClose.addEventListener('click', () => modal.classList.remove('active'));
        
        // Tutup jika klik di luar kotak
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.remove('active');
          }
        });
    }
  }

  // --- LOGIKA GAME DI BAWAH SINI ---

  resetGame() {
    this.currentQuestion = 0;
    this.score = 0;
    this.renderQuestion();
  }

  renderQuestion() {
    const quizBody = document.querySelector('#quizBody');
    if (!quizBody) return;

    // Cek Selesai
    if (this.currentQuestion >= this.questions.length) {
      this.showResult(quizBody);
      return;
    }

    const qData = this.questions[this.currentQuestion];

    let optionsHTML = '';
    qData.options.forEach((opt, index) => {
      optionsHTML += `<button class="option-btn" data-index="${index}">${opt}</button>`;
    });

    quizBody.innerHTML = `
      <h3 class="quiz-question">Pertanyaan ${this.currentQuestion + 1}/${this.questions.length}</h3>
      <p class="quiz-text">${qData.question}</p>
      <div class="options-grid">
        ${optionsHTML}
      </div>
    `;

    const optionBtns = quizBody.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleAnswer(e, parseInt(btn.dataset.index)));
    });
  }

  handleAnswer(e, selectedIndex) {
    const correctIndex = this.questions[this.currentQuestion].answer;
    const btn = e.target;
    const allBtns = document.querySelectorAll('.option-btn');

    allBtns.forEach(b => b.style.pointerEvents = 'none');

    if (selectedIndex === correctIndex) {
      btn.classList.add('correct');
      this.score++;
      this.createSparkle(e, btn, '#00ff88'); 
    } else {
      btn.classList.add('wrong');
      allBtns[correctIndex].classList.add('correct');
    }

    setTimeout(() => {
      this.currentQuestion++;
      this.renderQuestion();
    }, 1200);
  }

  showResult(container) {
    let message = "";
    if (this.score === this.questions.length) message = "Wow! Kamu kenal aku banget! 🥳";
    else if (this.score > 0) message = "Not bad! Lumayan lah ya 😉";
    else message = "Yah, salah semua. Kita belum kenal ya? 🥲";

    container.innerHTML = `
      <div class="result-area">
        <div class="trophy-icon">${this.icons.trophy}</div>
        <h2>Selesai!</h2>
        <div class="score-board">${this.score} / ${this.questions.length}</div>
        <p>${message}</p>
        <button id="btnReplay" class="replay-btn">Main Lagi</button>
      </div>
    `;

    const btnReplay = document.querySelector('#btnReplay');
    if(btnReplay) btnReplay.addEventListener('click', () => this.resetGame());
  }

  createSparkle(e, btn, color) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 12; i++) {
      const sparkle = document.createElement('span');
      sparkle.classList.add('game-sparkle');
      sparkle.style.backgroundColor = color;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      const angle = Math.random() * Math.PI * 2;
      const velocity = 20 + Math.random() * 40;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      sparkle.style.setProperty('--tx', `${tx}px`);
      sparkle.style.setProperty('--ty', `${ty}px`);
      sparkle.style.animation = `game-sparkle-anim 0.6s ease-out forwards`;
      
      btn.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 600);
    }
  }
}