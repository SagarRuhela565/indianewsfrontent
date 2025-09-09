import React from "react";
import Link from "next/link";

export interface MenuItem {
  id: number;
  title: string;
  url: string;
}

interface NavMenuProps {
  items: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  return (
    <ul className="flex space-x-4">
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.url} className="text-text-normal hover:text-text-hover">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;