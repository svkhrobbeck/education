import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import * as Layouts from "@/layouts";
import * as Types from "@/helpers/interfaces";
import * as Constants from "@/helpers/constants";

const SlugPage: NextPage<SlugPageProps> = props => {
  console.log(props);

  return <>Courses Page</>;
};

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async ({ query }) => {
  const { type, slug } = query;
  const url = process.env.NEXT_PUBLIC_DOMAIN!;
  const category = Constants.levelMenu.find(c => c.route === type)?.id;

  try {
    const [page, menu, products] = await Promise.all([
      axios.get<Types.Page.Model>(`${url}/api/page/${slug}`).then(res => res.data),
      axios.post<Types.Menu.Item[]>(`${url}/api/page`, { category }).then(res => res.data),
      axios.post<Types.Product.Model[]>(`${url}/api/product`, { category: slug }).then(res => res.data),
    ]);

    return {
      props: { menu, page, products },
    };
  } catch (_) {
    return {
      redirect: { destination: "/", permanent: true },
    };
  }
};

interface SlugPageProps extends Record<string, unknown> {
  page: Types.Page.Model;
  menu: Types.Menu.Item[];
  products: Types.Product.Model[];
}

export default Layouts.Main(SlugPage);
