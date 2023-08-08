import { Form, Formik } from "formik";
import Modal from "@/components/UI/Modal";

interface Props {
  description: string;
  isDeleteModalOpen: boolean;
  handleAccept: () => void;
  setIsDeleteModalOpen: (arg: boolean) => void;
}

const DeleteConfirmationModal = ({
  description,
  handleAccept,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
}: Props) => {
  return (
    <>
      <Modal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        modalHeader={"Delete product"}
      >
        <div className="py-2">
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
        <Formik initialValues={{}} onSubmit={handleAccept}>
          <Form>
            <div className="py-2 border-gray-200 flex items-center">
              <button
                type="submit"
                className=" mr-2 inline-flex justify-center rounded-md border border-red-300 bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Delete
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};
export default DeleteConfirmationModal;
