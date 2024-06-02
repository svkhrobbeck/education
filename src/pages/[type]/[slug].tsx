import { useEffect, useReducer } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import sortReducer from "@/reducers/sort.reducer";
import * as Constants from "@/helpers/constants";
import * as Types from "@/helpers/interfaces";
import * as Enums from "@/helpers/enums";
import * as Layouts from "@/layouts";

import { Advantages, Heading, HhData, Products, Skills, Sort } from "@/components";

const SlugPage: NextPage<SlugPageProps> = ({ page, products }) => {
  const [state, dispatch] = useReducer(sortReducer, { sort: Enums.Sorts.Rating, products });

  const setSort = (sort: Enums.Sorts) => {
    dispatch({ type: sort });
  };

  useEffect(() => {
    dispatch({ type: "reset", initialState: products });
  }, [products]);

  return (
    <>
      <div className="slug-page-title-wrapper">
        <Heading tag="h1">{page.title}</Heading>
        <Sort sort={state.sort} setSort={setSort} />
      </div>

      <Products products={state.products} />
      <HhData {...page} />
      <Advantages {...page} />
      <Skills {...page} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SlugPageProps> = async ({ query }) => {
  const { type, slug } = query;
  const url = process.env.NEXT_PUBLIC_DOMAIN!;
  const category = Constants.levelMenu.find(c => c.route === type)?.id as number;

  try {
    const [page, menu, products] = await Promise.all([
      axios.get<Types.Page.Model>(`${url}/api/page/${slug}`).then(res => res.data),
      axios.post<Types.Menu.Item[]>(`${url}/api/page`, { category }).then(res => res.data),
      axios.post<Types.Product.Model[]>(`${url}/api/product`, { category: slug }).then(res => res.data),
    ]);

    return {
      props: { menu, page, products, category },
    };
  } catch (_) {
    return {
      redirect: { destination: "/", permanent: true },
    };
  }
};

interface SlugPageProps extends Record<string, unknown> {
  category: number;
  page: Types.Page.Model;
  menu: Types.Menu.Item[];
  products: Types.Product.Model[];
}

export default Layouts.Main(SlugPage);
