import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageProps {
  params: {
    id: string;
  };
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export type Products = Product[];
