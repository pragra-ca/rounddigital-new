import "@/styles/globals.css";
import "@/styles/system.css";
import { fontVars } from "@/lib/fonts";

export default function App({ Component, pageProps }) {
  // The font CSS variables are attached at the app root so both the legacy
  // `.rd` tree and the new `.rds` system can resolve them during migration.
  return (
    <div className={fontVars} style={{ display: "contents" }}>
      <Component {...pageProps} />
    </div>
  );
}
