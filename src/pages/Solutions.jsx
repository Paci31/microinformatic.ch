export default function Solutions() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Nos solutions</h1>

      <div className="mt-6 grid gap-6">
        {[
          {title:'MISCRM — CRM/ERP', text:'Gestion client, projets, interventions, facturation, intégration bancaire (QR-factures), hébergement IIS.'},
          {title:'GestCours — Gestion de formations', text:'Planification automatique, présences, salles, formateurs, synchronisation Moodle, rapports.'},
          {title:'Développement sur mesure', text:'Applications web/mobiles, intranets, portails, API et intégrations.'},
          {title:'Innovation & jeux vidéo', text:'Pôle dédié aux projets créatifs et à la formation (Unreal, Godot).'},
        ].map((b, i) => (
          <div key={i} className="glass rounded-2xl p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-900">{b.title}</h2>
            <p className="mt-2 text-slate-700">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
