import { ChangeEvent, FC, useState } from "react";
import { useRouter } from "next/router";
import cx from "classnames";

import { useContext } from "@/context";
import { SearchProps } from "./search.props";
import * as Types from "@/helpers/interfaces";

import { Button, Icon, Input } from "@/components";

import cls from "./search.module.scss";

const Search: FC<SearchProps> = ({ className, ...props }) => {
  const { menu } = useContext();
  const [search, setSearch] = useState<string>("");
  const [response, setResponse] = useState<Types.Menu.Page[]>([]);

  const router = useRouter();

  const searchHandler = (id: string) => {
    router.push(`/${router.query?.type || "courses"}/${id}`);
    setResponse([]);
    setSearch("");
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const allPages = menu.map(c => c.pages).flat();
    const value = e.target.value;

    setSearch(value);
    const response = allPages.filter(c => c.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    setResponse(response);
    if (value.length == 0) {
      setResponse([]);
    }
  };

  return (
    <div className={cx(cls.search, className)} {...props}>
      <Input placeholder="Search..." className={cls.input} value={search} onChange={changeHandler} />
      <Button appearance="primary" className={cls.button}>
        <Icon {...{ name: "Search", color: "#fff", width: 15, height: 15 }} />
      </Button>

      {response.length ? (
        <div className={cls.searchResponse}>
          {response.map(c => (
            <div onClick={() => searchHandler(c._id)} key={c._id}>
              {c.title}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
