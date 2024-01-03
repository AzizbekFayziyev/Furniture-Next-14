import { bestProducts } from "@/constants";
import { faArrowRightLong, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestSelling = () => {
  return (
    <div className="container mt-32 text-center">
      <h2 className="font-syne font-bold text-5xl">Best Selling Product</h2>

      <div className="flex items-center justify-between flex-wrap mt-14">
        {bestProducts.map((e, id) => (
          <Card
            isPressable
            shadow="none"
            className="grid place-content-center max-w-[280px]"
            key={id}
          >
            <Image src={e.img} alt={e.title} width={280} height={280} />

            <CardBody>
              <h5 className="font-syne font-medium text-2xl my-4 text-dark">
                {e.title}
              </h5>

              <div className="flex items-center justify-around">
                <p className="font-medium text-3xl text-dark">${e.price}</p>

                <div className="flex">
                  {[1, 2, 3, 4, 5].map((e) => (
                    <FontAwesomeIcon
                      className="text-yellow-500 mr-1"
                      key={e}
                      width={20}
                      icon={faStar}
                    />
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <Link
        href="#"
        className="text-mediumGreen text-xl font-medium flex justify-center my-14 items-center"
      >
        More Products
        <FontAwesomeIcon className="ml-4" width={20} icon={faArrowRightLong} />
      </Link>
    </div>
  );
};

export default BestSelling;
