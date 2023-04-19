import Item from "@/Components/Item";
import React from "react";

export const metadata = {
  title: "Revalidate",
};

export const GetData1 = async () => {
  let request = await fetch("https://fakestoreapi.com/products/1", {
    next: { revalidate: 12 },
    //Bir sonraki yüklemede 12 saniye sonra sayfada tekrar bir fetch işlemi yap.
  });
  return await request.json();
};

export const GetData2 = async () => {
  let request = await fetch("https://fakestoreapi.com/products/2", {
    next: { revalidate: 12 },
    //Bir sonraki yüklemede 12 saniye sonra sayfada tekrar bir fetch işlemi yap.
  });
  return await request.json();
};
export const GetData3 = async () => {
  let request = await fetch("https://fakestoreapi.com/products/3", {
    next: { revalidate: 12 },
    //Bir sonraki yüklemede 12 saniye sonra sayfada tekrar bir fetch işlemi yap.
  });
  return await request.json();
};

export default async function NoForce_Cache() {
  /*
  let product1 = await GetData1();
  let product2 = await GetData2();
  let product3 = await GetData3();

  Kodu böyle çalıştırmak çok gereksiz ve sistemi yoran bir şey çünkü her loading işlemi bir önceki await 'i bekliyor.
  Bunu şöyle çözebiliriz,

  let product1 =  GetData1();
  let product2 =  GetData2();
  let product3 =  GetData3();

  awit fonksiyonlarını kaldırmak ve paralel olarak fetch etmesini sağlamk.
  */

  let productData1 = GetData1();
  let productData2 = GetData2();
  let productData3 = GetData3();

  const [product1, product2, product3] = await Promise.all([
    productData1,
    productData2,
    productData3,
  ]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Revalidate
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Item key={product1.id} product={product1} />
          <Item key={product2.id} product={product2} />
          <Item key={product3.id} product={product3} />
        </div>
      </div>
    </div>
  );
}
