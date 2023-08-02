import React from "react";
import { products } from "@/components/layout/adminPanel/products/Dummy_PRODUCTS";
import ProductsTableItems from "@/components/layout/adminPanel/products/ProductsTableItems";

const tableHeadItems = [
  { id: "1", title: "Image" },
  { id: "2", title: "Product" },
  { id: "3", title: "Price" },
  { id: "4", title: "" },
  { id: "5", title: "" },
];

const ProductsTable = ({
  setModalVisibility,
}: {
  setModalVisibility: (arg: boolean) => void;
}) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* add product button*/}
        <div className=" py-4 bg-white dark:bg-gray-800">
          <button
            className=" ml-4 inline-flex justify-center rounded-md border border-blue-300 bg-blue-100  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            type="button"
            onClick={() => {
              setModalVisibility(true);
            }}
          >
            Add Product
          </button>
        </div>
        {/*product table*/}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHeadItems.map((item) => (
                <th scope="col" className="px-6 py-3" key={item.id}>
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductsTableItems
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                remove={product.remove}
                edit={product.edit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductsTable;
