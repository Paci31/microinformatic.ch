export default function Technologies() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Technologies & principes
      </h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Socle
          </h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>React, Node.js, PHP, Next.js</li>
            <li>SQL Server, MariaDB, MongoDB</li>
            <li>API REST/GraphQL</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Souveraineté & sécurité
          </h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Hébergement en Suisse, backups & monitoring</li>
            <li>Chiffrement, SSL auto, RGPD</li>
            <li>Moindre privilège, audits réguliers</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Performance & sobriété
          </h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Front léger, lazy loading, cache</li>
            <li>Optimisation requêtes & médias</li>
            <li>Eco-design & KPIs d’empreinte</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Expérience & accessibilité
          </h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Design inclusif (WCAG)</li>
            <li>UX orientée métier</li>
            <li>Tests utilisateurs ciblés</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
