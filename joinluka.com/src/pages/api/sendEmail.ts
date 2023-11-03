// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const user = process.env.NEXT_PUBLIC_API_USER;
  const pass = process.env.NEXT_PUBLIC_API_PASS;
  if (url && user && pass) {
    await axios
      .post(url, req.body, {
        auth: {
          username: user,
          password: pass,
        },
      })
      .then(() => {
        res.status(200).json({ name: "enviado" });
      })
      .catch(error => {
        res.status(500).json({ name: error });
      });
  } else {
    res.status(500).json({ name: "error" });
  }
}
