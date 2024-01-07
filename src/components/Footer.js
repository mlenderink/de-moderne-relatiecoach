import * as React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-sunset">
      <div className="container flex py-8 text-white">
        <div className="flex-1 flex">
          <Logo type="white" className="w-48 h-48" />
          <div className="flex flex-col justify-center border-l-2 pl-8">
            <div>De Moderne Relatiecoach</div>
            <div>Rianne Driezes</div>
            <div>info@demodernerelatiecoach.nl</div>
            <div>0611927745</div>
            <div>KvK: 85676497</div>
          </div>
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Footer;
