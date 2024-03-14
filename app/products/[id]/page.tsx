import { PageProps } from "@/app/lib/types";
import ProductDetails from "@/app/ui/products/ProductDetails";

const ProductPage = ({ params: { id } }: PageProps) => {
  return <ProductDetails id={id} />;
};

export default ProductPage;
