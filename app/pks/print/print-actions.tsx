"use client";

export default function PrintActions() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="btn btn-primary" type="button" onClick={handlePrint}>
      Cetak / Simpan PDF
    </button>
  );
}
