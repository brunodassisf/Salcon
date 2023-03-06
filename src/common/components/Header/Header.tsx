import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, toogleOpen] = useState(false);

  const clickToogleMenu = () => {
    toogleOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-3 lg:px-3"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="w-auto hidden lg:block"
              width={100}
              height={0}
              src="/assets/images/logo.png"
              alt="logo"
            />
            <Image
              className="w-auto lg:hidden"
              width={50}
              height={0}
              src="/assets/images/mobile-logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={clickToogleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars size={26} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Como funciona
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contato
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{ x: "100%" }}
        animate={{
          x: isOpen ? "0%" : undefined,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        exit={{
          x: "100%",
          transition: { delay: 1, duration: 1 },
        }}
        className="fixed border-l inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div className="flex items-center justify-between border-b pb-5">
          <Link href="/">
            <span className="sr-only">Your Company</span>
            <Image
              className="w-auto"
              width={50}
              height={0}
              src="/assets/images/mobile-logo.png"
              alt="logo"
            />
          </Link>
          <button
            type="button"
            className=" rounded-md p-2.5 text-gray-700"
            onClick={clickToogleMenu}
          >
            <span className="sr-only">Close menu</span>
            <FaTimes size={26} />
          </button>
        </div>
        <div className="mt-4 flow-root">
          <div className="-my-6 ">
            <div className="space-y-2 py-6">
              <Link
                href="/"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={clickToogleMenu}
              >
                Como funciona
              </Link>
              <Link
                href="/"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={clickToogleMenu}
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3">
          <h6 className="text-sm text-gray-600">
            Desenvolvido por Assisdevelopment
          </h6>
        </div>
      </motion.div>
    </header>
  );
}
