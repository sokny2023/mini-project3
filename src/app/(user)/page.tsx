import Image from "next/image";
import HeroSection from "../components/home/heroSection";
import { ProductType } from "../components/types/productType";
import Link from "next/link";
import CardProductComponent from "../components/card/CardProdct";
import { Suspense } from "react";
import Loading from "./loading";

async function fetchProduct() {
  const product = await fetch(
    "https://store.istad.co/api/products/?page=1&page_size=12",
    {
      cache: "no-store",
    }
  );
  const res = await product.json();
  console.log(res);
  return res.results;
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <>
      <HeroSection></HeroSection>

      <h1 className="mt-6 text-center text-3xl text-blue-500 font-medium">Product List</h1>
      <div className="w-[90%] py-2 mx-auto mt-12 z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-8">
        <Suspense fallback={<Loading/>}>
          {product?.map((pro: ProductType) => (
              <Link href={`/products/${pro.id}`} key={pro.id}>
                <CardProductComponent
                  image={pro.image}
                  desc={pro.desc}
                  name={pro.name}
                  key={pro.id}
                  price={pro.price}
                />
              </Link>
            ))}
        </Suspense>
      </div>

    </>
  );
}
