import { useEffect, useMemo, useState } from "react";

export default function EcoIndicators() {
  const [open, setOpen] = useState(false);
  const [metrics, setMetrics] = useState({ kb: 0, req: 0, ttfb: 0, dcl: 0 });

  const formatKB = (bytes) => Math.round(bytes / 1024);

  const collect = () => {
    try {
      const resources = performance.getEntriesByType("resource") || [];
      const totalBytes = resources.reduce(
        (sum, r) => sum + (r.transferSize || 0),
        0
      );
      const req = resources.length;
      // TTFB approx = responseStart - startTime (main doc entry)
      const nav = performance.getEntriesByType("navigation")[0];
      const ttfb = nav ? Math.max(0, nav.responseStart - nav.startTime) : 0;
      const dcl = nav
        ? Math.max(0, nav.domContentLoadedEventEnd - nav.startTime)
        : 0;
      setMetrics({
        kb: formatKB(totalBytes),
        req,
        ttfb: Math.round(ttfb),
        dcl: Math.round(dcl),
      });
    } catch {}
  };

  useEffect(() => {
    collect();
    const id = setTimeout(collect, 2000); // re-mesure après hydration
    return () => clearTimeout(id);
  }, []);

  const badge = useMemo(
    () => (
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-slate-900/80 text-white text-xs px-3 py-2 shadow-lg backdrop-blur hover:bg-slate-900"
        aria-label="Éco-indicateurs">
        🌿 {metrics.kb} KB · {metrics.req} req
      </button>
    ),
    [metrics]
  );

  return (
    <>
      {badge}
      {open && (
        <div className="fixed bottom-16 right-4 z-50 w-72 rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
          <div className="flex items-center justify-between">
            <strong className="text-slate-900 dark:text-white">
              Éco-indicateurs
            </strong>
            <button
              className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <ul className="mt-2 space-y-1 text-slate-700 dark:text-slate-300">
            <li>
              <span className="font-medium">Poids total chargé :</span>{" "}
              {metrics.kb} KB
            </li>
            <li>
              <span className="font-medium">Nombre de requêtes :</span>{" "}
              {metrics.req}
            </li>
            <li>
              <span className="font-medium">TTFB (approx.) :</span>{" "}
              {metrics.ttfb} ms
            </li>
            <li>
              <span className="font-medium">DOMContentLoaded :</span>{" "}
              {metrics.dcl} ms
            </li>
          </ul>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Mesures approximatives côté navigateur (hors cache nav.). Objectif :
            sobriété & rapidité.
          </p>
        </div>
      )}
    </>
  );
}
