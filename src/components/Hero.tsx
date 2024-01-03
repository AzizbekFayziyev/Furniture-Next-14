import { faArrowRightLong, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container flex justify-evenly pt-36">
        <div className="max-w-[284px]">
          <p className="text-lg text-white mb-4 opacity-70">
            Having a home you love means having furnishing that you’re proud of.
            We are proud to bring you trendy furniture for every room in the
            house, with the added bonus.
          </p>

          <Link href="#" className="text-lightGreen text-xl font-medium">
            Read More{" "}
            <FontAwesomeIcon
              className="ml-4"
              width={20}
              icon={faArrowRightLong}
            />
          </Link>
        </div>

        <div className="max-w-[650px]">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faSearch}
              width={20}
              className="mr-4 text-white mb-4"
            />
            <Input
              label="search"
              variant="underlined"
              color="primary"
              className="max-w-[350px] mb-12 text-white"
            />
          </div>

          <h1 className="font-syne font-bold text-6xl text-center text-white leading-snug">
            Make a room comfortable & elegant
          </h1>
        </div>

        <div>
          <h3 className="text-syne font-bold text-3xl text-white">Featured</h3>

          <div className="shadow shadow-white rounded-3xl p-4 w-[195px] backdrop-blur-sm mt-16">
            <Image
              className="-ml-12 -mt-12"
              src="/featured/1.png"
              alt="black sofa"
              width={149}
              height={144}
            />

            <h6 className="text-xl font-medium text-white mt-4">Black Sofa</h6>
            <p className="text-2xl font-medium text-white mt-2">$250</p>
          </div>

          <div className="shadow shadow-white rounded-3xl p-4 w-[195px] backdrop-blur-sm mt-16">
            <Image
              className="-ml-12 -mt-12"
              src="/featured/2.png"
              alt="Black Chair"
              width={149}
              height={144}
            />

            <h6 className="text-xl font-medium text-white mt-4">Black Sofa</h6>
            <p className="text-2xl font-medium text-white mt-2">$100</p>
          </div>

          <Button className="bg-dark shadow shadow-[#ffffff75] text-white mt-12 px-8 py-8 font-semibold text-2xl" size="lg" variant="solid">
            More Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
