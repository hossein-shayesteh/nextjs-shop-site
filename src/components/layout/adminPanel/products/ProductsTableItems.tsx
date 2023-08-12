"use Client";
import DeleteConfirmationModal from "@/components/layout/adminPanel/products/DeleteConfirmationModal";
import { useState } from "react";
import callApi from "@/utils/callApi";
import notify from "@/components/UI/toast";
import { KeyedMutator } from "swr";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

interface ProductsTableItemsProps {
  description: string;
  title: string;
  price: number;
  id: number;
  mutateProducts: KeyedMutator<AxiosResponse<any, any>>;
}
const ProductsTableItems = ({
  mutateProducts,
  description,
  title,
  price,
  id,
}: ProductsTableItemsProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await callApi().post(`/products/${id}/delete`);
      if (res.status === 200) {
        await mutateProducts();
        setIsDeleteModalOpen(false);
        notify("Product delete successfully", "success");
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      {
        <DeleteConfirmationModal
          isDeleteModalOpen={isDeleteModalOpen}
          description={`are you sure that you want to delete ${title}`}
          handleAccept={handleDelete}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      }
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {title}
        </td>
        <td className="px-6 py-4 fl font-semibold text-gray-900 dark:text-white hidden lg:block">
          {description}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {`$${price}`}
        </td>
        <td className="px-6 py-4">
          <button
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Remove
          </button>
        </td>
        <td className="px-6 py-4">
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={() => router.push(`products/${id}/edit`)}
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};
export default ProductsTableItems;
