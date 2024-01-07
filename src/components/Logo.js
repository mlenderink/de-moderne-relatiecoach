import * as React from "react";

const Logo = ({ type, className }) => {
  let src = "/img/logo_de_moderne_relatiecoach_red.png";
  switch (type) {
    case "white":
      src = "/img/logo_de_moderne_relatiecoach_white.png";
      break;

    default:
      break;
  }

  return (
    <img src={src} alt="De moderne relatiecoach logo" className={className} />
  );
};

export default Logo;
