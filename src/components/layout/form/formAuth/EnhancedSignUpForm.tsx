import { withFormik } from "formik";
import * as Yup from "yup";
import SignUpInnerForm from "../SignUpInnerForm";
import callApi from "@/utils/callApi";
import ValidationError from "./validationError";

const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const EnhancedSignUpForm = withFormik<SignUpFormProps, SignUpFormValues>({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    password: "",
  }),

  validationSchema: signUpValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/register", values);
      if (res.status === 201) {
        props.route.push("/auth/signin");
      }
    } catch (e: any) {
      if (e instanceof ValidationError) {
        Object.entries(e.messages).forEach(([key, value]: any) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(SignUpInnerForm);

export default EnhancedSignUpForm;
