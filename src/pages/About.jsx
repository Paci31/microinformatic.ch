export default function About() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Qui sommes-nous ?
      </h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        Micro Informatic Systems SA accompagne les organisations suisses depuis
        plus de 20 ans. Notre promesse : des logiciels utiles, élégants et
        responsables qui simplifient votre quotidien et soutiennent votre
        croissance durable.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Notre mission
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Créer des solutions fiables, performantes et sobres, en alliant
            excellence technique et sens du service, pour maximiser l’impact
            business tout en réduisant l’empreinte numérique.
          </p>
        </div>
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Nos valeurs
          </h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Transparence et respect des engagements</li>
            <li>Qualité suisse et sécurité by design</li>
            <li>Proximité, pédagogie et transmission (apprentissage)</li>
            <li>Sobriété numérique et inclusion</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-8">
        <div className="glass rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 dark:text-white">
            Proximité
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            Équipe accessible, ateliers co-design, suivi régulier.
          </p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 dark:text-white">
            Exigence
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            Qualité de code, rigueur projet, documentation utile.
          </p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 dark:text-white">
            Responsabilité
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            Hébergement en Suisse, RGPD, sobriété, accessibilité.
          </p>
        </div>
      </div>
    </section>
  );
}
