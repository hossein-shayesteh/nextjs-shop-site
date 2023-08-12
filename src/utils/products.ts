import callApi from "@/utils/callApi";

export const fetchProducts = ({ currentPage = 1, itemsPerPage = 20 }) =>
  callApi().get(`/products?page=${currentPage}&per_page=${itemsPerPage}`);
