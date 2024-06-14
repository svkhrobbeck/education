import { GetServerSideProps, NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import * as Constants from "@/helpers/constants";
import * as Types from "@/helpers/interfaces";
import * as Layouts from "@/layouts";

const IndexPage: NextPage<IndexPageProps> = props => {
  return (
    <Layouts.Seo title="Education | Kurslar">
      {props.products.map(product => (
        <div key={uuidv4()}>{product.title}</div>
      ))}
    </Layouts.Seo>
  );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async ({ query }) => {
  const base_url = process.env.NEXT_PUBLIC_DOMAIN!;
  const category = Constants.levelMenu.find(m => m.route === query.type)?.id as number;

  try {
    const [menu, products] = await Promise.all([
      axios.post<Types.Menu.Item[]>(`${base_url}/api/page`, { category }).then(res => res.data),
      axios.get<Types.Product.Model[]>(`${base_url}/api/product`).then(res => res.data),
    ]);

    return {
      props: { menu, category, products },
    };
  } catch (_) {
    return {
      redirect: { destination: "/", permanent: true },
    };
  }
};

interface IndexPageProps extends Record<string, unknown> {
  category: number;
  menu: Types.Menu.Item[];
  products: Types.Product.Model[];
}

export default Layouts.Main(IndexPage);
