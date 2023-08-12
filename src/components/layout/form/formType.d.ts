interface InputProps {
  name: string;
  label: string;
  type: string;
}
interface TextareaProps {
  name: string;
  label: string;
  rows?: number;
}

interface SelectProps {
  name: string;
  label: string;
  options: {
    title: string;
    value: string;
  }[];
}
interface LoginFormValues {
  phone: string;
}
interface RegisterFormValues {
  name: string;
  phone: string;
}
interface VerifyFormValues {
  code: string;
  token?: string;
}

interface LoginFormProps {
  router: AppRouterInstance;
  setPhoneVerifyToken: (token: string) => void;
}
interface RegisterFormProps {
  router: AppRouterInstance;
}
interface VerifyFormProps {
  router: AppRouterInstance;
  phoneVerifyToken?: string;
  clearPhoneVerifyToken: () => void;
}
