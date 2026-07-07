import { useRef } from "react";
import { SfThemeProvider } from "./theme";
import SfNavbar from "./Navbar";
import SfFooter from "./Footer";
import { useSfReveal } from "./anim";

function Shell({ children }) {
  const rootRef = useRef(null);
  useSfReveal(rootRef);

  return (
    <div ref={rootRef} className="sf flex min-h-screen flex-col">
      <a href="#sf-main" className="sf-skip-link">
        Skip to main content
      </a>
      <SfNavbar />
      <main id="sf-main" className="flex-grow">
        {children}
      </main>
      <SfFooter />
    </div>
  );
}

export default function SfLayout({ children }) {
  return (
    <SfThemeProvider>
      <Shell>{children}</Shell>
    </SfThemeProvider>
  );
}
