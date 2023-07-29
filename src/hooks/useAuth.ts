import callApi from "@/utils/callApi";
import useSWR from "swr";
import Cookies from "universal-cookie";

const useAuth = () => {
  const cookie = new Cookies().get("loginToken");

  const fetcher = () =>
    callApi().get("/user", {
      headers: {
        authorization: cookie,
      },
    });

  const { data, error, isLoading } = useSWR("user-me", fetcher);
  return { user: data?.data?.user, error, isLoading };
};
export default useAuth;
