"use client";
import EditProductFormAuthWithFormik from "@/components/layout/adminPanel/products/editProduct/EditProductFormAuthWithFormik";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { getProductsFetcher } from "@/utils/products";

import Loading from "@/components/UI/Loading";

const EditProduct = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();

  const { data, error, isLoading, mutate } = useSWR(
    { page: 1, perPage: 10 },
    getProductsFetcher
  );
  const products = data?.data.data as ProductList[];

  if (isLoading) return <Loading />;
  if (error) router.push("/admin/products");

  // Check if products array is defined before filtering
  if (products) {
    const [{ title, body, price, category, id }] = products.filter(
      (product) => String(product.id) === params.productId
    );
    return (
      <div className={" lg:px-20"}>
        <EditProductFormAuthWithFormik
          router={router}
          id={id}
          mutateProducts={mutate}
          name={title}
          description={body}
          price={price}
          category={category}
        />
      </div>
    );
  }
};

export default EditProduct;
