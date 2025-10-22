// server.js
import express from "express";
import path from "path";
import compression from "compression";
import history from "connect-history-api-fallback";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();
const dist = path.join(__dirname, "dist");

// Fallback SPA (React Router)
app.use(history());

// Static + compression
app.use(compression());
app.use(
  express.static(dist, {
    index: "index.html",
    maxAge: "1y",
    extensions: ["html"],
  })
);

// Healthcheck (utile dans les logs)
app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server listening on http://0.0.0.0:${port}`);
});
