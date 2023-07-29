import { Form, FormikProps } from "formik";

import FormInput from "../FormInput";

const VerifyInnerForm = (props: FormikProps<VerifyFormValues>) => {
  const { handleReset } = props;

  return (
    <Form className="space-y-6 " onReset={handleReset}>
      <FormInput label="Code" name="code" type="text" />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Verify
        </button>
      </div>
    </Form>
  );
};

export default VerifyInnerForm;
