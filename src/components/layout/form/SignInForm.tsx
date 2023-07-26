"use client";
import Image from "next/image";
import EnhancedSignInForm from "./formAuth/EnhancedSignInForm";
import Link from "next/link";
import { useCookies } from "react-cookie";

const SignInForm = () => {
  const [cookie, setCookie] = useCookies(["login"]);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-20 w-auto"
          src="/images/icon.png"
          alt="Your Company"
          width={300}
          height={300}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <EnhancedSignInForm setCookie={setCookie} />
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?&nbsp;
          <Link
            href="/auth/signup"
            className="font-semibold leading-6 text-gray-600 hover:text-gray-500"
          >
            Register from here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
