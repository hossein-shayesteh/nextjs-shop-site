"use client";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/UI/Loading";
import { useRouter } from "next/navigation";

import { removeLoginToken } from "@/utils/auth";

const Panel = () => {
  const { user, error, isLoading } = useAuth();
  console.log(user);
  const router = useRouter();

  const handleLogout = async () => {
    await removeLoginToken("");
    router.push("/auth/login");
  };

  if (isLoading)
    return (
      <div className={"flex justify-center mt-40"}>
        <Loading />
      </div>
    );
  if (error && !isLoading) router.push("/auth/login");
  if (user && !isLoading)
    return (
      <div className="flex justify-center align-middle mx-auto my-40 text-center text-5xl flex-col text-gray-800">
        <h1>User Panel Page</h1>
        <button
          onClick={handleLogout}
          className={
            " mx-auto text-base mt-10 bg-blue-500 text-white p-2 rounded w-fit text-center "
          }
        >
          Logout for your account
        </button>
      </div>
    );
};
export default Panel;
