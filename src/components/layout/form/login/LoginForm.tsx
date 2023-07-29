"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/redux/hooks";
import { updatePhoneVerifyToken } from "@/redux/reducers/authentication";

import LoginFormAuth from "./LoginFormAuth";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const setPhoneVerifyToken = (token: string) => {
    dispatch(updatePhoneVerifyToken(token));
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-20 w-auto"
          src="/images/icon.png"
          alt="Clothina logo"
          width={300}
          height={300}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginFormAuth
          router={router}
          setPhoneVerifyToken={setPhoneVerifyToken}
        />
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?&nbsp;
          <Link
            href={"/auth/register"}
            className="font-semibold leading-6 text-gray-600 hover:text-gray-500"
          >
            Register from here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
