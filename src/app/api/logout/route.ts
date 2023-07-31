import { NextRequest } from "next/server";

interface RequestBody {
  token: string;
}
export async function POST(request: NextRequest) {
  const { token }: RequestBody = await request.json();

  return new Response("Cookies has been set!", {
    status: 200,
    headers: {
      "Set-Cookie": `shopy_token=${token}; Max-Age=0; HttpOnly=true; Path=/; SameSite=Lax`,
    },
  });
}
