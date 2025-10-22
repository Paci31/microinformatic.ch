import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Rejoindre MIS
      </h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        Nous cherchons des personnes curieuses, rigoureuses et bienveillantes,
        attachées à l’impact utile et à la sobriété numérique.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Pourquoi nous ?
          </h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Projets concrets à fort impact</li>
            <li>Mentorat, code reviews, progression</li>
            <li>Flexibilité responsable</li>
            <li>Engagement RSE (inclusion, apprentissage)</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Apprentissage & stages
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mt-2">
            Encadrement structuré, missions réelles et montée en compétences.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Candidature spontanée
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mt-1">
          Dites-nous ce qui vous motive et ce que vous voulez construire.
        </p>
        <Link className="btn mt-4 bg-white text-slate-900" to="/contact">
          Nous écrire
        </Link>
      </div>
    </section>
  );
}
