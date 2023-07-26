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

interface SignInFormProps {
  setCookie: (
    name: "login",
    value: any,
    options?: CookieSetOptions | undefined
  ) => void;
}

interface SignUpFormProps {
  route: AppRouterInstance;
}

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}
