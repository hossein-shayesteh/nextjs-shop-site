"use client";
import React from "react";
import ProductsTable from "@/components/layout/adminPanel/products/ProductsTable";
import Modal from "@/components/UI/Modal";
import ModalFormAuthWithFormik from "@/components/layout/adminPanel/products/addProductModal/ModalFormAuthWithFormik";
import { useRouter, useSearchParams } from "next/navigation";

const AdminDashboardProducts = () => {
  const router = useRouter();

  const isModalVisible = useSearchParams().get("addProductModal") === "true";

  const setModalVisibility = (arg: boolean) => {
    if (arg) router.push("?addProductModal=true");
    if (!arg) router.back();
  };

  return (
    <>
      <Modal
        isOpen={isModalVisible}
        setIsOpen={setModalVisibility}
        modalHeader={"Add product"}
      >
        <ModalFormAuthWithFormik router={router} />
      </Modal>
      <ProductsTable setModalVisibility={setModalVisibility} />
    </>
  );
};
export default AdminDashboardProducts;
