"use client";

import { useMemo, useState } from "react";

const baseUrl = "https://wa.me/6282186287929";

const capitalOptions = [
  "Di bawah 5 juta",
  "5 - 20 juta",
  "20 - 50 juta",
  "50 - 100 juta",
  "Di atas 100 juta",
  "Belum ingin menyebutkan"
];

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [capitalRange, setCapitalRange] = useState("");
  const [touched, setTouched] = useState(false);

  const hasName = name.trim().length > 0;
  const hasContact = contact.trim().length > 0;
  const showError = touched && (!hasName || !hasContact);

  const message = useMemo(() => {
    const safeName = name.trim() || "[Nama]";
    const safeContact = contact.trim() || "[Email/WhatsApp]";
    const safeCapital = capitalRange.trim() || "[Perkiraan modal]";

    return `Halo admin, saya ingin masuk waitlist layanan EA. Nama: ${safeName}. Kontak: ${safeContact}. Perkiraan modal: ${safeCapital}. Saya memahami tidak ada jaminan profit.`;
  }, [name, contact, capitalRange]);

  const waLink = `${baseUrl}?text=${encodeURIComponent(message)}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);

    if (!hasName || !hasContact) {
      return;
    }

    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="waitlist-grid">
        <label className="form-field">
          Nama
          <input
            type="text"
            placeholder="Nama lengkap"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => setTouched(true)}
          />
        </label>
        <label className="form-field">
          Email atau WhatsApp
          <input
            type="text"
            placeholder="Email aktif atau nomor WhatsApp"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            onBlur={() => setTouched(true)}
          />
        </label>
        <label className="form-field">
          Perkiraan modal (opsional)
          <select
            value={capitalRange}
            onChange={(event) => setCapitalRange(event.target.value)}
          >
            <option value="">Pilih rentang</option>
            {capitalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      {showError ? (
        <p className="form-error">Mohon isi nama dan kontak yang aktif.</p>
      ) : null}
      <div className="cta-row cta-row-compact">
        <button className="btn btn-primary" type="submit">
          Request Early Access
        </button>
        <a className="text-link" href={waLink} target="_blank" rel="noreferrer">
          Kirim tanpa isi form
        </a>
      </div>
      <p className="form-note">
        Data hanya digunakan untuk onboarding dan tidak dibagikan ke pihak lain.
      </p>
    </form>
  );
}
