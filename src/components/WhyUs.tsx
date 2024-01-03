import { advantages } from "@/constants";
import Image from "next/image";
import React from "react";
import Title from "./Title";

const WhyUs = () => {
  return (
    <div className="container">
      <div className="flex justify-between">
        <Title
          label={
            <>
              Why <br /> choosing us
            </>
          }
          desc="Having a home you love means having furnishing that you’re proud of.
        We are proud to bring you trendy furniture for every room in the
        house, with the added bonus."
          link="#"
        />

        <div className="grid grid-cols-2 gap-10 relative">
          {advantages.map((e, id) => (
            <div
              className={`advantage rounded-[36px] p-8 max-h-[300px] ${
                e.primary ? "bg-mediumGreen" : "bg-dark"
              }`}
              key={id}
            >
              <Image
                className="block mx-auto"
                src={e.icon}
                alt={e.title}
                width={180}
                height={180}
              />
              <h5 className="font-poppins font-medium text-2xl text-white text-center mt-6">
                {e.title}
              </h5>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-20">
        <div>
          <div className="relative w-[350px] bg-dark text-white rounded-3xl -rotate-[8deg] flex items-center px-8 py-10 ml-20">
            <Image
              className="absolute top-[-60px] left-[-60px]"
              src="/rooms/1.png"
              alt="living room"
              width={150}
              height={150}
            />
            <h6 className="ml-20 font-poppins font-medium text-3xl">
              Living Room
            </h6>
          </div>

          <div className="flex items-center mt-20 relative">
            <div className="bg-mediumGreen rounded-3xl -rotate-[8deg] px-8 py-14 ml-12 w-[300px] absolute left-[-200px] top-0"></div>

            <div className="relative w-[350px] bg-mediumGreen text-white rounded-3xl -rotate-[8deg] flex items-center px-8 py-10 ml-64">
              <Image
                className="absolute top-[-60px] left-[-60px]"
                src="/rooms/2.png"
                alt="living room"
                width={150}
                height={150}
              />
              <h6 className="ml-20 font-poppins font-medium text-3xl">
                Dining Room
              </h6>
            </div>
          </div>

          <div className="relative w-[350px] mt-20 bg-dark text-white rounded-3xl -rotate-6 flex items-center px-8 py-10 ml-12">
            <Image
              className="absolute top-[-60px] left-[-60px]"
              src="/rooms/3.png"
              alt="living room"
              width={150}
              height={150}
            />
            <h6 className="ml-20 font-poppins font-medium text-3xl">
              Office Room
            </h6>
          </div>
        </div>

        <Title
          label="Shop by room"
          desc="Having a home you love means having furnishing that you’re proud of.
            We are proud to bring you trendy furniture for every room in the
            house, with the added bonus."
          link="#"
        />

      </div>
    </div>
  );
};

export default WhyUs;
