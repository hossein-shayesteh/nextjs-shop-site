"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, error, isLoading } = useAuth();
  if (!isLoading && user) redirect("/panel");
  if (!isLoading && !user) return <>{children}</>;
};
export default AuthLayout;
