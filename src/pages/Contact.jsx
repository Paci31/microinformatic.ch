import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function submit(e) {
    e.preventDefault()
    setStatus('Message envoyé (démo). Connectez ce formulaire à votre backend IIS/Node/PHP.')
  }

  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6 shadow-soft">
          <form onSubmit={submit} className="grid gap-4">
            <div>
              <label className="block text-sm text-slate-700">Nom</label>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal" required placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Prénom</label>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal" required placeholder="Votre prénom" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Société</label>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal" placeholder="Nom de votre entreprise" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal" required placeholder="vous@exemple.ch" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Message</label>
              <textarea rows={6} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mis-teal" required placeholder="Votre message..." />
            </div>
            <div>
              <button className="btn" type="submit">Envoyer</button>
            </div>
            {status && <p className="text-slate-600 text-sm">{status}</p>}
          </form>
        </div>

        <div className="glass rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-slate-900">Coordonnées</h3>
          <p className="mt-2 text-slate-700">
            Micro Informatic Systems SA<br/>CH-[Code postal et localité]<br/>+41 [numéro]<br/>info@miscrm.ch
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">Hébergement</h3>
            <p className="mt-2 text-slate-700">Infrastructure en Suisse, SSL automatique (Let’s Encrypt), sauvegardes et monitoring.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
