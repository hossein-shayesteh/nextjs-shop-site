import Image from "next/image";

interface ProductsTableItemsProps {
  image: string;
  title: string;
  price: number;
  remove: string;
  edit: string;
}
const ProductsTableItems = ({
  image,
  title,
  price,
  remove,
  edit,
}: ProductsTableItemsProps) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-32 p-4">
        <Image src={image} alt={title} width={96} height={60} />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {title}
      </td>

      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {`$${price}`}
      </td>
      <td className="px-6 py-4">
        <a
          href={remove}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Remove
        </a>
      </td>
      <td className="px-6 py-4">
        <a
          href={edit}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};
export default ProductsTableItems;
