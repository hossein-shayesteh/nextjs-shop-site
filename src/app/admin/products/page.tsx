"use client";
import React, { useState } from "react";
import ProductsTable from "@/components/layout/adminPanel/products/ProductsTable";
import Modal from "@/components/UI/Modal";
import ModalFormAuthWithFormik from "@/components/layout/adminPanel/products/modal/ModalFormAuthWithFormik";

const AdminDashboardProducts = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  return (
    <>
      <Modal
        isOpen={modalIsShown}
        setIsOpen={setModalIsShown}
        modalHeader={"Add product"}
      >
        <ModalFormAuthWithFormik />
      </Modal>
      <ProductsTable setShow={setModalIsShown} />
    </>
  );
};
export default AdminDashboardProducts;
