import Cookies from "universal-cookie";

export const storeLoginToken = (token: string, days: number = 10) => {
  const cookies = new Cookies();
  cookies.set("loginToken", token, {
    path: "/",
    domain: "localhost",
    sameSite: "lax",
    maxAge: 86400 * days,
    // httpOnly: true,
    // secure: true,
  });
};
export const removeLoginToken = () => {};
