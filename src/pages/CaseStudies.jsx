import { motion } from 'framer-motion'

const cases = [
  { title:'CRM pour PME romande', text:'Mise en place de MISCRM avec modules ventes, interventions et facturation QR.', tag:'CRM/ERP' },
  { title:'Plateforme de formation', text:'Portail formateurs/élèves, synchro Moodle, planification automatique.', tag:'Éducation' },
  { title:'SaaS de gestion interne', text:'Intranet React + Node, intégrations API et reporting en temps réel.', tag:'SaaS' },
]

export default function CaseStudies() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Références</h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">Exemples de projets que nous réalisons pour nos clients.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 shadow-soft"
          >
            <span className="inline-flex text-xs font-semibold rounded-full bg-mis-teal/10 text-mis-teal px-2 py-1">{c.tag}</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{c.title}</h3>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{c.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center glass rounded-2xl p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Un projet en tête ?</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">Parlons de vos besoins et construisons une solution durable.</p>
        <a href="/contact" className="btn mt-4">Discuter de mon projet</a>
      </div>
    </section>
  )
}
