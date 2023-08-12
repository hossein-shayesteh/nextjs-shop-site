"use client";
import { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectPhoneVerifyToken,
  updatePhoneVerifyToken,
} from "@/redux/reducers/authentication";

import VerifyFormAuthWithFormik from "@/components/layout/form/verify/VerifyFormAuthWithFormik";

const VerifyForm = () => {
  const router = useRouter();
  const phoneVerifyToken = useAppSelector(selectPhoneVerifyToken);
  const dispatch = useAppDispatch();

  const clearPhoneVerifyToken = () => {
    dispatch(updatePhoneVerifyToken(undefined));
  };

  useEffect(() => {
    if (phoneVerifyToken === undefined) {
      router.push("/auth/login");
    }
  }, []);

  if (phoneVerifyToken)
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto"
            src="/images/icon.svg"
            alt="Clothina logo"
            width={300}
            height={300}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify your phone number
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <VerifyFormAuthWithFormik
            router={router}
            phoneVerifyToken={phoneVerifyToken}
            clearPhoneVerifyToken={clearPhoneVerifyToken}
          />
        </div>
      </div>
    );
};

export default VerifyForm;
