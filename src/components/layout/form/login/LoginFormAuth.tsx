import { withFormik } from "formik";
import ValidationError from "../validationError";
import * as Yup from "yup";

import LoginInnerForm from "./LoginInnerForm";
import callApi from "@/utils/callApi";
import { phoneRegExp } from "@/components/layout/form/register/RegisterFormAuth";

const loginValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone is required")
    .matches(phoneRegExp, "The Phone format is not correct"),
});

const LoginFormAuth = withFormik<LoginFormProps, LoginFormValues>({
  mapPropsToValues: () => ({
    phone: "",
  }),

  validationSchema: loginValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setPhoneVerifyToken(res?.data?.token);
        props.router.push("/auth/login/verify");
      }
    } catch (e: any) {
      if (e instanceof ValidationError) {
        Object.entries(e.messages).forEach(([key, value]: any) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(LoginInnerForm);

export default LoginFormAuth;
