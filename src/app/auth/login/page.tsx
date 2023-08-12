"use client";
import LoginForm from "@/components/layout/form/login/LoginForm";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const SignIn = () => {
  const { user, isLoading } = useAuth();

  if (!isLoading && user) redirect("/admin");
  if (!isLoading && !user) return <LoginForm />;
};

export default SignIn;
