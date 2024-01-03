// types
type navLink = {
  label: string;
  href: string;
};

type advantage = {
  icon: string;
  title: string;
  primary: boolean;
};

type product = {
  img: string;
  title: string;
  price: number;
};

type clientReview = {
  img: string;
  avatar: string;
  desc: string;
};

// constants
export const navLinks: navLink[] = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Furniture",
    href: "#furniture",
  },
  {
    label: "Accessories",
    href: "#accessories",
  },
  {
    label: "About us",
    href: "#about",
  },
];

export const advantages: advantage[] = [
  {
    icon: "/whyUs/1.png",
    title: "FREE Delivery",
    primary: true,
  },
  {
    icon: "/whyUs/2.png",
    title: "FREE Installation",
    primary: false,
  },
  {
    icon: "/whyUs/3.png",
    title: "Safe & Reliable",
    primary: false,
  },
  {
    icon: "/whyUs/4.png",
    title: "Guaranteed",
    primary: true,
  },
];

export const bestProducts: product[] = [
  {
    title: "LED Work Lamp",
    img: "/bestSelling/1.png",
    price: 40,
  },
  {
    title: "FEJKA Potted Plant",
    img: "/bestSelling/2.png",
    price: 24,
  },
  {
    title: "FEJKA Potted Plant",
    img: "/bestSelling/3.png",
    price: 80,
  },
  {
    title: "MICKE Desk, Black",
    img: "/bestSelling/4.png",
    price: 120,
  },
];

export const clientReviews: clientReview[] = [
  {
    img: "/clients/img1.png",
    avatar: "/clients/avatar1.svg",
    desc: "Amazing work team! , I’m very happy to collab with you guys.",
  },
  {
    img: "/clients/img2.png",
    avatar: "/clients/avatar2.svg",
    desc: "Cool!, I hope we can collaboration again to create amazing room.",
  },
  {
    img: "/clients/img3.png",
    avatar: "/clients/avatar3.svg",
    desc: "Cute.. the result is perfect, looks elegant & comfortable nice...",
  },
  {
    img: "/clients/img1.png",
    avatar: "/clients/avatar1.svg",
    desc: "Amazing work team! , I’m very happy to collab with you guys.",
  },
  {
    img: "/clients/img2.png",
    avatar: "/clients/avatar2.svg",
    desc: "Cool!, I hope we can collaboration again to create amazing room.",
  },
  {
    img: "/clients/img3.png",
    avatar: "/clients/avatar3.svg",
    desc: "Cute.. the result is perfect, looks elegant & comfortable nice...",
  },
];
