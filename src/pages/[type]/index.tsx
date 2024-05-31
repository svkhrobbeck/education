import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import * as Constants from "@/helpers/constants";
import * as Types from "@/helpers/interfaces";
import * as Layouts from "@/layouts";

const IndexPage: NextPage<IndexPageProps> = () => {
  return <>IndexPage</>;
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async ({ query }) => {
  const base_url = process.env.NEXT_PUBLIC_DOMAIN!;
  const category = Constants.levelMenu.find(m => m.route === query.type)?.id as number;

  try {
    const { data: menu } = await axios.post<Types.Menu.Item[]>(`${base_url}/api/page`, { category });

    return {
      props: { menu, category },
    };
  } catch (_) {
    return {
      redirect: { destination: "/", permanent: true },
    };
  }
};

interface IndexPageProps extends Record<string, unknown> {
  menu: Types.Menu.Item[];
  category: number;
}

export default Layouts.Main(IndexPage);
