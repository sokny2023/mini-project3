"use client";

import { Button, Navbar, NavbarLink } from "flowbite-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";
import { FaCartPlus } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
// import { useAppSelector } from "@/redux/hooks";
//import { selectAvatar, selectBio } from "@/redux/features/userProfile/userProfileSlice";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export function NavbarComponent() {
  // const count = useAppSelector((state) => state.counter.value);
  // const avatar = useAppSelector(selectAvatar);
  // const bio = useAppSelector(selectBio);
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <Navbar fluid rounded className="py-4">
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="text-blue-600 text-[30px] mr-4">
          <FaOpencart />
        </span>
        <span className=" self-center whitespace-nowrap text-2xl font-semibold text-blue-500">
          Blue Ecommerce
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <a href="#" className="mt-2 mr-4 text-[22px] text-red-600">
          <FaCartPlus />
        </a>
        <a href="/login" className="text-lg text-gray-100 py-[2px] px-3
        bg-blue-500 hover:bg-blue-500 rounded-sm">Login</a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {MenuList.map((item, index) => (
            <NavbarLink
                key={index}
                as={Link}
                href={item.path}
                active={item.path === pathname}
                style={{
                    fontSize: "1.25rem",
                    color: item.path === pathname ? "#3b82f6" :
                            hoverIndex === index ? "darkblue" : "#4b5563", 
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
            >
                {item.name}
            </NavbarLink>
        ))}
    </Navbar.Collapse>
    </Navbar>
  );
}
