import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type Props = {
  label: JSX.Element | string;
  desc: string;
  link?: string;
  subtitle?: string;
};

const Title = ({ label, desc, link, subtitle }: Props) => {
  return (
    <div className="max-w-[400px]">
      {subtitle && <h6 className="text-xl text-dark font-medium mb-4">{subtitle}</h6>}
      <h2 className="font-syne text-dark font-bold text-5xl">{label}</h2>
      <p className="text-dark text-xl opacity-70 my-10">{desc}</p>

      {link && (
        <Link
          href={link}
          className="text-mediumGreen text-xl font-medium flex items-center"
        >
          Read More
          <FontAwesomeIcon
            className="ml-4"
            width={20}
            icon={faArrowRightLong}
          />
        </Link>
      )}
    </div>
  );
};

export default Title;
