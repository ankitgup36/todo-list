import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" justify-between flex items-center min-w-full">
      <h1>Your Tasks</h1>
      <Link href={"/?form=add"}>
        <Button>Add New Todo</Button>
      </Link>
    </div>
  );
};

export default Header;
