import { ThemeProvider } from "./theme";
import Nav from "./Nav";
import Footer from "./Footer";

// The single page shell. `#main` is the target of the skip link in Nav and
// carries the main landmark, so every page gets one and only one.
export default function Layout({ children }) {
  return (
    <ThemeProvider>
      {/* Scroll reveals set opacity:0 as a server-rendered inline style. If
          scripts never run, nothing would ever reveal them — so force them
          visible when JavaScript is unavailable. The markup is identical either
          way; only the animation is lost. */}
      <noscript>
        <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <div className="rds" style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main id="main" tabIndex={-1} style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
