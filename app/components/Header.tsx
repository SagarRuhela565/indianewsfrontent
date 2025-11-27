import React from "react";
import { CustomFetch } from "../lib/customApi";
import NavMenu, { MenuItem } from "./Header/NavMenu";
import CustomLogo, { logoItem } from "../components/Header/CustomLogo";

const Header = async () => {
  // Server-side fetch
  const menu: MenuItem[] = await CustomFetch<MenuItem[]>("menu/id/3");
  const logo: logoItem = await CustomFetch<logoItem>("logo");


  return (
    <header className="border-edge py-3">
      <div className="container mx-auto flex items-center justify-between px-2">
        {/* Logo */}
        {logo && <CustomLogo logo={logo} />}

        {/* Navigation */}
        {menu && menu.length > 0 && <nav className="flex items-center gap-8 text-sm font-medium text-text-normal">
          <NavMenu items={menu} />
        </nav>}
      </div>
    </header>
  );
};

export default Header;
