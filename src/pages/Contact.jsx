import { useEffect, useState } from "react";
import COMPANY from "../config/company";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "", // honeypot (doit rester vide)
    startedAt: "", // timestamp au montage
  });

  useEffect(() => {
    setForm((f) => ({ ...f, startedAt: String(Date.now()) }));
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus("");
    if (loading) return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Merci de remplir les champs requis.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
          website: form.website, // honeypot
          startedAt: form.startedAt, // pour contrôle serveur
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Une erreur est survenue.");
      }

      setStatus(
        "Merci ! Votre demande est bien reçue. Réponse sous 24h ouvrées."
      );
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
        startedAt: String(Date.now()),
      });
    } catch (err) {
      setStatus(
        err.message || "Impossible d’envoyer votre message pour le moment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Contact
      </h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        Expliquez-nous votre contexte en quelques lignes — on revient vers vous
        rapidement avec des pistes concrètes.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6 shadow-soft">
          <form onSubmit={submit} className="grid gap-4" noValidate>
            {/* Honeypot + horodatage (cachés) */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <input
              type="text"
              name="startedAt"
              value={form.startedAt}
              readOnly
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm text-slate-700 dark:text-slate-300">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-700 dark:text-slate-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal"
                required
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm text-slate-700 dark:text-slate-300">
                Société (optionnel)
              </label>
              <input
                id="company"
                name="company"
                value={form.company}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-slate-700 dark:text-slate-300">
                Votre besoin <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal"
                required
                placeholder="Objectifs, contraintes, délais..."
              />
            </div>

            <label className="inline-flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                required
                className="mt-1 rounded border-slate-300 dark:border-slate-700"
              />
              J’accepte que {COMPANY.name} traite mes données pour répondre à ma
              demande. (
              <a href="/confidentialite" className="underline">
                Politique
              </a>
              )
            </label>

            <div>
              <button
                className="btn disabled:opacity-60"
                type="submit"
                disabled={loading}>
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </div>

            {status && (
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {status}
              </p>
            )}
          </form>
        </div>

        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Coordonnées
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            {COMPANY.name}
            <br />
            {COMPANY.addressLine1}
            <br />
            {COMPANY.addressLine2}
            <br />
            {COMPANY.country}
          </p>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Tél. : {COMPANY.phone}
            <br />
            Email :{" "}
            <a className="underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Engagement
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Hébergement en Suisse, sécurité dès la conception, sobriété
              numérique et accessibilité. On s’engage à être utiles, réactifs et
              transparents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
