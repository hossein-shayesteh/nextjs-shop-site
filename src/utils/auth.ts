export const storeLoginToken = async (token: string, days: number = 10) => {
  await fetch("/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, days }),
  });
};
