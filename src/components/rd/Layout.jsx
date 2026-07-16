import { useRef } from "react";
import { RdThemeProvider } from "./theme";
import RdNavbar from "./Navbar";
import RdFooter from "./Footer";
import { useRdReveal } from "./anim";

function Shell({ children }) {
  const rootRef = useRef(null);
  useRdReveal(rootRef);

  return (
    <div ref={rootRef} className="rd" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <RdNavbar />
      <main style={{ flex: 1 }}>{children}</main>
      <RdFooter />
    </div>
  );
}

export default function RdLayout({ children }) {
  return (
    <RdThemeProvider>
      <Shell>{children}</Shell>
    </RdThemeProvider>
  );
}
