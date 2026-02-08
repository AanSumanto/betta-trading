"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const defaultState = {
  date: "",
  providerName: "PT. Bettazon Sukses Indonesia",
  providerAddress:
    "Jl. Husin Basri Perumahan Grand Berdikari Blok G.16 Rt/Rw. 005/002 Kel. Sukamulya Kec. Sematang Borang.",
  providerContact: "082186287929",
  userName: "",
  userId: "",
  userAddress: "",
  userContact: "",
  legalRegion: "",
  brokerName: "",
  tradingAccount: ""
};

type FormState = typeof defaultState;

export default function PksForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(defaultState);

  useEffect(() => {
    if (form.date) {
      return;
    }

    const today = new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    setForm((prev) => ({
      ...prev,
      date: today
    }));
  }, [form.date]);

  const onChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();

    Object.entries(form).forEach(([key, value]) => {
      if (value.trim()) {
        params.set(key, value.trim());
      }
    });

    router.push(`/pks/print?${params.toString()}`);
  };

  return (
    <form className="pks-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label className="form-field">
          Tanggal perjanjian
          <input
            type="text"
            placeholder="Contoh: 7 Februari 2026"
            value={form.date}
            onChange={(event) => onChange("date", event.target.value)}
            readOnly
          />
        </label>
        <label className="form-field">
          Nama penyedia
          <input
            type="text"
            placeholder="Nama/entitas penyedia"
            value={form.providerName}
            onChange={(event) => onChange("providerName", event.target.value)}
            readOnly
          />
        </label>
        <label className="form-field">
          Alamat penyedia
          <input
            type="text"
            placeholder="Alamat lengkap penyedia"
            value={form.providerAddress}
            onChange={(event) => onChange("providerAddress", event.target.value)}
            readOnly
          />
        </label>
        <label className="form-field">
          Kontak penyedia
          <input
            type="text"
            placeholder="Email/telepon"
            value={form.providerContact}
            onChange={(event) => onChange("providerContact", event.target.value)}
            readOnly
          />
        </label>
        <label className="form-field">
          Nama pengguna
          <input
            type="text"
            placeholder="Nama lengkap pengguna"
            value={form.userName}
            onChange={(event) => onChange("userName", event.target.value)}
          />
        </label>
        <label className="form-field">
          Nomor identitas
          <input
            type="text"
            placeholder="KTP/Paspor"
            value={form.userId}
            onChange={(event) => onChange("userId", event.target.value)}
          />
        </label>
        <label className="form-field">
          Alamat pengguna
          <input
            type="text"
            placeholder="Alamat lengkap pengguna"
            value={form.userAddress}
            onChange={(event) => onChange("userAddress", event.target.value)}
          />
        </label>
        <label className="form-field">
          Kontak pengguna
          <input
            type="text"
            placeholder="Email/telepon"
            value={form.userContact}
            onChange={(event) => onChange("userContact", event.target.value)}
          />
        </label>
        <label className="form-field">
          Nama broker
          <input
            type="text"
            placeholder="Contoh: Exness"
            value={form.brokerName}
            onChange={(event) => onChange("brokerName", event.target.value)}
          />
        </label>
        <label className="form-field">
          Nomor akun trading
          <input
            type="text"
            placeholder="Nomor akun trading"
            value={form.tradingAccount}
            onChange={(event) => onChange("tradingAccount", event.target.value)}
          />
        </label>
        <label className="form-field">
          Wilayah hukum
          <input
            type="text"
            placeholder="Contoh: Indonesia"
            value={form.legalRegion}
            onChange={(event) => onChange("legalRegion", event.target.value)}
          />
        </label>
      </div>
      <p className="form-note">
        Kolom yang tidak diisi akan tetap memakai placeholder di dokumen PKS.
      </p>
      <div className="cta-row">
        <button className="btn btn-primary" type="submit">
          Buat PKS Terisi
        </button>
        <a className="btn btn-ghost" href="/pks/print">
          Lihat PKS Kosong
        </a>
      </div>
    </form>
  );
}
