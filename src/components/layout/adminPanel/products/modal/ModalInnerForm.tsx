import { FormikProps } from "formik";
import Input from "@/components/layout/form/Input";
import { Form } from "formik";
import Textarea from "@/components/layout/form/Textarea";

const ModalInnerForm = (props: FormikProps<ModalFormValues>) => {
  const { handleReset } = props;

  return (
    <Form onReset={handleReset}>
      <Input label={"Product Name"} type={"text"} name={"name"} />
      <Input label={"Price"} type={"number"} name={"price"} />
      <Textarea name={"description"} label={"Description"} />

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
