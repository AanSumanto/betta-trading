import PrintActions from "./print-actions";

export const metadata = {
  title: "PKS Lengkap | Betta Trading",
  description: "Perjanjian Kerja Sama layanan copy trading EA."
};

type SearchParams = Record<string, string | string[] | undefined>;

const getParam = (params: SearchParams, key: string, fallback: string) => {
  const value = params[key];
  if (Array.isArray(value)) {
    return value[0] || fallback;
  }
  return value || fallback;
};

export default function PksPrintPage({
  searchParams
}: {
  searchParams?: SearchParams;
}) {
  const params = searchParams ?? {};
  const date = getParam(params, "date", "[TANGGAL]");
  const providerName = getParam(params, "providerName", "[NAMA PENYEDIA]");
  const providerAddress = getParam(params, "providerAddress", "[ALAMAT PENYEDIA]");
  const providerContact = getParam(params, "providerContact", "[KONTAK PENYEDIA]");
  const userName = getParam(params, "userName", "[NAMA PENGGUNA]");
  const userId = getParam(params, "userId", "[NO IDENTITAS]");
  const userAddress = getParam(params, "userAddress", "[ALAMAT PENGGUNA]");
  const userContact = getParam(params, "userContact", "[KONTAK PENGGUNA]");
  const legalRegion = getParam(params, "legalRegion", "[WILAYAH HUKUM]");
  const brokerName = getParam(params, "brokerName", "[NAMA BROKER]");
  const tradingAccount = getParam(params, "tradingAccount", "[NO AKUN TRADING]");

  return (
    <main className="page pks-print">
      <section className="print-toolbar">
        <div className="print-toolbar-inner">
          <div>
            <h1 className="print-title">Perjanjian Kerja Sama (PKS)</h1>
            <p className="print-desc">
              Gunakan menu cetak di browser untuk menyimpan dokumen ini sebagai
              PDF.
            </p>
          </div>
          <div className="print-actions">
            <PrintActions />
            <a className="btn btn-ghost" href="/pks">
              Kembali ke ringkasan
            </a>
          </div>
        </div>
      </section>

      <section className="print-body" id="pks-body">
        <div className="print-inner">
          <h2>Perjanjian Kerja Sama Layanan Copy Trading (EA)</h2>
          <p>Tanggal: {date}</p>
          <p>
            Dokumen ini adalah Perjanjian Kerja Sama ("Perjanjian") antara:
          </p>
          <ol className="print-list">
            <li>
              <strong>Penyedia Layanan</strong>
              <div>Nama/Entitas: {providerName}</div>
              <div>Alamat: {providerAddress}</div>
              <div>Kontak: {providerContact}</div>
            </li>
            <li>
              <strong>Pengguna</strong>
              <div>Nama: {userName}</div>
              <div>Nomor Identitas: {userId}</div>
              <div>Alamat: {userAddress}</div>
              <div>Kontak: {userContact}</div>
            </li>
            <li>
              <strong>Detail Akun Trading</strong>
              <div>Broker: {brokerName}</div>
              <div>Nomor Akun Trading: {tradingAccount}</div>
            </li>
          </ol>
          <p>Selanjutnya disebut bersama sebagai "Para Pihak".</p>

          <h3>1. Ruang Lingkup Layanan</h3>
          <ol className="print-list">
            <li>Layanan ini adalah copy trading menggunakan EA pada akun Pengguna.</li>
            <li>Akses yang diberikan kepada Penyedia hanya akses trading.</li>
            <li>Penyedia tidak memiliki akses deposit atau withdraw.</li>
            <li>Layanan ini bukan produk investasi dan tidak menjanjikan profit.</li>
          </ol>

          <h3>2. Akun dan Kepemilikan Dana</h3>
          <ol className="print-list">
            <li>Seluruh dana tetap berada di akun broker atas nama Pengguna.</li>
            <li>Pengguna bertanggung jawab atas pembukaan akun dan verifikasi.</li>
            <li>Pengguna dapat mencabut akses trading kapan saja.</li>
          </ol>

          <h3>3. Mekanisme Layanan dan Eksekusi</h3>
          <ol className="print-list">
            <li>EA dijalankan secara otomatis pada VPS yang disepakati.</li>
            <li>Pengguna memberikan data login trading untuk eksekusi.</li>
            <li>Kondisi pasar dapat menyebabkan slippage atau deviasi harga.</li>
          </ol>

          <h3>4. Bagi Hasil dan Settlement</h3>
          <ol className="print-list">
            <li>Bagi hasil 60% untuk Pengguna dan 40% untuk Penyedia.</li>
            <li>Settlement dilakukan bulanan berdasarkan profit bersih akun.</li>
            <li>Jika tidak ada profit, tidak ada fee yang dibebankan.</li>
            <li>Metode pembayaran disepakati terpisah oleh Para Pihak.</li>
          </ol>

          <h3>5. Risiko dan Drawdown</h3>
          <ol className="print-list">
            <li>Trading mengandung risiko kerugian.</li>
            <li>Penyedia menerapkan batas drawdown, kontrol lot, dan batas posisi.</li>
            <li>Kerugian dapat terjadi meskipun kontrol risiko diterapkan.</li>
            <li>Penyedia tidak menjamin profit atau tingkat hasil tertentu.</li>
          </ol>

          <h3>6. Kewajiban Penyedia</h3>
          <ol className="print-list">
            <li>Menjalankan EA sesuai parameter dan kebijakan risiko.</li>
            <li>Menyampaikan informasi layanan secara jujur dan transparan.</li>
            <li>Menjaga kerahasiaan data akses trading Pengguna.</li>
          </ol>

          <h3>7. Kewajiban Pengguna</h3>
          <ol className="print-list">
            <li>Menyediakan data akun trading yang benar dan valid.</li>
            <li>Memastikan saldo memadai sesuai kebutuhan margin dan risiko.</li>
            <li>Memahami dan menerima risiko trading, termasuk kemungkinan rugi.</li>
            <li>Menjaga kerahasiaan informasi privat dari Penyedia.</li>
          </ol>

          <h3>8. Pembatasan Tanggung Jawab</h3>
          <ol className="print-list">
            <li>Penyedia tidak bertanggung jawab atas kerugian akibat pasar.</li>
            <li>Penyedia tidak bertanggung jawab atas gangguan teknis broker/VPS.</li>
            <li>Penyedia tidak bertanggung jawab atas perubahan akun tanpa persetujuan.</li>
          </ol>

          <h3>9. Durasi dan Pengakhiran</h3>
          <ol className="print-list">
            <li>Perjanjian berlaku sejak ditandatangani hingga dihentikan.</li>
            <li>Pengguna dapat mengakhiri layanan kapan saja.</li>
            <li>Penyedia dapat menghentikan layanan jika ada pelanggaran.</li>
          </ol>

          <h3>10. Kerahasiaan</h3>
          <ol className="print-list">
            <li>Para Pihak menjaga kerahasiaan data akses dan informasi non-publik.</li>
            <li>Kewajiban kerahasiaan tetap berlaku setelah Perjanjian berakhir.</li>
          </ol>

          <h3>11. Perselisihan</h3>
          <ol className="print-list">
            <li>Perselisihan diselesaikan musyawarah terlebih dahulu.</li>
            <li>Jika tidak tercapai, berlaku hukum di {legalRegion}.</li>
          </ol>

          <h3>12. Pernyataan dan Persetujuan</h3>
          <ol className="print-list">
            <li>Pengguna telah membaca dan menyetujui ketentuan Perjanjian.</li>
            <li>Pengguna memahami layanan ini tidak menjamin profit.</li>
          </ol>

          <h3>Tanda Tangan Para Pihak</h3>
          <div className="signature-grid">
            <div>
              <p>Penyedia Layanan</p>
              <p>Nama: {providerName}</p>
              <p>Tanda Tangan: ______________________</p>
              <p>Tanggal: {date}</p>
            </div>
            <div>
              <p>Pengguna</p>
              <p>Nama: {userName}</p>
              <p>Tanda Tangan: ______________________</p>
              <p>Tanggal: {date}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
