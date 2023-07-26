import { withFormik } from "formik";
import * as Yup from "yup";
import SignInInnerForm from "../SignInInnerForm";

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const EnhancedSignInForm = withFormik<SignInFormValues, SignInFormProps>({
  mapPropsToValues: (props) => ({
    email: props.email ?? "",
    password: props.password ?? "",
  }),

  validationSchema: signInValidationSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(SignInInnerForm);

export default EnhancedSignInForm;
