import React from "react";

import { Field, ErrorMessage } from "formik";

const Textarea = ({ name, label, options }: SelectProps) => {
  return (
    <div className={" my-4"}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field
          as={"select"}
          id={name}
          name={name}
          required
          className=" block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.title}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={name}
          component={"p"}
          className=" text-sm text-red-500"
        ></ErrorMessage>
      </div>
    </div>
  );
};

export default Textarea;
