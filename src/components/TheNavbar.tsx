import { navLinks } from "@/constants";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const TheNavbar = () => {
  return (
    <Navbar className="container justify-between absolute bg-transparent" isBlurred={false}>
      <NavbarBrand>
        <h5 className="font-syne text-4xl text-white ">Furniture</h5>
      </NavbarBrand>

      <NavbarContent className="gap-12" justify="center">
        {navLinks.map((link, id) => (
          <NavbarItem key={id}>
            <Link className="text-lg text-white font-medium" href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default TheNavbar;
