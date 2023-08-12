"use client";
import { removeLoginToken } from "@/utils/auth";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  removeLoginToken("").then(() => router.push("/"));
};
export default Logout;
