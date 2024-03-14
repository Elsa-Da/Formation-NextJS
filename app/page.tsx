"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Products } from "./lib/types";

export default function Home() {
  const [products, setProducts] = useState<Products>([]);
  useEffect(() => {
    const fetchingDatas = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products: Awaited<Products> = await res.json();
      setProducts(products);
    };
    fetchingDatas();

    // (async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const products: Awaited<Products> = await res.json();
    //   setProducts(products);
    // })();
  }, []);
  return (
    <main className={styles.main}>
      {products.map((product) => (
        <p key={product.id}>
          {product.title} - {product.price}€
        </p>
      ))}
    </main>
  );
}
