import { NextApiRequest, NextApiResponse } from "next";
import data from "@/assets/data/db.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const product = data.product.filter(p => p._id === req.body.category);
      if (!product) throw new Error("product not found");

      return res.status(200).json(product);
    }
  } catch (err) {
    const error = err as Error;
    return res.status(404).json({ message: error.message });
  }
};

export default handler;
