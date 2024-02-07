import PhotosSwiper from "@/components/PhotosSwiper";
import { getProductyById } from "@/lib/Data/data";
import { formatDateToIndian } from "@/lib/utils";

const Page = async ({ params: { slug } }) => {
  const product = await getProductyById(slug);
  if (!product) {
    return null;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:col-start-1 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-square rounded-lg">
          <PhotosSwiper photos={JSON.parse(JSON.stringify(product.photos))} />
        </div>
      </div>
      <div className="lg:max-w-lg lg:self-end mt-4">
        <div className="lg:ml-8 md:ml-6 lg:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {product?.category?.name}
            </p>
            <h1
              className="lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2"
            >
              {product?.name}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Modal</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {product?.subcategory?.name}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">
              Manufacturing Date
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {formatDateToIndian(product?.manufactureDate)}
              </p>
            </div>
          </div>
          <button className="primary-btn w-full my-10">Send Inquiry</button>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600">
              {product?.description}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              {/* Product Code: 8BN321AF2IF0NYA */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
