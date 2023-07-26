import { Form, FormikProps } from "formik";
import FormInput from "../shared/FormInput";

const SignUpInnerForm = (props: FormikProps<SignInFormValues>) => {
  const { handleReset } = props;

  return (
    <Form className="space-y-6 " onReset={handleReset}>
      <FormInput label="Name" name="name" type="name" />
      <FormInput label="Email address" name="email" type="email" />
      <FormInput label="Password" name="password" type="password" />
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

export default SignUpInnerForm;
