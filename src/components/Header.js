import * as React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="w-full flex justify-center bg-champagne">
      <div className="container flex h-24">
        <div className="flex-none">
          <Logo className="w-24 h-24" />
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
      </div>
    </div>
  );
};

export default Header;
