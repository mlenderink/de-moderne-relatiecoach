import * as React from "react";

const Page = ({ children }) => {
  return (
    <div className="w-full flex-grow flex justify-center">
      <div className="container flex flex-col items-center">{children}</div>
    </div>
  );
};

export default Page;
