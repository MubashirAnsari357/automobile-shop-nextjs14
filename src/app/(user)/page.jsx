import Hero from "@/components/Hero";

import ProductSwiper from "@/components/ProductSwiper";
import { getProducts, getWebData } from "@/lib/Data/data";

const Home = async () => {
  const webData = await getWebData();
  return (
    <div className="min-h-screen">
      <Hero
        image={webData?.homepage?.photo?.url}
        overlayText={webData?.homepage?.overlayText}
      />
      <div className="p-4">
        <ProductSwiper products={JSON.parse(JSON.stringify(webData?.homepage?.products))} />
      </div>
    </div>
  );
};

export default Home;
