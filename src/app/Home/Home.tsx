import { useState } from "react";

import { motion, AnimatePresence, Variant } from "framer-motion";

import SignUp from "@/module/SignUp";
import SignIn from "@/module/SignIn";

import Button from "@/common/components/Button";

interface IVariant {
  [k: string]: Variant;
}

const variant: IVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function Home() {
  const [showRegister, toggleRegister] = useState(false);

  const toggleLoginRegister = () => toggleRegister(!showRegister);

  return (
    <div className="h-full flex justify-center items-start md:items-center">
      <div>
        <div className="text-center mb-4">
          <h4 className="text-xl font-bold mb-2 text-gray-600">
            Bem-vindo ao Salcon
          </h4>
          <h6 className="text-md font-medium text-gray-500">
            Ajudando você a gerenciar suas vendas!
          </h6>
        </div>
        <div className="shadow-lg p-4 md:p-10 rounded-xl">
          {!showRegister ? <SignIn /> : <SignUp />}

          <div className="text-center mt-3 underline text-gray-600">
            {showRegister
              ? "Ja possui conta? Então acesse já"
              : "Não possui conta? Crie uma agora!"}
          </div>

          <Button
            outline
            type="button"
            className="mt-3 w-full"
            onClick={toggleLoginRegister}
          >
            {showRegister ? "Fazer Login" : " Criar conta"}
          </Button>
        </div>
      </div>
    </div>
  );
}
