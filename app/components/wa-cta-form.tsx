"use client";

import { useMemo, useState } from "react";

const baseUrl = "https://wa.me/6282186287929";

export default function WaCtaForm() {
  const [name, setName] = useState("");
  const [timeChoice, setTimeChoice] = useState("");
  const [customTime, setCustomTime] = useState("");
  const [touched, setTouched] = useState(false);

  const timeOptions = [
    "Hari kerja 09.00-12.00",
    "Hari kerja 13.00-17.00",
    "Sabtu 10.00-12.00",
    "custom"
  ];

  const finalTime = timeChoice === "custom" ? customTime : timeChoice;
  const hasName = name.trim().length > 0;
  const hasTime = finalTime.trim().length > 0;
  const customTimeValid =
    timeChoice !== "custom" ||
    (customTime.trim().length >= 5 && /\d/.test(customTime));
  const showError = touched && (!hasName || !hasTime || !customTimeValid);

  const message = useMemo(() => {
    const safeName = name.trim() || "[Nama]";
    const safeTime = finalTime.trim() || "[Waktu yang diinginkan]";

    return `Halo admin, nama saya ${safeName}. Saya ingin bertanya tentang layanan EA dan copy trading serta jadwal konsultasi yang tersedia. Waktu yang saya inginkan: ${safeTime}.`;
  }, [name, finalTime]);

  const waLink = `${baseUrl}?text=${encodeURIComponent(message)}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);

    if (!hasName || !hasTime || !customTimeValid) {
      return;
    }
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="wa-form" onSubmit={handleSubmit}>
      <div className="wa-grid">
        <label className="form-field">
          Nama Anda
          <input
            type="text"
            placeholder="Nama lengkap"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => setTouched(true)}
          />
        </label>
        <div className="form-field">
          Pilih waktu yang diinginkan
          <div className="time-chips" role="group" aria-label="Pilihan waktu">
            {timeOptions.map((option) => {
              const label = option === "custom" ? "Tentukan sendiri" : option;
              const isActive = timeChoice === option;

              return (
                <button
                  key={option}
                  className={`chip ${isActive ? "chip-active" : ""}`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setTimeChoice(option);
                    setTouched(true);
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        {timeChoice === "custom" ? (
          <label className="form-field">
            Tulis waktu yang diinginkan
            <input
              type="text"
              placeholder="Contoh: Selasa 19.00-20.00"
              value={customTime}
              onChange={(event) => setCustomTime(event.target.value)}
              onBlur={() => setTouched(true)}
            />
          </label>
        ) : null}
      </div>
      {showError ? (
        <p className="form-error">
          Mohon isi nama dan waktu konsultasi yang diinginkan.
        </p>
      ) : null}
      <div className="cta-row cta-row-compact">
        <button className="btn btn-primary" type="submit">
          Kirim ke WhatsApp
        </button>
        <a className="text-link" href={waLink} target="_blank" rel="noreferrer">
          Buka chat tanpa isi form
        </a>
      </div>
      <p className="form-note">
        Data ini tidak disimpan. Anda bisa mengedit pesan sebelum mengirim.
      </p>
    </form>
  );
}
