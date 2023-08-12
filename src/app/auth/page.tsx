"use client";
import { redirect } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const Auth = () => {
  const { user, isLoading } = useAuth();

  if (!isLoading && !user) redirect("/auth/login");
  if (!isLoading && user) redirect("/admin");
};
export default Auth;
