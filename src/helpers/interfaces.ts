import { Icons } from "@/assets";
import { Categories } from "./enums";

export type IConsType = keyof typeof Icons;

// eslint-disable-next-line
declare namespace NodeJS {
  // eslint-disable-next-line
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_BASE_URL: string;
    readonly NEXT_PUBLIC_DOMAIN: string;
  }
}

export interface ICompany {
  name: IConsType;
  width: number;
  height: number;
}

export interface ITimeLine {
  iconName: IConsType;
  title: string;
  text: string;
}

export declare namespace Menu {
  export interface Item {
    _id: { secondCategory: string };
    isOpened?: boolean;
    pages: Page[];
  }

  export interface Page {
    alias: string;
    title: string;
    _id: string;
    category: string;
  }

  export interface Level {
    route: string;
    name: string;
    iconName: IConsType;
    id: Categories;
  }
}

export declare namespace Page {
  export interface HhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  }

  export interface Advantage {
    title: string;
    description: string;
    id: string;
  }

  export interface Model {
    _id: string;
    alias: string;
    title: string;
    tags: string[];
    description: string;
    hh: HhData;
    advantages: Advantage[];
    category: string;
  }
}

export declare namespace Product {
  export interface Model {
    alias: string;
    title: string;
    _id: string;
    productId: string;
    category: string;
    price: number;
    credit: number;
    images: string;
    oldPrice: number;
    description: string;
    advantages: string;
    disadvantages: string;
    tags: string[];
    characteristics: Characteristic[];
    initialRating: number;
    reviews: ReviewModel[];
    reviewCount: number;
  }

  export interface Characteristic {
    name: string;
    value: string;
  }

  export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    productId: string;
  }
}
