import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-xl py-24 text-center">
      <h1 className="text-6xl font-bold text-slate-900 dark:text-white">404</h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">La page demandée est introuvable.</p>
      <Link to="/" className="btn mt-6">Retour à l’accueil</Link>
    </section>
  )
}
