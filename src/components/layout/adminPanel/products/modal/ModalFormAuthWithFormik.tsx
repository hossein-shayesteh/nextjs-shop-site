import { withFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import ModalInnerForm from "@/components/layout/adminPanel/products/modal/ModalInnerForm";
import callApi from "@/utils/callApi";

const ModalValidationSchema = Yup.object().shape({
  name: Yup.string().required("Code is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
});

const VerifyFormAuth = withFormik<ModalFormProps, ModalFormValues>({
  mapPropsToValues: () => ({
    name: "",
    price: 0,
    category: "",
    description: "",
  }),

  validationSchema: ModalValidationSchema,
  handleSubmit: async (values, { props }) => {
    try {
      const res = await callApi().post("/products/create", {
        ...values,
        body: values.description,
        category: values.category,
        title: values.name,
      });
      if (res.status === 200) {
        props.router.back();
      }
    } catch (e: any) {
      console.log(e);
    }
  },
})(ModalInnerForm);

export default VerifyFormAuth;
