import PksForm from "./pks-form";

export const metadata = {
  title: "Ringkasan PKS | Betta Trading",
  description:
    "Ringkasan Perjanjian Kerja Sama layanan copy trading EA beserta tautan unduh PKS."
};

export default function PksSummaryPage() {
  return (
    <main className="page pks-page">
      <section className="pks-hero">
        <div className="pks-inner">
          <div className="pks-header">
            <span className="section-eyebrow">Ringkasan PKS</span>
            <h1 className="pks-title">Garis besar perjanjian kerja sama.</h1>
            <p className="section-lede">
              Ringkasan ini membantu Anda memahami batasan layanan sebelum
              menandatangani PKS lengkap.
            </p>
          </div>
          <div className="pks-card">
            <h2>Poin utama</h2>
            <ul className="bullet-list">
              <li>Layanan ini adalah copy trading menggunakan EA.</li>
              <li>Akses kami hanya untuk trading, bukan deposit/withdraw.</li>
              <li>Profit dibagi 60% untuk user dan 40% untuk provider.</li>
              <li>Settlement dilakukan bulanan, tanpa profit tidak ada fee.</li>
              <li>Pengguna dapat menghentikan kerja sama kapan saja.</li>
              <li>Trading memiliki risiko rugi dan tidak ada jaminan profit.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Unduh PKS</span>
            <h2 className="section-title">Dokumen lengkap untuk ditinjau.</h2>
            <p className="section-lede">
              Unduh PKS lengkap, baca dengan tenang, lalu diskusikan jika ada
              pertanyaan.
            </p>
          </div>
          <div className="pks-actions">
            <a className="btn btn-primary" href="/pks/print">
              Unduh PKS (PDF)
            </a>
            <a className="btn btn-ghost" href="/terms">
              Lihat Syarat & Ketentuan
            </a>
          </div>
          <p className="legal-note">
            Catatan: tombol unduh membuka halaman cetak agar Anda dapat
            menyimpan PKS sebagai PDF.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Isi Data PKS</span>
            <h2 className="section-title">Buat PKS dengan data Anda.</h2>
            <p className="section-lede">
              Isi data berikut untuk menghasilkan PKS yang sudah terisi dan
              siap disimpan sebagai PDF.
            </p>
             <p className="form-note">
               Demi keamanan, password trading tidak dicantumkan di PKS. Password
               dikirim terpisah saat proses onboarding.
             </p>
          </div>
          <PksForm />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="info-grid">
            <div className="info-card">
              <h3>Kapan PKS ditandatangani?</h3>
              <p>Setelah Anda memahami layanan dan setuju untuk memulai.</p>
            </div>
            <div className="info-card">
              <h3>Apa yang perlu disiapkan?</h3>
              <p>Data identitas dan detail akun trading Anda.</p>
            </div>
            <div className="info-card">
              <h3>Butuh bantuan?</h3>
              <p>Kami siap jelaskan isi PKS sebelum Anda memutuskan.</p>
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
        </div>
      </section>
    </main>
  );
}
