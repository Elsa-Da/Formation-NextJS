import styles from "./page.module.css";
import { Products } from "../lib/types";
import { fetchFakeStore } from "../lib/fakeStoreApiService";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./[id]/loading";

// const getProducts = async (): Promise<Products> => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const products: Products = await res.json();
//   return products;
// };

const ProductsPage = async () => {
  const products = await fetchFakeStore<Products>("products");

  //  useEffect(() => {
  //     (async () => {
  //     //   const res = await fetch("https://fakestoreapi.com/products");
  //     //   const products: Awaited<Products> = await res.json();
  //     //   setProducts(products);
  //     // })();
  //   }, []);
  return (
    <Suspense fallback={Loading()}>
      <main className={styles.main}>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <p>
              {product.title} - {product.price}€
            </p>
          </Link>
        ))}
      </main>
    </Suspense>
  );
};

export default ProductsPage;
