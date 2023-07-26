import { withFormik } from "formik";
import * as Yup from "yup";
import SignInInnerForm from "../SignInInnerForm";
import callApi from "@/utils/callApi";
import ValidationError from "./validationError";

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const EnhancedSignInForm = withFormik<SignInFormProps, SignInFormValues>({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),

  validationSchema: signInValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setCookie("login", res.data.token, {
          path: "/",
          domain: "localhost",
          maxAge: 60 * 60 * 24 * 30,
          sameSite: "lax",
        });
      }
    } catch (e: any) {
      if (e instanceof ValidationError) {
        Object.entries(e.messages).forEach(([key, value]: any) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(SignInInnerForm);

export default EnhancedSignInForm;
