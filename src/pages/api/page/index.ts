import { NextApiRequest, NextApiResponse } from "next";
import data from "@/assets/data/db.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const page = data.page[req.body.category].find;
      if (!page) throw new Error("page not found");

      return res.status(200).json(page);
    }
  } catch (err) {
    const error = err as Error;
    return res.status(404).json({ message: error.message });
  }
};

export default handler;
