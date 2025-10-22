import { Link } from "react-router-dom";
import COMPANY from "../config/company";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 backdrop-blur dark:bg-slate-900/70 dark:border-slate-800">
      <div className="container-xl grid gap-8 md:grid-cols-4 py-10">
        <div>
          <img src={Logo} alt={COMPANY.name} className="h-10 w-auto mb-3" />
          <p className="text-slate-600 dark:text-slate-300">
            Solutions informatiques suisses, sobres et sur mesure : CRM/ERP,
            SaaS, intégrations, sécurité et hébergement local.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">
            Coordonnées
          </h4>
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>{COMPANY.name}</li>
            <li>{COMPANY.addressLine1}</li>
            <li>{COMPANY.addressLine2}</li>
            <li>{COMPANY.country}</li>
            <li>IDE : {COMPANY.ide}</li>
            <li>Tél. : {COMPANY.phone}</li>
            <li>
              Email :{" "}
              <a className="underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">
            Liens
          </h4>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>
              <Link to="/a-propos">À propos</Link>
            </li>
            <li>
              <Link to="/solutions">Nos solutions</Link>
            </li>
            <li>
              <Link to="/references">Références</Link>
            </li>
            <li>
              <Link to="/rse">RSE & Durabilité</Link>
            </li>
            <li>
              <Link to="/carrieres">Carrières</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">
            Légal
          </h4>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>
              <Link to="/confidentialite">Confidentialité</Link>
            </li>
            <li>
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-xl flex items-center justify-between py-4 text-sm text-slate-600 dark:text-slate-400">
          <span>
            © {new Date().getFullYear()} {COMPANY.name} — Tous droits réservés
          </span>
          <span className="hidden sm:block">
            Hébergement en Suisse · Empreinte optimisée
          </span>
        </div>
      </div>
    </footer>
  );
}
