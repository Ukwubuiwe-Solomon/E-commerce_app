import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import { promises } from "dns";
import Image from "next/image";
import { title } from "process";
import { string } from "zod";

//TEMPORARY

const Product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({params}:{params:{id:string}})=>{
  // TEMPORARY
  return{
    title: Product.name,
    describe: Product.description,
  }
}

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedSize = size || Product.sizes[0];
  const selectedColor = color || Product.colors[0];
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={Product.images[selectedColor]}
          alt={Product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{Product.name}</h1>
        <p className="text-gray-500">{Product.description}</p>
        <h2>{Product.price.toFixed(2)}</h2>
             
            <ProductInteraction product={Product} selectedSize={selectedSize} selectedColor={selectedColor}/>

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={52}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={52}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={52}
            height={25}
            className="rounded-md"
          />
        </div>
        
          
          <p className="text-gray-500 text-xs">
            By clicking Pay Now, you agree to our
            <span className="underline hover:text-black">
              Terms & Conditions
            </span>
            and {" "}
            <span className="underline hover:text-black">Privacy Policy</span>.
            You authorize us to charge your selected payment method for the {" "}
            total amount shown. All sales are subject to our return and{" "}
            <span className="underline hover:text-black">Refund Policies</span>.
          </p>
        
      </div>
    </div>
  );
};

export default ProductPage;
