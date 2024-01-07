import * as React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="h-20">
      <div className="w-full h-20 fixed flex justify-center bg-champagne">
        <header className="container flex h-20">
          <div className="flex-none">
            <Logo className="w-24 h-20" href={"/"} />
          </div>
          <div className="flex-1 flex justify-center items-center uppercase">
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
        </header>
      </div>
    </div>
  );
};

export default Header;
