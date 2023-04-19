import Item from "@/Components/Item";
import React from "react";

export default async function Loading() {
  let products = [
    {
      id: 1,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 3,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 4,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 5,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 6,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 7,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 8,
      title: "Product 1 ",
      price: 1000,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Kubilay Bozak",
      image:
        "https://cdn.dribbble.com/users/28726/screenshots/1192614/media/d0107b21f00ea17fb48fabf241dac868.gif",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Item key={product.idc} product={product} loading />
          ))}
        </div>
      </div>
    </div>
  );
}
