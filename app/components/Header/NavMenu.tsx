// components/NavMenu.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface MenuItem {
  ID: number;
  title: string;
  url: string;
  children?: MenuItem[];
}

interface NavMenuProps {
  items: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleClick = (event: MouseEvent) => {
      // Close if click is outside the menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [mobileOpen]);

  // Recursive rendering function
  const renderMenu = (menuItems: MenuItem[], isMobile = false) => (
    <ul
      className={`${
        isMobile
          ? "flex flex-col space-y-2"
          : "flex items-center gap-8 text-sm font-medium text-gray-800"
      }`}
    >
      {menuItems.map((item) => (
        <li key={item.ID} className="relative group">
          <Link
            href={item.url}
            className={`hover:text-red-500 transition-colors ${
              isMobile ? "block py-2" : ""
            }`}
            onClick={() => isMobile && setMobileOpen(false)} // Close on link click (mobile)
          >
            {item.title}
          </Link>
          {item.children && item.children.length > 0 && (
            <div
              className={`${
                isMobile
                  ? "header-dropdown"
                  : "absolute left-0 mt-2 hidden min-w-[180px] flex-col header-dropdown rounded-md bg-white shadow-lg group-hover:flex"
              }`}
            >
              {renderMenu(item.children, isMobile)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav>
      {/* Desktop Menu */}
      <div className="hidden md:block">{renderMenu(items)}</div>

      {/* Mobile Menu */}
      <div className="md:hidden" ref={menuRef}>
        {/* Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col space-y-1 p-2"
          aria-label="Toggle Menu"
        >
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
        </button>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <div className="rounded-md bg-white p-4 shadow-lg mobile-menu">
            {renderMenu(items, true)}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
