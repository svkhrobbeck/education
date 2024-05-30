import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import * as Types from "@/helpers/interfaces";
import * as Layouts from "@/layouts";

const HomePage: NextPage<HomeProps> = props => {
  console.log(props);

  return <></>;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data: menu } = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page`, { category: 0 });

  return {
    props: { menu },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: Types.Menu.Item[];
}

export default Layouts.Main(HomePage);
