import callApi from "@/utils/callApi";

export const getProductsFetcher = ({ page = 1, perPage = 20 }) =>
  callApi().get(`/products?page=${page}&per_page=${perPage}`);
