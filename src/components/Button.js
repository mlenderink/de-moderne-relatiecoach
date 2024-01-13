import * as React from "react";

const Button = ({ style, href, children }) => {
  if (style === "gray") {
    return (
      <a
        href={href}
        className="inline-block bg-gray hover:bg-gray-100 text-black py-2 px-4 border border-gray"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="inline-block bg-white hover:bg-gray-100 text-red py-2 px-4 border border-red"
    >
      {children}
    </a>
  );
};

export default Button;
