import * as React from "react";

const Button = ({ href, children }) => {
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
