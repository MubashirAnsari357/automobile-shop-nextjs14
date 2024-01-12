import { products } from "@/app/MockData";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/Data/data";

export default async function Products() {
  const productsData = await getProducts();
  console.log(productsData)
  return (
    <div className="flex justify-center items-center flex-wrap gap-8 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imgs={product.imgs}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
