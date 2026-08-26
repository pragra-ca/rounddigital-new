import { Html, Head, Main, NextScript } from "next/document";

// Applies the theme before first paint so a dark-mode reader never sees a
// white flash. Light is the default (this site is read and printed like a
// document); an explicit stored choice wins, otherwise we follow the OS.
//
// Fonts are self-hosted by next/font (see src/lib/fonts.js) — there is
// deliberately no <link> to fonts.googleapis.com here, because that costs a
// render-blocking connection and hurts LCP.
const themeInitScript = `try{var s=localStorage.getItem("rds-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.setAttribute("data-rds-theme","dark")}catch(e){}`;

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
