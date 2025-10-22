import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const blocks = [
  {
    title: "MISCRM — CRM/ERP",
    text: "Unifie vos ventes, projets, interventions et facturation (QR). Vues claires, automatisations utiles, intégrations bancaires et hébergement maîtrisé.",
    benefits: [
      "Suivi commercial & pipeline",
      "Projets/interventions planifiés",
      "Factures QR & intégrations",
      "Rapports temps réel",
    ],
  },
  {
    title: "GestCours — Gestion de formations",
    text: "Planification intelligente (formateurs, salles), présences et attestations. Synchronisation Moodle et rapports détaillés.",
    benefits: [
      "Planning automatique",
      "Présences & feuilles",
      "Synchro Moodle",
      "Détection de conflits",
    ],
  },
  {
    title: "Développements sur mesure",
    text: "Portails, intranets et API conçus pour vos processus. On part de vos objectifs, pas d’un cadre rigide.",
    benefits: [
      "Cadrage & ateliers UX",
      "Intégrations ERP/CRM",
      "API REST/GraphQL",
      "Tests & monitoring",
    ],
  },
  /*
  {
    title: "Innovation & jeux vidéo",
    text: "Pôle créatif et pédagogique (Unreal, Godot) pour expérimenter, former et transmettre.",
    benefits: [
      "Prototypage rapide",
      "Expériences interactives",
      "Parcours apprentissage",
      "Culture produit",
    ],
  },
  */
];

export default function Solutions() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Nos solutions
      </h1>

      <div className="mt-6 grid gap-6">
        {blocks.map((b, i) => (
          <div key={i} className="glass rounded-2xl p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {b.title}
            </h2>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{b.text}</p>
            <ul className="mt-3 grid md:grid-cols-2 gap-x-6 text-slate-700 dark:text-slate-300">
              {b.benefits.map((x, j) => (
                <li key={j} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-mis-teal shrink-0 mt-0.5" />{" "}
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Besoin d’un diagnostic rapide ?
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mt-1">
          On évalue vos flux, identifie 3 quick-wins et une trajectoire 90
          jours.
        </p>
        <Link className="btn mt-4 bg-white text-slate-900" to="/contact">
          Demander un échange
        </Link>
      </div>
    </section>
  );
}
