import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import * as Types from "@/helpers/interfaces";

import * as Layouts from "@/layouts";
import { Landing, ScrollUp } from "@/components";

const HomePage: NextPage<HomeProps> = () => (
  <>
    <Landing />
    <ScrollUp />
  </>
);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const category = 0;
  const { data: menu } = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page`, { category });

  return {
    props: { menu, category },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: Types.Menu.Item[];
  category: number;
}

export default Layouts.Main(HomePage);
