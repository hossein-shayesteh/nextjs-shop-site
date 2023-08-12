"use client";
import { removeLoginToken } from "@/utils/auth";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const Logout = () => {
  const { mutate } = useAuth();
  const router = useRouter();

  removeLoginToken("")
    .then(() => mutate())
    .then(() => router.push("/"));
};
export default Logout;
