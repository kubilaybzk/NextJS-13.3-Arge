import Item from "@/Components/Item";
import React from "react";

export const metadata = {
  title: "Kubilay bozak",
};

export const GetData = async () => {
  let request = await fetch("https://fakestoreapi.com/products");
  return await request.json();
};
const delay = async (ms) => {
  return new Promise((x) => setTimeout(x, ms));
};
export default async function Selam() {
  await delay(4000);
  let products = await GetData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
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
