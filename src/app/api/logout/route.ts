import { NextRequest } from "next/server";

interface RequestBody {
  token: string;
  days: number;
}
export async function POST(request: NextRequest) {
  const { token, days }: RequestBody = await request.json();

  return new Response("Cookies has been set!", {
    status: 200,
    headers: {
      "Set-Cookie": `shopy_token=${token}; Max-Age=${
        days * 86400
      }; HttpOnly=true; Path=/; SameSite=Lax`,
    },
  });
}
