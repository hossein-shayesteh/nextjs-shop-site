"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import RegisterFormAuthWithFormik from "./RegisterFormAuthWithFormik";

const RegisterForm = () => {
  const route = useRouter();

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
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterFormAuthWithFormik router={route} />
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have a account?&nbsp;
          <Link
            href={"/auth/login"}
            className="font-semibold leading-6 text-gray-600 hover:text-gray-500"
          >
            Login from here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
