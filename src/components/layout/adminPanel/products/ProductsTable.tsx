"use client";
import React, { useState } from "react";
import ProductsTableItems from "@/components/layout/adminPanel/products/ProductsTableItems";
import useSWR from "swr";
import { fetchProducts } from "@/utils/products";
import Loading from "@/components/UI/Loading";
import ReactCustomPaginate from "@/components/UI/ReactCustomPaginate";

const tableHeadItems = [
  { id: "2", title: "Product" },
  { id: "1", title: "description", className: " hidden lg:block" },
  { id: "3", title: "Price" },
  { id: "4", title: "" },
  { id: "5", title: "" },
];

const ProductsTable = ({
  setModalVisibility,
}: {
  setModalVisibility: (arg: boolean) => void;
}) => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, mutate } = useSWR(
    { currentPage: page, itemsPerPage: 5 },
    fetchProducts,
  );

  const products: ProductList[] | undefined = data?.data?.data;
  const totalPage = data?.data?.total_page;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

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
                <th
                  scope="col"
                  className={`px-6 py-3 ${item.className}`}
                  key={item.id}
                >
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <ProductsTableItems
                  mutateProducts={mutate}
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.body}
                  price={product.price}
                />
              ))}
          </tbody>
        </table>
      </div>
      {isLoading && <Loading className={"mt-40"} />}
      {products && (
        <ReactCustomPaginate
          pageCount={totalPage}
          page={page}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
export default ProductsTable;
