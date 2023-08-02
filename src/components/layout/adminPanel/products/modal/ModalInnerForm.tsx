import { FormikProps } from "formik";
import FormInput from "@/components/layout/form/FormInput";
import { Form } from "formik";

const ModalInnerForm = (props: FormikProps<ModalFormValues>) => {
  const { handleReset } = props;

  return (
    <Form onReset={handleReset}>
      <FormInput label={"Product Name"} type={"text"} name={"name"} />
      <FormInput label={"Price"} type={"number"} name={"price"} />
      <FormInput label={"Image"} type={"text"} name={"image"} />

      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-blue-300 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Add
      </button>
    </Form>
  );
};

export default ModalInnerForm;
