import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TheFooter = () => {
  return (
    <footer className="bg-green mt-32 py-24 pb-14">
      <div className="container">
        <div className="flex justify-between">
          <div className="max-w-[450px]">
            <h6 className="text-xl text-white font-medium mb-4">
              Contact With US
            </h6>

            <h2 className="font-syne text-white font-bold text-5xl">
              Feel free to ask Something we are here
            </h2>

            <p className="text-white text-xl opacity-70 my-10">
              We have a passion to deliver furniture for all. Bringing you
              quality furniture at the best value, so you’ll always be able to
              find something you adore at the right price.
            </p>
          </div>

          <form className="w-[620px] mt-12">
            <div className="flex">
              <input
                className="w-full mr-4 rounded-lg outline-none p-4 placeholder-white bg-mediumGreen text-white"
                placeholder="Your name"
                type="text"
              />

              <input
                className="w-full rounded-lg outline-none p-4 placeholder-white bg-mediumGreen text-white"
                placeholder="Email Address"
                type="email"
              />
            </div>

            <textarea
              placeholder="Question"
              className="w-full mt-4 rounded-lg outline-none p-4 placeholder-white bg-mediumGreen text-white"
              rows={8}
            ></textarea>
          </form>
        </div>

        <div className="flex justify-between mt-32">
          <ul>
            {navLinks.map((link, id) => (
              <Link
                key={id}
                className="text-lg text-white font-medium opacity-70 mr-10"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <div className="flex">
            <Image
              className="mr-6 cursor-pointer"
              src="/social/Instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
            <Image
              className="mr-6 cursor-pointer"
              src="/social/Facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
            <Image
              className="mr-6 cursor-pointer"
              src="/social/Linkedin.svg"
              alt="Linkedin"
              width={30}
              height={30}
            />
            <Image
              className="cursor-pointer"
              src="/social/Twitter.svg"
              alt="Twitter"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
