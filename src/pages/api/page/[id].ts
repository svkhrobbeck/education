import { NextApiRequest, NextApiResponse } from "next";
import data from "@/assets/data/db.json";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const page = data.productPage.find(c => c._id === req.query.id);
      if (!page) throw new Error("page not found");

      return res.status(200).json(page);
    }
  } catch (err) {
    const error = err as Error;
    return res.status(404).json({ message: error.message });
  }
};

export default handler;
