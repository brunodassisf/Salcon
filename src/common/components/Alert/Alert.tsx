import Link from "next/link";
import { animate, motion, Variant } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface IVariants {
  [k: string]: Variant;
}

const variants: IVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function Alert() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="w-full md:w-2/4 mx-auto bg-yellow-100 shadow-md mb-7 p-4 pt-4 rounded-xl absolute bottom-10 md:right-4"
    >
      <FaTimes
        size={24}
        className="text-yellow-600 absolute right-4 top-5 cursor-pointer"
      />
      <div className=" text-xl font-semibold text-yellow-900 mb-4 border-b pb-3 border-yellow-600">
        Atenção
      </div>
      <div className="font-medium text-yellow-700">
        Caso tenha alguma dúvida sobre a gestão de vendas do dia,
        <Link href="/como-funciona" className="underline ml-1 text-blue-600">
          clique aqui para saber mais.
        </Link>
      </div>
    </motion.div>
  );
}
