"use client";
import RegisterForm from "@/components/layout/form/register/RegisterForm";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const SignUp = () => {
  const { user, isLoading } = useAuth();

  if (!isLoading && user) redirect("/admin");
  if (!isLoading && !user) return <RegisterForm />;
};

export default SignUp;
