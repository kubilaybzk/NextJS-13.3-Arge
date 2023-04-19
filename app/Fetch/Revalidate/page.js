import Item from "@/Components/Item";
import React from "react";

export const metadata = {
  title: "Revalidate",
};

export const GetData = async () => {
  let request = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 12 },
    //Bir sonraki yüklemede 12 saniye sonra sayfada tekrar bir fetch işlemi yap.
  });
  return await request.json();
};

export default async function NoForce_Cache() {
  let products = await GetData();
  console.log("Revalidate", products);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Revalidate
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
