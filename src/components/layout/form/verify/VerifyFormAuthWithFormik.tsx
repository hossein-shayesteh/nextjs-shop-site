import { withFormik } from "formik";
import * as Yup from "yup";

import VerifyInnerForm from "./VerifyInnerForm";
import callApi from "@/utils/callApi";
import ValidationError from "../validationError";
import { storeLoginToken } from "@/utils/auth";

const verifyValidationSchema = Yup.object().shape({
  code: Yup.string()
    .required("Code is required")
    .matches(/^[0-9]+$/, "Please enter number")
    .length(6, "Code must be exactly 6 characters"),
});

const VerifyFormAuthWithFormik = withFormik<VerifyFormProps, VerifyFormValues>({
  mapPropsToValues: (props) => ({
    code: "",
    token: props.phoneVerifyToken,
  }),

  validationSchema: verifyValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login/verify-phone", values);
      if (res.status === 200) {
        await storeLoginToken(res?.data?.user?.token, 30);
        await props.router.push("/panel");
        props.clearPhoneVerifyToken();
      }
    } catch (e: any) {
      if (e instanceof ValidationError) {
        Object.entries(e.messages).forEach(([key, value]: any) =>
          setFieldError(key, value as string),
        );
      }
    }
  },
})(VerifyInnerForm);

export default VerifyFormAuthWithFormik;
