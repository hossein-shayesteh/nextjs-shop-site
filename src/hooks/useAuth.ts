import callApi from "@/utils/callApi";
import useSWR from "swr";

const useAuth = () => {
  const fetchUser = () => callApi().get("/user");
  const { data, error, isLoading, mutate } = useSWR("user-me", fetchUser);

  return { user: data?.data?.user, error, isLoading, mutate };
};
export default useAuth;
