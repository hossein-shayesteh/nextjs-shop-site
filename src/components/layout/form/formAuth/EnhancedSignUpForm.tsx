import { withFormik } from "formik";
import * as Yup from "yup";
import SignUpInnerForm from "../SignUpInnerForm";

const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const EnhancedSignUpForm = withFormik<SignUpFormValues, SignUpFormProps>({
  mapPropsToValues: (props) => ({
    name: props.name ?? "",
    email: props.email ?? "",
    password: props.password ?? "",
  }),

  validationSchema: signUpValidationSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(SignUpInnerForm);

export default EnhancedSignUpForm;
