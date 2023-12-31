export const storeLoginToken = async (
  token: string,
  expirationDays: number = 10,
) => {
  await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, days: expirationDays }),
  });
};
export const removeLoginToken = async (token: string) => {
  await fetch("/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};
