import { Html, Head, Main, NextScript } from "next/document";

// Applies the persisted theme before first paint so light-theme users
// never see a dark flash (and vice versa). The RoundDigital redesign
// defaults to dark; only an explicit "light" choice flips the attribute.
const themeInitScript = `try{if(localStorage.getItem("rd-theme")==="light")document.documentElement.setAttribute("data-rd-theme","light")}catch(e){}`;

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
