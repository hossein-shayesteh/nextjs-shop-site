import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center mx-auto my-40 text-center text-5xl flex-col text-gray-800">
      <h1>home page</h1>
      <Link href={"/auth/register"} className={" mt-5 text-base text-gray-800"}>
        register
      </Link>
    </div>
  );
};

export default Home;
