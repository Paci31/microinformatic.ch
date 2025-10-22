import COMPANY from "../config/company";

export default function Confidentialite() {
  const updated = new Date().toISOString().slice(0, 10);

  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Confidentialité & données personnelles
      </h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-3xl">
        Nous traitons vos données avec soin, uniquement pour répondre à vos
        demandes et exécuter nos prestations. Transparence, sécurité et sobriété
        guident nos choix.
      </p>

      <div className="mt-8 grid gap-6">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Responsable du traitement
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
            <a className="underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>{" "}
            · {COMPANY.phone}
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Données que nous traitons
          </h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Identité & contact (nom, email, téléphone, société)</li>
            <li>Échanges liés à votre projet (brief, devis, support)</li>
            <li>Journaux techniques minimaux (diagnostic sécurité/perf)</li>
          </ul>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Nous ne collectons pas de données sensibles. Aucune vente de
            données, ni ciblage publicitaire.
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Finalités & bases légales
          </h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Répondre à vos demandes de contact et exécuter nos contrats</li>
            <li>Améliorer nos services (support, qualité, sécurité)</li>
            <li>Respect des obligations légales (facturation, garanties)</li>
          </ul>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Durées de conservation
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Données de contact : 24 mois après le dernier échange si pas de
            contrat. Documents contractuels et facturation : délais légaux
            suisses (min. 10 ans).
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Sous-traitants & hébergement
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Hébergement et sauvegardes en Suisse (Infomaniak / équivalent).
            Accès limités, chiffrement en transit, sauvegardes régulières.
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Cookies & mesure d’audience
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Par défaut, nous limitons les cookies aux besoins techniques. Si
            nous utilisons une mesure d’audience, elle est{" "}
            <em>privacy-friendly</em> (sans profilage) et paramétrable via un
            bandeau de consentement.
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Vos droits
          </h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Accès, rectification, effacement</li>
            <li>Opposition et limitation</li>
            <li>Portabilité (dans la mesure applicable)</li>
          </ul>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Pour exercer vos droits :{" "}
            <a className="underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
            . Nous répondons sous 30 jours ouvrés.
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
