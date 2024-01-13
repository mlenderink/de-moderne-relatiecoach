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
                <a className="text-red hover:text-sunset" href="#">
                  Moderne relatie?!
                </a>
              </li>
              <li className="mr-6">
                <a className="text-red hover:text-sunset" href="#">
                  Aanbod
                </a>
              </li>
              <li className="mr-6">
                <a className="text-red hover:text-sunset" href="#">
                  Blogs
                </a>
              </li>
              <li className="mr-6">
                <a className="text-red hover:text-sunset" href="#">
                  Mijn verhaal
                </a>
              </li>
              <li className="mr-6">
                <a className="text-red hover:text-sunset" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-none uppercase md:hidden">
            <Menu right>
              <a id="home" className="text-red hover:text-sunset" href="/">
                Moderne relatie?!
              </a>
              <a
                id="about"
                className="text-red hover:text-sunset"
                href="/about"
              >
                Aanbod
              </a>
              <a
                id="contact"
                className="text-red hover:text-sunset"
                href="/contact"
              >
                Blogs
              </a>
              <a
                id="contact"
                className="text-red hover:text-sunset"
                href="/contact"
              >
                Mijn verhaal
              </a>
              <a
                id="contact"
                className="text-red hover:text-sunset"
                href="/contact"
              >
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
