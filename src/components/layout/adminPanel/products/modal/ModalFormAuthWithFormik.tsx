import { withFormik } from "formik";
import * as Yup from "yup";

import ModalInnerForm from "@/components/layout/adminPanel/products/modal/ModalInnerForm";

const ModalValidationSchema = Yup.object().shape({
  name: Yup.string().required("Code is required"),
  price: Yup.number().required("Price is required"),
  description: Yup.string().required("Image is required"),
});

const VerifyFormAuth = withFormik<ModalFormProps, ModalFormValues>({
  mapPropsToValues: () => ({
    name: "",
    price: 0,
    description: "",
  }),

  validationSchema: ModalValidationSchema,
  handleSubmit: async (values) => {
    console.log(values);
  },
})(ModalInnerForm);

export default VerifyFormAuth;
