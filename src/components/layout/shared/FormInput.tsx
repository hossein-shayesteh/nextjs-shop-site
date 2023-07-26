import React from "react";
import { Field, ErrorMessage } from "formik";

const FormInput = ({ name, label, type }: FormInput) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          required
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage
          name={name}
          component={"p"}
          className=" text-sm text-red-500"
        ></ErrorMessage>
      </div>
    </div>
  );
};

export default FormInput;
