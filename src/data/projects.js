export const projectsData = {
  "mvco-ai": {
    id: "mvco-ai",
    title: "MVCO-AI: Intelligent Mining Assistant",
    category: "Capstone Project - Machine Learning",
    year: "2025",
    
    // Deskripsi singkat untuk kartu di halaman depan (opsional jika dipakai)
    shortDescription: "Transformasi industri pertambangan dari pemantauan pasif menjadi pengambilan keputusan proaktif dengan Agentic AI.",
    demo: "https://dashboard-production-8c8d.up.railway.app",
    github: "https://github.com/Rombon07/Capstone_Project_Mining-Value-Chain-Optimization",
    video: "https://youtu.be/-rf-_tlHPgY", // Saya tambahkan link video presentasi,


    // Tech stack untuk ditampilkan sebagai icon/list
    techStack: [
      "JavaScript", "Vite", "Node.js", "Hapi.js", 
      "Python", "FastAPI", "Firebase", "LangChain", 
      "TensorFlow", "Railway"
    ],

    // Ganti dengan path gambar aslimu (dari folder public/images)
    // Gunakan screenshot dashboard utama sebagai gambar pertama (hero)
    image: "assets/projek.png",



    // KONTEN UTAMA (HTML)
    // Saya rapikan dari README agar pas di layout detail project kamu
    description: `
      <div class="project-overview">
        <p class="lead-text">
          <strong>Mining Value Chain Optimization (MVCO-AI)</strong> adalah solusi cerdas berbasis <em>Agentic AI</em> 
          dan <em>Real-time Analytics</em> untuk mengatasi volatilitas operasional di industri pertambangan batubara.
        </p>

        <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
          <div class="stat-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border);">
            <h3 style="color: var(--accent);">20%</h3>
            <p style="font-size: 0.9rem; color: #888;">Peningkatan Produktivitas</p>
          </div>
          <div class="stat-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border);">
            <h3 style="color: var(--accent);">20%</h3>
            <p style="font-size: 0.9rem; color: #888;">Efisiensi Biaya Operasional</p>
          </div>
          <div class="stat-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border);">
            <h3 style="color: var(--accent);">Microservices</h3>
            <p style="font-size: 0.9rem; color: #888;">Arsitektur Scalable</p>
          </div>
        </div>

        <h3>Masalah & Solusi</h3>
        <p>
          Industri pertambangan sering mengalami kerugian finansial (Rp 200 Juta - 5 Miliar/hari) akibat 
          <em>bottleneck</em>, cuaca buruk, dan keputusan yang lambat. Solusi konvensional hanya bersifat monitoring pasif.
        </p>
        <p>
          Kami membangun <strong>Multi-Agent System</strong> yang mengintegrasikan:
          <br/>
          <code>Agentic AI + Monte Carlo Simulation + RAG Chatbot</code>
        </p>

        <hr style="margin: 2rem 0; opacity: 0.1;">

        <h3>Fitur Utama</h3>
        <ul style="list-style-type: disc; margin-left: 1.5rem; line-height: 1.8;">
          <li>
            <strong>Real-time Dashboard:</strong> Monitoring throughput produksi, status armada (Active/Idle), dan manajemen kapal.
          </li>
          <li>
            <strong>Agentic AI Chatbot:</strong> Asisten cerdas dengan RAG (Retrieval-Augmented Generation) yang paham konteks SOP tambang.
          </li>
          <li>
            <strong>Monte Carlo Simulation:</strong> Prediksi profitabilitas dan analisis risiko "What-If" scenario.
          </li>
          <li>
            <strong>Weather Integration:</strong> Prediksi dampak cuaca terhadap operasional menggunakan data historis 5 tahun.
          </li>
        </ul>

        <div style="margin-top: 2rem; background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 8px;">
            <h4 style="margin-bottom: 10px;">Arsitektur Sistem</h4>
            <p style="font-size: 0.9rem;">
              Sistem ini dibangun dengan arsitektur <strong>Microservices</strong> di Railway:
              Backend utama menggunakan <strong>Hapi.js</strong>, layanan ML & Cuaca menggunakan <strong>Python FastAPI</strong>, 
              serta database hybrid (Firebase + SQLite + ChromaDB).
            </p>
        </div>

        <br>
        <h3>Tim Pengembang (Dicoding Asah 2025)</h3>
      </div>`,
    team: [
      {
        name: "Ariel Febrio Hadi",
        role: "System Integration, Backend API Hapi.js, Deployment Railway, Firebase Integration",
        linkedin: "https://www.linkedin.com/in/ariel-febrio/",
        photo: "assets/foto-ariel.jpg"
      },
      {
        name: "Dave Ryano Firdaus Magenta",
        role: "UI/UX Design, Responsive Layout, Data Visualization, Chart.js",
        linkedin: "https://www.linkedin.com/in/dave-ryano-firdaus-magenta/",
        photo: "assets/foto-ano.png"
      },
      {
        name: "Michael Briant",
        role: "Fleet Management Module, Vessel Manager, Report Generation",
        linkedin: "https://www.linkedin.com/in/michael-briant/",
        photo: "assets/foto-michael.png"
      },
      {
        name: "Yustianas Rombon",
        role: " Monte Carlo Simulation Engine, Model Optimization, Weather Prediction Service",
        linkedin: "https://www.linkedin.com/in/yustianas-rombon/",
        photo: "assets/foto-rombon.png"
      },
      {
        name: "David Dewanto",
        role: "RAG System, Knowledge Base, Chatbot Logic, LangChain Implementation",
        linkedin: "https://www.linkedin.com/in/david-dewanto/",
        photo: "assets/foto-david.png"
      }
    ]
  },

  
  "bem-fti-arka": {
    id: "bem-fti-arka",
    title: "Website BEM FTI: Kabinet Arka",
    category: "Web Development - Organization Profile",
    year: "2025",
    
    // Deskripsi pendek untuk kartu di halaman depan
    shortDescription: "Portal digital resmi BEM FTI Kabinet Arka 25/26 sebagai pusat informasi dan aspirasi mahasiswa.",

    // Link project (isi '#' jika belum ada linknya)
    links: {
      demo: "https://illustrious-heliotrope-3fc847.netlify.app/", // Ganti dengan link aslimu
    },

    // Tech stack (sesuaikan dengan yang kamu pakai)
    techStack: [
      "React.js", "CSS", "Netflify", "Firebase", 
    ],

    // Ganti dengan path gambar project BEM kamu
    image: "assets/projekbem.png",


    // Deskripsi Lengkap (HTML Format)
    description: `
      <div class="project-overview">
        <p class="lead-text">
          Website resmi <strong>Badan Eksekutif Mahasiswa FTI (Kabinet Arka)</strong> periode 2025/2026. 
          Platform ini dirancang sebagai pusat transformasi digital untuk meningkatkan transparansi informasi, 
          mempermudah pelayanan mahasiswa, dan mempublikasikan program kerja kabinet secara masif.
        </p>

        <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 2rem 0;">
          <div class="stat-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border); text-align: center;">
            <h3 style="color: var(--accent); font-size: 1.8rem;">25/26</h3>
            <p style="font-size: 0.8rem; color: #888; margin-top: 5px;">Periode Kabinet</p>
          </div>
          <div class="stat-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border); text-align: center;">
            <h3 style="color: var(--accent); font-size: 1.8rem;">8</h3>
            <p style="font-size: 0.8rem; color: #888; margin-top: 5px;">Departemen</p>
          </div>
          <div class="stat-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border); text-align: center;">
            <h3 style="color: var(--accent); font-size: 1.8rem;">CMS</h3>
            <p style="font-size: 0.8rem; color: #888; margin-top: 5px;">Integrated News</p>
          </div>
        </div>

        <h3>Fitur Utama</h3>
        <ul style="list-style-type: disc; margin-left: 1.5rem; line-height: 1.8; margin-bottom: 2rem;">
          <li>
            <strong>Profil Kabinet Interaktif:</strong> Showcase visi, misi, dan struktur organisasi fungsionaris BEM dengan animasi yang menarik.
          </li>
          <li>
            <strong>Portal Berita & Event:</strong> Sistem manajemen konten (CMS) untuk mempublikasikan berita kampus dan kalender kegiatan terkini.
          </li>
          <li>
            <strong>Kanal Aspirasi:</strong> Form terintegrasi untuk menampung suara, kritik, dan saran dari mahasiswa FTI secara digital.
          </li>
          <li>
            <strong>Responsive Design:</strong> Tampilan yang optimal diakses dari Desktop maupun Mobile untuk memudahkan mahasiswa.
          </li>
        </ul>

        <div style="background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 8px; border-left: 3px solid var(--accent);">
            <h4 style="margin-bottom: 10px;">Tantangan Development</h4>
            <p style="font-size: 0.9rem; color: #ccc;">
              Membangun identitas visual "Arka" yang modern namun tetap formal, serta memastikan performa website tetap cepat saat memuat banyak aset foto kegiatan mahasiswa.
            </p>
        </div>
      </div>
    `,

    // Tim Pengembang (Sesuaikan dengan tim kamu di BEM)
    team: [
       {
        name: "Ariel Febrio Hadi",
        role: "Lead Developer",
        linkedin: "https://www.linkedin.com/in/ariel-febrio/",
        photo: "assets/foto-ariel.jpg"
      }
    ]
  },

  'intelligence-creations': {
    id: 'intelligence-creations',
    title: 'Intelligence Creations',
    category: 'AI Lifecycle Platform',
    year: '2025',
    // Deskripsi singkat untuk tampilan di Card (Slider)
    shortDescription: 'Platform terintegrasi untuk mengelola siklus hidup proyek AI, mulai dari pembingkaian masalah, manajemen dataset, hingga dokumentasi pelatihan model.',
    
    // Deskripsi lengkap untuk halaman detail
    description: `
      Intelligence Creations adalah platform terintegrasi yang dirancang untuk menyederhanakan dan mengelola seluruh siklus hidup pengembangan Artificial Intelligence (AI). Platform ini menjembatani kesenjangan antara ide abstrak dan implementasi teknis.
      
      Fitur Utama mencakup:
      1. **Inisiasi & Pembingkaian Masalah**: Mengubah ide besar menjadi definisi masalah AI yang terukur dan terstruktur.
      2. **Manajemen Data End-to-End**: Mengelola permintaan dataset, balasan dari sumber eksternal, hingga pemrosesan dan rekayasa fitur.
      3. **Pelacakan Pelatihan Model**: Dokumentasi mendalam mengenai algoritma, parameter, dan metrik performa model.
      4. **Dashboard & Sinkronisasi**: Visualisasi progres proyek secara real-time dengan integrasi data sistem eksternal otomatis.
      
      Sistem ini memastikan setiap langkah pengembangan AI terdokumentasi, terorganisir, dan efisien.
    `,
    
    // Tech Stack (Disesuaikan dengan fitur: Dashboard, Data, AI Integration)
    techStack: ['React', 'Python', 'Data Visualization', 'AI Management', 'System Integration'],
    
    // Placeholder gambar (Ganti dengan nama file screenshot aslimu nanti)

    
    // Link (Opsional)
    link: '#',
    github: '#'
  },


};