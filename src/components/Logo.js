import * as React from "react";

const Logo = ({ type, href, className }) => {
  let src = "/img/logo_de_moderne_relatiecoach_red.png";
  switch (type) {
    case "white":
      src = "/img/logo_de_moderne_relatiecoach_white.png";
      break;

    default:
      break;
  }

  const renderLogo = () => {
    return (
      <img src={src} alt="De moderne relatiecoach logo" className={className} />
    );
  };

  if (href) {
    return <a href={href}>{renderLogo()}</a>;
  }

  return renderLogo();
};

export default Logo;
