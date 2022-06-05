import Head from 'next/head';
import { fontFaceRules } from './GlobalStyle.css';

type DocHeadProps = {
  docTitle: string;
  description: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
};

const DocHead = (props: DocHeadProps) => (
  <Head>
    <title>{props.docTitle}</title>
    <link rel="icon" href="/img/favicon.svg" />
    <meta name="description" content={props.description} />
    <meta property="og:title" content={props.docTitle} />
    <meta property="og:description" content={props.description} />
    {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
    {props.imageAlt && (
      <meta property="og:image:alt" content={props.imageAlt} />
    )}
    <meta property="og:url" content={props.url} />    
    <style
      dangerouslySetInnerHTML={{
        __html: fontFaceRules,
      }}
    ></style>
  </Head>
);

export default DocHead;
