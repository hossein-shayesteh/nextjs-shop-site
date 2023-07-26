interface FormInput {
  name: string;
  label: string;
  type: string;
}

interface SignInFormValues {
  email?: string;
  password?: string;
}

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

interface SignInFormProps {}
interface SignUpFormProps {}

interface SignUpFormValues {
  name?: string;
  email?: string;
  password?: string;
}
