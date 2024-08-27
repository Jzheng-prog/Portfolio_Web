import Languages from "@/components/Languages";
import { link } from "fs";
import React from "react";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Expanding my web-dev knowledge and skills.",
    description: "Currently",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Food Recipe App",
    des: "Search an ingriedient, find the recipe!",
    img: "/foodRecipe.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/Jzheng-prog/FoodRecipeAPP",
  },
  {
    id: 2,
    title: "OnlineShop",
    des: "This OnlineShop website, built with vanilla JavaScript, CSS, HTML, Node.js, MongoDB, and Express.js.",
    img: "/onlineShop.png",
    iconLists: [],
    link: "https://github.com/Jzheng-prog/onlineShop",
  },
  {
    id: 3,
    title: "Concept AI Service Page",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/brainwave.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Jzheng-prog/brainwave",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Jzheng-prog/apple_website_clone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Teacher Assistence for a python class at UMD.(2024)",
    desc: "Assisting professors in teaching class Material.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Analyst",
    desc: "Work with client to create data visualization and analyst for the Metamorphosis Community.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Part-Time Barista At Moge Tee 2022-2023",
    desc: "Customer Service.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/bubble-tea.svg",
  },
  {
    id: 4,
    title: "Many other None-Tech Part-Time Jobs",
    desc: " ",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Jzheng-prog",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/j.zheng_/?next=%2F",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/john-zheng-1b1837266/",
  },
  {
    id: 4,
    img: "/monochrome_large.png",
    link: "https://open.spotify.com/user/oniyy4qtz0fd6hv123175hh03",
  },
];

export const workingKnowledge = [
  "Blender 3D Modeling",
  "MySQL",
  "GitHub",
  "Tableau",
  "Postman/API",
  "VSCODE",
  "Python/Java",
  "UI/Figma",
  "Stripe Payment",
  "Sentry",
  "Pandas",
  "Data Analysis and Visualization",
  "Express",
  "SEO",
  "Cybersecurity",
  "Procreate",
];
