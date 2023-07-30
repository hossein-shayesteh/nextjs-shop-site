"use client";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/UI/Loading";
import { useRouter } from "next/navigation";

const Panel = () => {
  const { user, error, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading)
    return (
      <div className={"flex justify-center mt-40"}>
        <Loading />
      </div>
    );
  if (error && !isLoading) router.push("/auth/login");
  if (user && !isLoading)
    return (
      <div className="flex justify-center mx-auto my-40 text-center text-5xl flex-col text-gray-800">
        <h1>User Panel Page</h1>
      </div>
    );
};
export default Panel;
