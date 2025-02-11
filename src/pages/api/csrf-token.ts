import { NextApiRequest, NextApiResponse } from "next";
import csrf from "csrf";

const tokens = new csrf();
const secret = process.env.CSRF_SECRET || tokens.secretSync();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = tokens.create(secret);

  // Set CSRF token as an HTTP-only cookie
  res.setHeader("Set-Cookie", `XSRF-TOKEN=${token}; HttpOnly; Path=/`);

  // Return the CSRF token in the response body
  res.status(200).json({ csrfToken: token });
}