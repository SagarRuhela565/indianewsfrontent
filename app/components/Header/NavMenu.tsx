// components/NavMenu.tsx
import Link from "next/link";
import React from "react";

export interface MenuItem {
  ID: number;
  title: string;
  url: string;
  children?: MenuItem[];
}

// Props version
interface NavMenuProps {
  items: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  // Recursive rendering function
  const renderMenu = (menuItems: MenuItem[]) => (
    <ul className="flex items-center gap-8 text-sm font-medium text-gray-800">
      {menuItems.map((item) => (
        <li key={item.ID} className="relative group">
          <Link href={item.url} className="hover:text-blue-600 transition-colors">
            {item.title}
          </Link>

          {item.children && item.children.length > 0 && (
            <div className="absolute header-dropdown left-0 mt-2 hidden min-w-[180px] flex-col rounded-md bg-white shadow-lg group-hover:flex">
              {renderMenu(item.children)} {/* Recursion */}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return <>{renderMenu(items)}</>;
};

export default NavMenu;
