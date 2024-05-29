import Head from "next/head";
import { SeoProps } from "./seo.props";

const Seo = ({ children }: SeoProps) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <>{children}</>
    </>
  );
};

export default Seo;
