/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

const Meta = ({ title, keywords, description, author }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
Meta.defaultProps = {
  title: "Johanna Thelin | Sångcoach",
  keywords:
    "sång, sångpedagog, Johanna Thelin, Vadstena, lärare, lär dig sjunga",
  description:
    "Johanna Thelin, sångpedagog som tar emot elever som vill lära sig sjunga eller förbättre sin sång",
  author: "Fredrik Thelin (Fthelin)",
};

export default Meta;
