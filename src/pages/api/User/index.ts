import { NextApiRequest, NextApiResponse } from "next";

import { createUser } from "../../../../prisma/User/user";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = req.body;

  console.log(user);
  //   try {
  //     const user = await createUser();
  //     return res.status(200).json(user);
  //   } catch (error) {
  //     return res.status(500).json({ ...error, message: error.message });
  //   }
}
