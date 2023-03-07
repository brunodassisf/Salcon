import cryptHash from "@/helper/bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = JSON.parse(req.body);

  const hash = await cryptHash(password);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        hash,
      },
    });

    return res
      .status(200)
      .json({ res: true, msg: "Cadastro feito com sucesso!" });
  } catch (error) {
    return res
      .status(500)
      .json({ res: false, msg: "Não foi possível cadastrar." });
  }
}
