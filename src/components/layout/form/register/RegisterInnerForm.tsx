import { Form, FormikProps } from "formik";
import Input from "../Input";

const RegisterInnerForm = (props: FormikProps<RegisterFormValues>) => {
  const { handleReset } = props;

  return (
    <Form className="space-y-6 " onReset={handleReset}>
      <Input label="Name" name="name" type="name" />
      <Input label="Phone number" name="phone" type="phone" />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Register
        </button>
      </div>
    </Form>
  );
};

export default RegisterInnerForm;
