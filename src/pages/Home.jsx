import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <section className="container-xl pt-14 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-mis-teal/10 px-3 py-1 text-sm text-mis-teal font-medium">
          🇨🇭 Entreprise suisse · Fiable · Sur mesure
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white">
          Solutions informatiques suisses, fiables et sur mesure
        </h1>
        <p className="mt-4 text-slate-600 text-lg md:text-xl max-w-3xl mx-auto dark:text-white/90">
          Développement de logiciels, intégration de systèmes, hébergement, CRM,
          gestion d’entreprise et innovation digitale.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link className="btn" to="/solutions">
            Découvrir nos solutions
          </Link>
          <Link className="btn-outline" to="/contact">
            Nous contacter
          </Link>
        </div>
      </section>

      <section className="container-xl grid gap-6 md:grid-cols-2 lg:grid-cols-4 pb-8">
        {[
          {
            title: "Expertise",
            text: "Plus de 20 ans d’expérience au service des PME suisses.",
          },
          {
            title: "Fiabilité",
            text: "Sécurité renforcée, hosting en Suisse, support durable.",
          },
          {
            title: "Sur mesure",
            text: "Outils adaptés à vos processus métiers.",
          },
          {
            title: "Innovation",
            text: "Pôle Jeux Vidéo & Formation numérique.",
          },
        ].map((c, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-5 shadow-soft hover:shadow-soft-lg transition dark:text-white">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {c.title}
            </h3>
            <p className="mt-1 text-slate-600 dark:text-white/90">{c.text}</p>
          </div>
        ))}
      </section>
      {/* Témoignages */}
      <section className="container-xl pb-14">
        <div className="glass rounded-2xl p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
            Ils nous font confiance
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "Equipe réactive, solution robuste et adaptée à nos processus.",
                a: "Directeur PME romande",
              },
              {
                q: "Migration progressive, zéro interruption — excellent accompagnement.",
                a: "Responsable opérationnel",
              },
              {
                q: "Des outils simples pour des besoins complexes. Top.",
                a: "Chef de projet formation",
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-800/60">
                <p className="text-slate-800 dark:text-slate-200">“{t.q}”</p>
                <footer className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  — {t.a}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau CTA */}
      <section className="container-xl pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-mis-teal to-mis-teal-2 text-white p-8 shadow-soft-lg text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Prêt à moderniser vos systèmes ?
          </h2>
          <p className="mt-2 opacity-90">
            Parlons de vos besoins et d’une feuille de route pragmatique.
          </p>
          <a className="btn mt-4 bg-white text-slate-900" href="/contact">
            Démarrer la discussion
          </a>
        </div>
      </section>
    </div>
  );
}
