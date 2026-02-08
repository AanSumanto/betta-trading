export const metadata = {
  title: "Panduan Setup | Betta Trading",
  description:
    "Panduan singkat setup akun Exness RAW dan koneksi EA dengan akses trading saja."
};

export default function SetupPage() {
  return (
    <main className="page setup-page">
      <section className="setup-hero">
        <div className="setup-inner">
          <div className="setup-header">
            <span className="section-eyebrow">Panduan Setup</span>
            <h1 className="setup-title">Langkah teknis singkat untuk memulai.</h1>
            <p className="section-lede">
              Panduan ini membantu Anda menyiapkan akun Exness RAW dan
              menghubungkannya ke EA dengan akses trading saja.
            </p>
          </div>
          <div className="setup-card">
            <h2>Ringkasan yang perlu disiapkan</h2>
            <ul className="bullet-list">
              <li>Akun Exness aktif atas nama Anda.</li>
              <li>Akun trading tipe RAW.</li>
              <li>Data login MT5/MT4 untuk akses trading.</li>
              <li>Koneksi VPS (opsional jika kami sediakan).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Langkah Setup</span>
            <h2 className="section-title">Urutan singkat, tidak rumit.</h2>
            <p className="section-lede">
              Ikuti langkah di bawah ini. Jika ada kendala, hubungi kami.
            </p>
          </div>
          <ol className="steps">
            <li className="step-card">
              <span className="step-number">1</span>
              <div>
                <h3>Daftar dan verifikasi akun Exness</h3>
                <p>Selesaikan proses verifikasi identitas sesuai ketentuan broker.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">2</span>
              <div>
                <h3>Buat akun RAW</h3>
                <p>Pilih tipe RAW di dashboard Exness, gunakan mata uang akun yang Anda inginkan.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">3</span>
              <div>
                <h3>Kirim detail akses trading</h3>
                <p>Siapkan nomor akun trading, password investor/trading, dan server.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">4</span>
              <div>
                <h3>Aktifkan EA di VPS</h3>
                <p>EA dijalankan di VPS agar tetap aktif 24/5 sesuai jam pasar.</p>
              </div>
            </li>
            <li className="step-card">
              <span className="step-number">5</span>
              <div>
                <h3>Konfirmasi setup dan mulai monitoring</h3>
                <p>Periksa koneksi dan pantau performa melalui laporan akun Anda.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="info-grid">
            <div className="info-card">
              <h3>Akses hanya untuk trading</h3>
              <p>Kami tidak memiliki akses deposit atau withdraw pada akun Anda.</p>
            </div>
            <div className="info-card">
              <h3>Anda bisa berhenti kapan saja</h3>
              <p>Cabut akses trading atau hentikan EA jika Anda ingin berhenti.</p>
            </div>
            <div className="info-card">
              <h3>Butuh bantuan?</h3>
              <p>Silakan hubungi kami untuk panduan setup dan pengecekan awal.</p>
            </div>
          </div>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href="https://wa.me/6282186287929?text=Halo%20admin%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20EA%20dan%20copy%20trading.%20Mohon%20info%20jadwal%20konsultasi%20yang%20tersedia."
              target="_blank"
              rel="noreferrer"
            >
              Hubungi via WhatsApp
            </a>
            <a className="btn btn-ghost" href="/">
              Kembali ke landing page
            </a>
          </div>
          <p className="legal-note">
            Baca juga <a className="text-link" href="/terms">Syarat & Ketentuan</a>
            dan <a className="text-link" href="/pks">Ringkasan PKS</a> sebelum
            memulai.
          </p>
        </div>
      </section>
    </main>
  );
}
