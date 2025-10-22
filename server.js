// server.js
import express from "express";
import path from "path";
import compression from "compression";
import history from "connect-history-api-fallback";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// ⚠️ Port FIXE (à faire correspondre avec le Manager Infomaniak)
const PORT = Number(process.env.APP_PORT ?? 3000);

app.use(history()); // SPA fallback (React Router)
app.use(compression());
app.use(
  express.static(path.join(__dirname, "dist"), {
    index: "index.html",
    maxAge: "1y",
  })
);

app.get("/health", (_, res) => res.send("OK"));
app.listen(PORT, "0.0.0.0", () => console.log("Listening on 0.0.0.0:" + PORT));
