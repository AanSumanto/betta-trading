export const metadata = {
  title: "Syarat & Ketentuan | Betta Trading",
  description:
    "Ketentuan layanan copy trading dan EA dengan akses trading saja dan kontrol dana di tangan pengguna."
};

export default function TermsPage() {
  return (
    <main className="page setup-page">
      <section className="setup-hero">
        <div className="setup-inner">
          <div className="setup-header">
            <span className="section-eyebrow">Syarat & Ketentuan</span>
            <h1 className="setup-title">Kerangka kerja yang jelas dan transparan.</h1>
            <p className="section-lede">
              Dokumen singkat ini menjelaskan batasan layanan, hak pengguna, dan
              risiko yang perlu dipahami sebelum menggunakan EA.
            </p>
          </div>
          <div className="setup-card">
            <h2>Ringkasan utama</h2>
            <ul className="bullet-list">
              <li>Layanan ini adalah copy trading menggunakan EA.</li>
              <li>Ini bukan produk investasi dan tidak menjanjikan profit.</li>
              <li>Akses kami hanya untuk trading, bukan deposit/withdraw.</li>
              <li>Pengguna dapat menghentikan layanan kapan saja.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Ketentuan Layanan</span>
            <h2 className="section-title">Aturan dasar yang disepakati.</h2>
            <p className="section-lede">
              Poin-poin berikut membantu menjaga ekspektasi tetap realistis.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Kontrol dana</h3>
              <p>Seluruh dana tetap berada di akun broker atas nama Anda.</p>
            </div>
            <div className="info-card">
              <h3>Akses trading saja</h3>
              <p>Kami tidak memiliki akses untuk deposit atau withdraw.</p>
            </div>
            <div className="info-card">
              <h3>Risiko trading</h3>
              <p>Kerugian dapat terjadi. Tidak ada jaminan profit.</p>
            </div>
            <div className="info-card">
              <h3>Perhitungan bagi hasil</h3>
              <p>Settlement bulanan berdasarkan profit bersih akun.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="info-grid">
            <div className="info-card">
              <h3>Penghentian layanan</h3>
              <p>Anda dapat mencabut akses trading kapan pun.</p>
            </div>
            <div className="info-card">
              <h3>Transparansi laporan</h3>
              <p>Laporan akun dan riwayat transaksi dapat Anda cek langsung.</p>
            </div>
            <div className="info-card">
              <h3>Komunikasi</h3>
              <p>Konsultasi tersedia untuk klarifikasi sebelum memulai.</p>
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
            Dengan menggunakan layanan ini, Anda menyatakan telah memahami
            risiko dan ketentuan yang berlaku.
          </p>
          <p className="legal-note">
            Lihat juga <a className="text-link" href="/pks">Ringkasan PKS</a> untuk
            ringkasan perjanjian kerja sama.
          </p>
        </div>
      </section>
    </main>
  );
}
