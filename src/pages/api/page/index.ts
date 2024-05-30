import { NextApiRequest, NextApiResponse } from "next";
import data from "@/assets/data/db.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const page = data.page[req.body.category].find || {};
      return res.status(200).json(page);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default handler;
