"use client";
import Image from "next/image";
import EnhancedSignUpForm from "./formAuth/EnhancedSignUpForm";

const SignUpForm = () => {
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
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <EnhancedSignUpForm />
      </div>
    </div>
  );
};

export default SignUpForm;
