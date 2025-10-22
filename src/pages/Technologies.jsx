export default function Technologies() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Technologies</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900">Environnements & serveurs</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>Microsoft IIS, Windows Server</li>
            <li>Docker, hébergement Infomaniak</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900">Développement</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>PHP, Node.js, React, AngularJS, Next.js</li>
            <li>SQL Server, MariaDB, MongoDB</li>
            <li>API REST/JSON/GraphQL</li>
            <li>Intégrations ERP, Moodle, CRM, etc.</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900">Sécurité & conformité</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>SSL Let’s Encrypt (DNS-01)</li>
            <li>Sauvegardes & monitoring</li>
            <li>Hébergement en Suisse, RGPD</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold text-slate-900">Front-end & UX</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>Vite, React Router</li>
            <li>Design sobre et accessible</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
