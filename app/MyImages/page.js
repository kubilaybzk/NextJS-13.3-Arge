import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "$15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "$15",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

export const GetData = async () => {
  let request = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });
  return await request.json();
};

const delay = async (ms) => {
  return new Promise((x) => setTimeout(x, ms));
};

export default async function Example() {
  let products = await GetData();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group  p-4 border-r border-b border-gray-200 sm:p-6 flex flex-col "
            >
              <div className="rounded-lg flex-1 relative overflow-hidden h-48 bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <Image
                  src={product.image}
                  alt={product.image}
                  className="w-full h-full object-center object-contain"
                  width={250}
                  height={450}
                  quality={100}
                  blurDataURL="/dribbble.webp"
                  placeholder="blur"
                />
              </div>

              <div className=" flex-1 flex flex-col justify-center text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.price} out of 5 stars</p>
                  <div className="flex items-center"></div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
