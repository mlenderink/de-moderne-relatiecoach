import * as React from "react";
import Logo from "./Logo";
import { bubble as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <div className="h-20">
      <div className="w-full h-20 fixed flex justify-center bg-champagne">
        <header className="container flex h-20">
          <div className="flex-none">
            <Logo className="w-24 h-20" href={"/"} />
          </div>
          <div className="flex-1 hidden md:flex justify-center items-center uppercase">
            <ul className="flex">
              <li className="mr-6">
                <a
                  className="text-red hover:text-sunset"
                  href="/moderne-relatie"
                >
                  Moderne relatie?!
                </a>
              </li>
              <li className="mr-6">
                <a className="text-red hover:text-sunset" href="/aanbod">
                  Aanbod
                </a>
              </li>
              <li className="mr-6">
                <a className="text-red hover:text-sunset" href="/mijn-verhaal">
                  Mijn verhaal
                </a>
              </li>
              <li className="mr-6">
                <a className="text-red hover:text-sunset" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-none uppercase md:hidden">
            <Menu right>
              <a className="text-red hover:text-sunset" href="moderne-relatie">
                Moderne relatie?!
              </a>
              <a className="text-red hover:text-sunset" href="/aanbod">
                Aanbod
              </a>
              <a className="text-red hover:text-sunset" href="/mijn-verhaal">
                Mijn verhaal
              </a>
              <a className="text-red hover:text-sunset" href="/contact">
                Contact
              </a>
            </Menu>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
