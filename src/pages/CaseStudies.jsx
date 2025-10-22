import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cases = [
  {
    title: "CRM unifié pour PME romande",
    text: "Cycle de vente clarifié, interventions planifiées, facturation QR — -30% d’emails internes.",
    tag: "CRM/ERP",
    kpis: ["-30% emails", "+15% CA", "Mise en prod 6 sem."],
  },
  {
    title: "Plateforme de formation",
    text: "Planification automatique, présences et rapports — satisfaction formateurs 4.7/5.",
    tag: "Éducation",
    kpis: ["4.7/5 NPS", "-50% temps admin", "Sync Moodle"],
  },
  {
    title: "Intranet & API temps réel",
    text: "Indicateurs unifiés, API sécurisée — décisions accélérées.",
    tag: "SaaS",
    kpis: ["Délai décision x2", "99.9% SLA", "Souveraineté data"],
  },
];

export default function CaseStudies() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Références
      </h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        Des résultats concrets, mesurables et durables.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 shadow-soft">
            <span className="inline-flex text-xs font-semibold rounded-full bg-mis-teal/10 text-mis-teal px-2 py-1">
              {c.tag}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
              {c.title}
            </h3>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{c.text}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.kpis.map((k, j) => (
                <li
                  key={j}
                  className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  {k}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center glass rounded-2xl p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Un cas similaire au vôtre ?
        </h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">
          On vous partage une démo guidée et un estimatif transparent.
        </p>
        <Link className="btn mt-4 bg-white text-slate-900" to="/contact">
          Planifier une démo
        </Link>
      </div>
    </section>
  );
}
