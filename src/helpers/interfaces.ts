import { ReactNode } from "react";

import { Categories } from "./enums";

export type IChildren = Readonly<{ children: ReactNode }>;

// eslint-disable-next-line
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
    iconName: string;
    id: Categories;
  }
}

// eslint-disable-next-line
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

// eslint-disable-next-line
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
