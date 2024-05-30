import { NextApiRequest, NextApiResponse } from "next";
import data from "@/assets/data/db.json";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const page = data.productPage.find(c => c._id === req.query.id) || {};
      return res.status(200).json(page);
    }
  } catch (err) {
    return res.status(200).json(err);
  }
};

export default handler;
