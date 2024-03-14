import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";
import { Product } from "@/app/lib/types";
import styles from "../../products/[id]/page.module.css";
import Image from "next/image";

const ProductDetails = async ({ id }: { id: string }) => {
  const product = await fetchFakeStore<Product>(`products/${id}`);
  return (
    <>
      <main className={styles.main}>
        {product && (
          <div className={styles.card}>
            <Image
              src={product.image}
              alt={product.description}
              width={300}
              height={300}
            />
            <h1>{product.title}</h1>
            <p style={{ textAlign: "justify", overflow: "auto" }}>
              {product?.description}
            </p>
          </div>
        )}
      </main>
    </>
  );
};
export default ProductDetails;
