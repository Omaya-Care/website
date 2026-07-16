import { createRoot, hydrateRoot } from "react-dom/client";
import "./globals.css";
import "./ditto.css";
import Page from "./page";

const root = document.getElementById("root")!;
// Prerendered in prod (root has static HTML) -> hydrate; empty in dev -> client-render.
if (root.firstChild) hydrateRoot(root, <Page />);
else createRoot(root).render(<Page />);
