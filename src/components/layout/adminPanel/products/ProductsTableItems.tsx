interface ProductsTableItemsProps {
  description: string;
  title: string;
  price: number;
  remove: string;
  edit: string;
}
const ProductsTableItems = ({
  description,
  title,
  price,
  remove,
  edit,
}: ProductsTableItemsProps) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {title}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {description}
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
