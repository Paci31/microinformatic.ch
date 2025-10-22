import COMPANY from "../config/company";

export default function MentionsLegales() {
  const updated = new Date().toISOString().slice(0, 10);

  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Mentions légales
      </h1>

      <div className="mt-6 grid gap-6">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Éditeur du site
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            <strong>{COMPANY.name}</strong>
            <br />
            {COMPANY.addressLine1}
            <br />
            {COMPANY.addressLine2}
            <br />
            {COMPANY.country}
            <br />
            IDE : {COMPANY.ide}
            <br />
            Tél. : {COMPANY.phone}
            <br />
            Email :{" "}
            <a className="underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
            <br />
            Direction de la publication : {COMPANY.name}
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Hébergement
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Infomaniak Network SA — Rue Eugène-Marziano 25, 1227 Les Acacias,
            Suisse —{" "}
            <a
              className="underline"
              href="https://www.infomaniak.com"
              target="_blank"
              rel="noreferrer">
              infomaniak.com
            </a>
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Propriété intellectuelle
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Le contenu de ce site (textes, visuels, code) est protégé. Toute
            reproduction ou réutilisation nécessite une autorisation écrite
            préalable de {COMPANY.name}. Les marques et logos cités restent la
            propriété de leurs titulaires respectifs.
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Responsabilité
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Nous veillons à l’exactitude des informations publiées sans garantie
            d’exhaustivité. Le site peut contenir des liens vers des services
            tiers ; {COMPANY.name} n’en maîtrise pas le contenu. Pour tout
            signalement :{" "}
            <a className="underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
            .
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Données personnelles
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Voir notre{" "}
            <a className="underline" href="/confidentialite">
              politique de confidentialité
            </a>{" "}
            (droits, finalités, durées, sous-traitants).
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Droit applicable & for
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Le droit suisse est applicable. For juridique : Vaud (Suisse).
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Dernière mise à jour : {updated}
          </p>
        </div>
      </div>
    </section>
  );
}
