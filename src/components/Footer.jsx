import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="container-xl grid gap-8 md:grid-cols-3 py-10">
        <div>
          <img src="/src/assets/logo.png" alt="Micro Informatic Systems SA" className="h-10 w-auto mb-3" />
          <p className="text-slate-600">
            Solutions informatiques suisses, fiables et sur mesure : CRM/ERP, SaaS, intégrations et hébergement.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-slate-900">Liens</h4>
          <ul className="space-y-2 text-slate-700">
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/solutions">Nos solutions</Link></li>
            <li><Link to="/technologies">Technologies</Link></li>
            <li><Link to="/carrieres">Carrières</Link></li>
            <li><Link to="/references">Références</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-slate-900">Légal</h4>
          <ul className="space-y-2 text-slate-700">
            <li><Link to="/confidentialite">Confidentialité</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-xl flex items-center justify-between py-4 text-sm text-slate-600">
          <span>© 2025 Micro Informatic Systems SA — Tous droits réservés</span>
          <span className="hidden sm:block">Hébergement interne · Suisse</span>
        </div>
      </div>
    </footer>
  )
}
