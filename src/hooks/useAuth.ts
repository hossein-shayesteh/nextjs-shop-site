import callApi from "@/utils/callApi";
import useSWR from "swr";

const useAuth = () => {
  const fetcher = () => callApi().get("/user");
  const { data, error, isLoading } = useSWR("user-me", fetcher);

  return { user: data?.data?.user, error, isLoading };
};
export default useAuth;
