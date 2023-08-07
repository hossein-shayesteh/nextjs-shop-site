import callApi from "@/utils/callApi";

export const getProducts = ({ page = 1, perPAge = 20 }) =>
  callApi().get(`/products?page=${page}&per_page=${perPAge}`);
