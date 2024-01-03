import Image from "next/image";
import React from "react";
import Title from "./Title";

const Creations = () => {
  return (
    <div className="container mt-32">
      <div className="flex justify-between">
        <div>
          <Title
            label="Our Creations"
            desc="This is an example of our creations, we are very happy to be able
              to make something like this for you too"
            link="#"
          />

          <div className="max-w-[320px] mt-12">
            <Image
              src="/creations/1.png"
              alt="creations"
              width={280}
              height={280}
            />
            <h6 className="font-medium text-xl text-dark mt-4 mb-2">
              Exploration Concept
            </h6>
            <p className="text-lg opacity-70 text-dark">
              exploration concept is just looking for a new layout to arrange
              furniture
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/creations/2.png"
            alt="creations 2"
            width={620}
            height={500}
          />

          <div className="max-w-[350px] ml-32 mt-4 flex">
            <Image
              className="mr-4 mb-28"
              src="/creations/arrow.svg"
              alt="arrow"
              width={71}
              height={74}
            />
            <div>
              <h6 className="text-syne text-3xl my-4 text-dark font-semibold">
                Interior exhibition <br /> in Italy
              </h6>
              <p className="text-dark opacity-70 text-lg">
                We take part in several exhibitions around the world one of
                which is in italy
              </p>
            </div>
          </div>

          <div className="absolute w-[225px] h-[300px] rounded-[36px] bg-mediumGreen left-[-110px] top-[100px] -z-10"></div>

          <Image
            className="absolute bottom-[50px] left-[-250px]"
            width={300}
            height={300}
            src="/creations/3.png"
            alt="creations 3"
          />
        </div>
      </div>

      <div className="mt-48 flex items-center justify-between">
        <div className="flex items-center mr-4 relative">
          <div className="absolute top-[-80px] -z-10 left-0 w-[240px] h-[400px] rounded-r-[36px] bg-mediumGreen"></div>
          <Image
            src="/creations/about1.png"
            alt="about image"
            width={480}
            height={580}
          />
          <Image
            className="ml-8"
            src="/creations/about2.png"
            alt="about image"
            width={280}
            height={300}
          />
        </div>

        <Title
          subtitle="About us"
          label="Shinning a light 
            on furniture"
          desc="We have a passion to deliver furniture for all. Bringing you quality furniture at the best value, so you’ll always be able to find something you adore at the right price."
          link="#"
        />
      </div>
    </div>
  );
};

export default Creations;
