import { withFormik } from "formik";
import * as Yup from "yup";

import RegisterInnerForm from "./RegisterInnerForm";
import callApi from "@/utils/callApi";
import ValidationError from "../validationError";

//regex for iran phone number
export const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(phoneRegExp, "The phone format is not correct"),
});

const RegisterFormAuth = withFormik<RegisterFormProps, RegisterFormValues>({
  mapPropsToValues: () => ({
    name: "",
    phone: "",
  }),

  validationSchema: registerValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/register", values);
      if (res.status === 201) {
        props.router.push("/auth/login");
      }
    } catch (e: any) {
      if (e instanceof ValidationError) {
        Object.entries(e.messages).forEach(([key, value]: any) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(RegisterInnerForm);

export default RegisterFormAuth;
