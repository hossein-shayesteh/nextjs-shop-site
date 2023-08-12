"use client";
import VerifyForm from "@/components/layout/form/verify/VerifyForm";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const Verify = () => {
  const { user, isLoading } = useAuth();

  if (!isLoading && user) redirect("/admin");
  if (!isLoading && !user) return <VerifyForm />;
};

export default Verify;
