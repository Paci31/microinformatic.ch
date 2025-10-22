import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Users2, Leaf } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Fiabilité & sécurité",
      text: "Architectures robustes, sécurité dès la conception et hébergement en Suisse.",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Impact business",
      text: "Automatisation pragmatique, tableaux de bord clairs, ROI mesurable.",
    },
    {
      icon: <Users2 className="h-5 w-5" />,
      title: "Accompagnement humain",
      text: "Proximité, ateliers co-design et support réactif au quotidien.",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Sobriété numérique",
      text: "Front léger, optimisation des requêtes et empreinte carbone réduite.",
    },
  ];

  const stats = [
    { k: "+20 ans", v: "d’expérience" },
    { k: "99.9%", v: "SLA visé" },
    { k: "100%", v: "hébergé en Suisse" },
    { k: "∞", v: "évolutif" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="container-xl pt-14 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-mis-teal/10 px-3 py-1 text-sm text-mis-teal font-medium">
          🇨🇭 Suisse · RSE engagée · Performance utile
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white">
          Des solutions logicielles qui font grandir votre organisation
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
          CRM/ERP, SaaS et intégrations sur mesure. Plus simples pour vos
          équipes, plus efficaces pour votre business, plus responsables pour la
          planète.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link className="btn" to="/solutions">
            Voir nos solutions
          </Link>
          <Link className="btn-outline" to="/rse">
            Découvrir notre RSE
          </Link>
        </div>
        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-4">
              <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                {s.k}
              </div>
              <div className="text-slate-600 dark:text-slate-300">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container-xl grid gap-6 md:grid-cols-2 lg:grid-cols-4 pb-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="glass rounded-2xl p-5 shadow-soft hover:shadow-soft-lg transition">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-mis-teal/10 text-mis-teal">
              {f.icon}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              {f.title}
            </h3>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Social proof */}
      <section className="container-xl pb-10">
        <div className="glass rounded-2xl p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-center text-slate-900 dark:text-white">
            Ils nous font confiance
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3 text-slate-700 dark:text-slate-300">
            <blockquote className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-800/60">
              “Mise en production sans friction, support exemplaire — on a gagné
              des semaines.”
              <footer className="mt-2 text-sm">
                — Direction d’une PME industrielle
              </footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-800/60">
              “Le CRM/ERP a simplifié nos opérations et la facturation QR —
              parfait.”
              <footer className="mt-2 text-sm">
                — Responsable administratif
              </footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-800/60">
              “Sobriété numérique et performance : nos pages se chargent 2× plus
              vite.”
              <footer className="mt-2 text-sm">
                — Chef de projet formation
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-xl pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-mis-teal to-mis-teal-2 text-white p-8 shadow-soft-lg text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Un projet stratégique ?
          </h2>
          <p className="mt-2 opacity-90">
            Parlons objectifs, impacts et trajectoire. On vous répond sous 24h
            ouvrées.
          </p>
          <Link className="btn mt-4 bg-white text-slate-900" to="/contact">
            Démarrer la discussion
          </Link>
        </div>
      </section>
    </div>
  );
}
