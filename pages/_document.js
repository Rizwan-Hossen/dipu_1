import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head dangerouslySetInnerHTML={{ __html: `<!-- Devloped By Rizwan Hossen ft Code thousand 
    Website: https://www.codethousand.net/ --> `}} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
