import { Link } from "react-router-dom";

export default function RSE() {
  const pillars = [
    {
      title: "Environnement",
      items: [
        "Hébergement en Suisse, data minimisation",
        "Front léger, cache, assets optimisés",
        "Suivi d’empreinte (poids pages, requêtes, énergie)",
      ],
    },
    {
      title: "Social",
      items: [
        "Apprentissage & mentorat (transmission)",
        "Accessibilité (WCAG) et inclusion",
        "Transparence, proximité, respect du temps",
      ],
    },
    {
      title: "Gouvernance",
      items: [
        "Sécurité by design, audits réguliers",
        "RGPD, politique de confidentialité claire",
        "Achats responsables & partenaires locaux quand c’est pertinent",
      ],
    },
  ];

  const goals = [
    {
      year: "2025",
      text: "Réduire de 25% le poids moyen des pages livrées (baseline 2024).",
    },
    {
      year: "2025",
      text: "Généraliser l’accessibilité niveau AA sur nos interfaces livrées.",
    },
    {
      year: "2026",
      text: "Éco-indicateurs visibles par défaut dans nos tableaux de bord projet.",
    },
  ];

  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        RSE & Durabilité
      </h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-3xl">
        Construire des logiciels utiles et responsables : c’est notre boussole.
        Notre démarche RSE s’appuie sur trois piliers — Environnement, Social,
        Gouvernance — avec des actions concrètes et des objectifs mesurables.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mt-8">
        {pillars.map((p, i) => (
          <div key={i} className="glass rounded-2xl p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {p.title}
            </h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
              {p.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 glass rounded-2xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Objectifs
        </h3>
        <ul className="mt-2 space-y-2 text-slate-700 dark:text-slate-300">
          {goals.map((g, i) => (
            <li key={i}>
              <span className="font-semibold">{g.year}</span> — {g.text}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-slate-700 dark:text-slate-300">
          Nous publions des indicateurs simples : poids moyen de page, nombre de
          requêtes, temps de chargement, incidents de sécurité.
        </p>
      </div>

      <div className="mt-10 text-center rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Envie d’une approche responsable ?
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mt-1">
          On vous aide à réduire l’empreinte de vos services tout en améliorant
          l’expérience.
        </p>
        <Link className="btn mt-4 bg-white text-slate-900" to="/contact">
          Parler RSE & produit
        </Link>
      </div>
    </section>
  );
}
