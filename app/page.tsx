import WaCtaForm from "./components/wa-cta-form";

export default function Home() {
  return (
    <main className="page">
      <nav className="top-nav" aria-label="Navigasi utama">
        <div className="nav-inner">
          <a className="nav-brand" href="#hero">
            <img
              className="nav-logo"
              src="/logo-bettatrading.png"
              alt="Betta Trading"
            />
            <span>Betta Trading</span>
          </a>
          <div className="nav-links">
            <a href="#how-it-works">Cara Kerja</a>
            <a href="#risk-disclosure">Risiko</a>
            <a href="#profit-sharing">Bagi Hasil</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Kontak</a>
          </div>
        </div>
      </nav>
      <nav className="bottom-nav" aria-label="Navigasi bawah">
        <a href="#how-it-works">Cara Kerja</a>
        <a href="#risk-disclosure">Risiko</a>
        <a href="#profit-sharing">Bagi Hasil</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Kontak</a>
      </nav>
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="eyebrow">Copy Trading & Expert Advisor</span>
            <h1 className="hero-title">
              Layanan trading berbasis EA untuk akun Exness Anda, dengan kontrol
              dana tetap di tangan Anda.
            </h1>
            <p className="hero-subtitle">
              Anda membuka akun RAW sendiri di Exness. Kami hanya mengelola
              strategi dan eksekusi trading melalui Expert Advisor dengan akses
              trading saja. Deposit dan penarikan tetap sepenuhnya Anda
              kendalikan.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="https://wa.me/6282186287929?text=Halo%20admin%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20EA%20dan%20copy%20trading.%20Mohon%20info%20jadwal%20konsultasi%20yang%20tersedia."
                target="_blank"
                rel="noreferrer"
              >
                Konsultasi via WhatsApp
              </a>
              <a className="btn btn-ghost" href="#risk-disclosure">
                Risiko & Transparansi
              </a>
            </div>
            <div className="trust-row">
              <div className="trust-item">
                <span className="trust-title">Akses terbatas</span>
                <span className="trust-desc">Hanya akses trading, tanpa hak tarik dana.</span>
              </div>
              <div className="trust-item">
                <span className="trust-title">Kendali penuh</span>
                <span className="trust-desc">Anda bisa berhenti kapan pun.</span>
              </div>
              <div className="trust-item">
                <span className="trust-title">Bagi hasil jelas</span>
                <span className="trust-desc">60% pengguna, 40% penyedia.</span>
              </div>
            </div>
          </div>
          <div className="hero-panel" aria-label="Ringkasan kontrol dan risiko">
            <div className="panel-header">
              <span className="panel-title">Kontrol Dana & Risiko</span>
              <span className="panel-tag">Transparan</span>
            </div>
            <div className="panel-body">
              <div className="panel-item">
                <h3>Hak dana di sisi Anda</h3>
                <p>
                  Akun tetap atas nama Anda. Kami tidak memiliki akses untuk
                  deposit maupun withdraw.
                </p>
              </div>
              <div className="panel-item">
                <h3>Manajemen risiko terstruktur</h3>
                <p>
                  EA menerapkan batas drawdown, kontrol lot, limit posisi, dan
                  opsi filter berita. Kerugian tetap mungkin terjadi.
                </p>
              </div>
              <div className="panel-item">
                <h3>Tanpa janji profit</h3>
                <p>
                  Perdagangan melibatkan risiko dan tidak ada jaminan hasil.
                  Evaluasi dilakukan secara berkala.
                </p>
              </div>
            </div>
            <div className="panel-footer">
              <div className="stat-card">
                <span className="stat-label">Settlement</span>
                <span className="stat-value">Bulanan</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Biaya tersembunyi</span>
                <span className="stat-value">Tidak ada</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Status</span>
                <span className="stat-value">Akses trading saja</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overview" aria-label="Ringkasan layanan">
        <div className="overview-inner">
          <div className="overview-item">
            <span className="overview-title">Akses trading saja</span>
            <span className="overview-desc">Tanpa hak deposit atau withdraw.</span>
          </div>
          <div className="overview-item">
            <span className="overview-title">Bagi hasil</span>
            <span className="overview-desc">60% user, 40% provider.</span>
          </div>
          <div className="overview-item">
            <span className="overview-title">Settlement bulanan</span>
            <span className="overview-desc">Evaluasi dan hitung profit tiap bulan.</span>
          </div>
          <div className="overview-item">
            <span className="overview-title">Tanpa biaya tersembunyi</span>
            <span className="overview-desc">Jika tidak profit, tidak ada fee.</span>
          </div>
        </div>
      </section>
      <section className="callout" aria-label="Akses konsultasi awal">
        <div className="callout-inner">
          <div>
            <h2 className="callout-title">Ingin tanya dulu sebelum mulai?</h2>
            <p className="callout-desc">
              Kami bisa jelaskan alur, risiko, dan kecocokan secara ringkas.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="https://wa.me/6282186287929?text=Halo%20admin%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20EA%20dan%20copy%20trading.%20Mohon%20info%20jadwal%20konsultasi%20yang%20tersedia."
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>
      <section className="section section-muted" id="what-this-is">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Apa Layanan Ini</span>
            <h2 className="section-title">Jelas tentang fungsi dan batasannya.</h2>
            <p className="section-lede">
              Penjelasan singkat agar Anda tahu apa yang dilakukan layanan ini
              dan apa yang tidak dilakukan.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Ini adalah copy trading menggunakan EA</h3>
              <p>Transaksi dieksekusi oleh Expert Advisor pada akun Exness Anda.</p>
            </div>
            <div className="info-card">
              <h3>Bukan produk investasi</h3>
              <p>Anda tetap pemilik akun dan pengambil keputusan akhir.</p>
            </div>
            <div className="info-card">
              <h3>Tidak ada jaminan profit</h3>
              <p>Hasil trading dapat berubah dan tidak bisa dijanjikan.</p>
            </div>
            <div className="info-card">
              <h3>Dirancang untuk konsistensi jangka panjang</h3>
              <p>Fokusnya pada stabilitas proses, bukan target cepat.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="how-it-works">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Cara Kerja</span>
            <h2 className="section-title">Langkah sederhana, tanpa jargon.</h2>
            <p className="section-lede">
              Semua dimulai dari akun Anda sendiri, lalu EA bekerja otomatis.
            </p>
          </div>
          <ol className="process-track" aria-label="Alur singkat">
            <li className="process-item">
              <span className="process-step">1</span>
              <span>Buka akun Exness</span>
            </li>
            <li className="process-item">
              <span className="process-step">2</span>
              <span>Buat akun RAW</span>
            </li>
            <li className="process-item">
              <span className="process-step">3</span>
              <span>Hubungkan ke EA</span>
            </li>
            <li className="process-item">
              <span className="process-step">4</span>
              <span>EA berjalan di VPS</span>
            </li>
            <li className="process-item">
              <span className="process-step">5</span>
              <span>Settlement bulanan</span>
            </li>
          </ol>
          <ol className="steps">
            <li className="step-card">
              <span className="step-number">1</span>
              <div>
                <h3>Buka akun Exness</h3>
                <p>Registrasi langsung di Exness dengan data Anda.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">2</span>
              <div>
                <h3>Buat akun trading RAW</h3>
                <p>Pilih tipe RAW di area akun Exness Anda.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">3</span>
              <div>
                <h3>Hubungkan akun ke EA kami</h3>
                <p>Kami bantu proses koneksi dengan akses trading saja.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">4</span>
              <div>
                <h3>EA trading otomatis di VPS</h3>
                <p>EA berjalan terus untuk mengeksekusi strategi.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">5</span>
              <div>
                <h3>Perhitungan & bagi hasil bulanan</h3>
                <p>Profit dihitung per bulan berdasarkan laporan akun.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="section section-muted" id="fund-control">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Kontrol Dana</span>
            <h2 className="section-title">Dana tetap di bawah kendali Anda.</h2>
            <p className="section-lede">
              Akses kami hanya untuk trading. Penarikan dan saldo tetap milik
              Anda.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Kami tidak mengontrol withdraw</h3>
              <p>Hanya Anda yang bisa menarik dana dari akun Exness.</p>
            </div>
            <div className="info-card">
              <h3>Kami tidak memegang dana user</h3>
              <p>Dana tetap berada di akun broker Anda, bukan di pihak kami.</p>
            </div>
            <div className="info-card">
              <h3>Anda bisa cabut akses kapan saja</h3>
              <p>Kerja sama bisa dihentikan kapan pun tanpa hambatan.</p>
            </div>
            <div className="info-card">
              <h3>Transparansi adalah prinsip utama</h3>
              <p>Laporan dan riwayat transaksi selalu bisa Anda cek.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="risk-disclosure">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Manajemen Risiko</span>
            <h2 className="section-title">Kontrol risiko lebih penting dari agresif.</h2>
            <p className="section-lede">
              Trading punya kemungkinan rugi. Fokusnya adalah eksposur terukur.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Risiko trading tetap ada</h3>
              <p>Harga dapat bergerak cepat dan kerugian bisa terjadi.</p>
            </div>
            <div className="info-card">
              <h3>Batas drawdown</h3>
              <p>EA membatasi penurunan agar risiko tidak melebar.</p>
            </div>
            <div className="info-card">
              <h3>Risiko dikendalikan, bukan dikejar</h3>
              <p>Menjaga modal membantu konsistensi jangka panjang.</p>
            </div>
            <div className="info-card">
              <h3>Skenario rugi dijelaskan dengan tenang</h3>
              <p>Jika rugi terjadi, evaluasi dilakukan secara terbuka.</p>
            </div>
          </div>
          <div className="risk-strip" aria-label="Kontrol risiko utama">
            <div className="risk-item">Maksimum drawdown</div>
            <div className="risk-item">Kontrol lot</div>
            <div className="risk-item">Batas posisi</div>
            <div className="risk-item">Filter berita opsional</div>
          </div>
        </div>
      </section>
      <section className="section section-muted" id="profit-sharing">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Bagi Hasil</span>
            <h2 className="section-title">Pembagian sederhana dan jelas.</h2>
            <p className="section-lede">
              Perhitungan dilakukan bulanan berdasarkan profit bersih akun.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>60% user / 40% provider</h3>
              <p>Profit dibagi 60% untuk Anda dan 40% untuk penyedia layanan.</p>
            </div>
            <div className="info-card">
              <h3>Contoh angka sederhana</h3>
              <p>Profit $1.000 = $600 untuk user, $400 untuk provider.</p>
            </div>
            <div className="info-card">
              <h3>Settlement bulanan saja</h3>
              <p>Perhitungan dan pembayaran dilakukan di akhir bulan.</p>
            </div>
            <div className="info-card">
              <h3>Tanpa profit = tanpa fee</h3>
              <p>Jika tidak ada profit, tidak ada biaya yang ditagihkan.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="who-its-for">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Cocok Untuk Siapa</span>
            <h2 className="section-title">Agar ekspektasi tetap realistis.</h2>
            <p className="section-lede">
              Layanan ini dibuat untuk profil pengguna tertentu dan tidak cocok
              untuk semua orang.
            </p>
          </div>
          <div className="audience-grid">
            <div className="info-card">
              <h3>Untuk</h3>
              <ul className="bullet-list">
                <li>Paham risiko trading dan siap menghadapi fluktuasi.</li>
                <li>Mindset jangka panjang dengan fokus pada konsistensi.</li>
                <li>Modal yang siap terekspos risiko pasar.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Tidak untuk</h3>
              <ul className="bullet-list">
                <li>Mencari pendapatan yang dijamin.</li>
                <li>Ekspektasi hasil instan.</li>
                <li>Tidak dapat menerima drawdown sementara.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-muted" id="referral-program">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Apresiasi Referral</span>
            <h2 className="section-title">Program tambahan yang opsional.</h2>
            <p className="section-lede">
              Bukan fokus utama, hanya bentuk apresiasi untuk referensi yang
              menghasilkan profit.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Referral bersifat opsional</h3>
              <p>Anda tidak wajib ikut program ini.</p>
            </div>
            <div className="info-card">
              <h3>Hanya 1 level</h3>
              <p>Tidak ada struktur bertingkat atau jaringan berantai.</p>
            </div>
            <div className="info-card">
              <h3>Reward dari porsi provider</h3>
              <p>Insentif diambil dari bagian kami, bukan dari bagian Anda.</p>
            </div>
            <div className="info-card">
              <h3>Hanya jika ada profit terealisasi</h3>
              <p>Reward dibayar saat user referral menghasilkan profit.</p>
            </div>
            <div className="info-card">
              <h3>Bukan sumber utama</h3>
              <p>Program ini hanya tambahan, bukan pengganti income utama.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-muted" id="faq">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">Jawaban singkat atas pertanyaan umum.</h2>
            <p className="section-lede">
              Jika masih ada yang belum jelas, Anda bisa bertanya sebelum
              memutuskan.
            </p>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Siapa yang mengontrol dana saya?</h3>
              <p>Anda sendiri. Kami hanya memiliki akses trading.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah saya bisa withdraw kapan saja?</h3>
              <p>Ya. Penarikan dana sepenuhnya di bawah kendali Anda.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah saya bisa menghentikan layanan?</h3>
              <p>Bisa. Anda dapat mencabut akses kapan pun.</p>
            </div>
            <div className="faq-item">
              <h3>Apa yang terjadi jika ada kerugian?</h3>
              <p>Kerugian tercatat di laporan akun dan dievaluasi secara terbuka.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah profit dijamin?</h3>
              <p>Tidak. Profit tidak dijamin dan hasil bisa berbeda.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah ini PAMM/MAM?</h3>
              <p>Tidak. Akun tetap atas nama Anda dengan akses trading saja.</p>
            </div>
            <div className="faq-item">
              <h3>Di mana saya bisa melihat panduan setup?</h3>
              <p>
                Anda dapat membaca panduan singkat di halaman setup untuk
                langkah teknis awal.
              </p>
              <a className="text-link" href="/setup">
                Buka panduan setup
              </a>
            </div>
          </div>
          <div className="faq-actions">
            <a className="btn btn-ghost" href="/pks">
              Ringkasan PKS & Unduh
            </a>
          </div>
        </div>
      </section>
      <section className="risk-summary" aria-label="Ringkasan risiko">
        <div className="risk-summary-inner">
          <h2 className="risk-summary-title">Ringkasan risiko singkat</h2>
          <p className="risk-summary-text">
            Trading memiliki potensi rugi, termasuk saat menggunakan EA. Kami
            menerapkan kontrol risiko, namun hasil tetap bergantung pada kondisi
            pasar. Jika tidak ada profit, tidak ada fee. Pastikan layanan ini
            sesuai dengan profil risiko Anda.
          </p>
        </div>
      </section>
      <section className="cta-final" id="contact">
        <div className="section-inner">
          <div className="cta-final-card">
            <div>
              <span className="section-eyebrow">Langkah Lanjutan</span>
              <h2 className="section-title">Pastikan layanan ini cocok untuk Anda.</h2>
              <p className="section-lede">
                Pelajari detailnya terlebih dulu atau hubungi kami untuk tanya
                jawab. Fokusnya adalah pemahaman dan kesesuaian.
              </p>
            </div>
            <WaCtaForm />
            <div className="contact-note">WhatsApp: 0821 8628 7929</div>
            <div className="cta-links">
              <a className="text-link" href="/setup">
                Baca panduan setup akun
              </a>
              <a className="text-link" href="/pks">
                Ringkasan PKS
              </a>
              <a className="text-link" href="/terms">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
