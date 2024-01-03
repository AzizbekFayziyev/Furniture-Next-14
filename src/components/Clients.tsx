"use client";

import { clientReviews } from "@/constants";
import { faArrowRightLong, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// swiper modules
import { Navigation } from "swiper/modules";
import Link from "next/link";

const Clients = () => {
  return (
    <div className="container mt-32">
      <h2 className="font-syne font-bold text-5xl text-center">
        Our Clients Reviews
      </h2>

      <div className="my-20">
        <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
        >
          {clientReviews.map((e, id) => (
            <SwiperSlide key={id}>
              <div className="max-w-[350px] block mx-auto">
                <Image
                  className="rounded-t-[36px] w-auto h-auto"
                  src={e.img}
                  alt="Our creature"
                  width={350}
                  height={280}
                />

                <div className="bg-dark h-[270px] rounded-b-[36px] relative">
                  <div className="bg-white w-[350px] rounded-2xl p-4 absolute left-[60px] top-[60px] shadow-lg">
                    <Image
                      className="absolute left-[10px] top-[-40px] w-auto h-auto"
                      src={e.avatar}
                      alt="client avatar"
                      width={80}
                      height={80}
                    />

                    <div className="flex justify-between mt-12 mb-4">
                      <h6 className="text-dark font-medium text-xl">
                        Andres Iniesta
                      </h6>

                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((e) => (
                          <FontAwesomeIcon
                            className="text-yellow-500 mr-1"
                            key={e}
                            width={15}
                            icon={faStar}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-lg text-dark">
                      Amazing work team! , I’m very happy to collab with you
                      guys.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="#" className="text-mediumGreen text-xl items-center font-medium flex justify-center">
        Read More
        <FontAwesomeIcon className="ml-4" width={20} icon={faArrowRightLong} />
      </Link>
    </div>
  );
};

export default Clients;
