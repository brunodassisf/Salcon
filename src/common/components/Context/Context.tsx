import { ToastContainer } from "react-toastify";

import Footer from "../Footer";
import Header from "../Header";

import "react-toastify/dist/ReactToastify.css";

interface IContext {
  children: React.ReactNode;
}

export default function Context({ children }: IContext) {
  return (
    <div className="h-full">
      <Header />
      <div className="container h-full">{children}</div>
      {/* <Footer /> */}
      <ToastContainer closeButton closeOnClick position="top-right" />
    </div>
  );
}
