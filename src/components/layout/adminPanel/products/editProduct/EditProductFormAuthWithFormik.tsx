import { withFormik } from "formik";
import * as Yup from "yup";
import callApi from "@/utils/callApi";
import { notifySuccess } from "@/components/UI/toast";
import EditProductInnerForm from "@/components/layout/adminPanel/products/editProduct/EditProductInnerForm";

const EditProductValidationSchema = Yup.object().shape({
  name: Yup.string().required("Code is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
});

const EditProductFormAuthWithFormik = withFormik<
  EditProductModalFormProps,
  EditProductModalFormValues
>({
  mapPropsToValues: (props) => ({
    name: props.name,
    price: props.price,
    category: props.category,
    description: props.description,
  }),

  validationSchema: EditProductValidationSchema,
  handleSubmit: async (values, { props }) => {
    try {
      const res = await callApi().post(`/products/${props.id}/update`, {
        ...values,
        body: values.description,
        category: values.category,
        title: values.name,
      });
      if (res.status === 200) {
        notifySuccess("Product edited.");
        props.mutateProducts();
        props.router.back();
      }
    } catch (e: any) {
      console.log(e);
    }
  },
})(EditProductInnerForm);

export default EditProductFormAuthWithFormik;
