import { PropsWithChildren } from "react";
import Head from "next/head";

import { SeoProps } from "./seo.props";
import { metaConfig } from "@/helpers/objects";

const Seo = ({ children, ...props }: PropsWithChildren<SeoProps>) => {
  const {
    title = metaConfig.metaData.title,
    desc = metaConfig.metaData.description,
    keyword = metaConfig.metaData.keyword,
    ogImg = metaConfig.metaData.ogImage,
  } = props;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keyword" content={keyword} />
        <meta name="author" content={metaConfig.metaData.author} />
        <meta name="description" content={desc} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:locale" content="uz_UZ" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={ogImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={desc} />
        <link rel="icon" type="image/svg+xml" href={metaConfig.favicon} />
      </Head>

      <>{children}</>
    </>
  );
};

export default Seo;
