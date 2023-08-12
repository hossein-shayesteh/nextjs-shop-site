import callApi from "@/utils/callApi";
import useSWR from "swr";

const useAuth = () => {
  const fetchUser = () => callApi().get("/user");
  const { data, error, isLoading } = useSWR("user-me", fetchUser);

  return { user: data?.data?.user, error, isLoading };
};
export default useAuth;
