export default function About() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900">À propos</h1>
      <p className="mt-3 text-slate-700">
        Fondée il y a plus de 20 ans, Micro Informatic Systems SA conçoit, développe et maintient des
        solutions logicielles métiers, portails web et intégrations techniques pour des entreprises suisses.
      </p>
      <p className="mt-2 text-slate-700">
        Notre mission : simplifier, automatiser et moderniser vos processus, avec des technologies durables
        et un accompagnement de proximité.
      </p>
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900">Ce que nous faisons</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>CRM/ERP sur mesure</li>
            <li>Solutions SaaS & portails</li>
            <li>Intégrations API, SQL, systèmes tiers</li>
            <li>Hébergement & sécurité (SSL, sauvegardes)</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900">Notre approche</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>Rigueur et qualité suisses</li>
            <li>Transparence et accompagnement</li>
            <li>Pérennité et évolutivité des solutions</li>
            <li>Innovation continue</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
