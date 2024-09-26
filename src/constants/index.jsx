import { Hospital } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquareDiff } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";

export const navItems = [
    { label: "Hospitals", href: "/hospitals" },
    { label: "About Us", href: "/About Us" },
    { label: "Features", href: "/" },
    { label: "Testimonials", href: "/" }
  ];


  export const testimonials = [
    {
      user: "Jitendra Singh",
      image: user1,
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Mamta Pandey",
      image: user2,
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "Harsh Narula",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Aman Jha",
      image: user4,
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "Mayank Yadav",
      image: user5,
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Pinki Srivastav",
      image: user6,
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];
  


  export const features = [
    {
      icon: <Hospital />,
      text: "Search",
      description:
        "Search hospitals by location, specialty, or name.",
    },
    {
      icon: <Star />,
      text: "Comparision",
      description:
        "Compare ratings, reviews, and services.",
    },
    {
      icon: <MessageSquareDiff />,
      text: "Reviews",
      description:
        "Read authentic patient reviews.",
    },
    {
      icon: <ShieldCheck />,
      text: "Quality Check",
      description:
        "Get insights into hospital quality and care.",
    },
    {
        icon: <ChartNoAxesCombined />,
        text: "Analysis",
        description:
          "Make informed decisions with our expert analysis.",
      }
  ];
  