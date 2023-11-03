import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="manifest" href="/manifest.json" />
        <title>Luka: Pay digitally simple</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal"></div>
        {/* <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=7ac1d2a1-71dc-4700-87c8-15855cd8663e"
        ></script> */}
      </body>
    </Html>
  );
}
