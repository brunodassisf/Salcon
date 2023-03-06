import Footer from "../Footer";
import Header from "../Header";

interface IContext {
  children: React.ReactNode;
}

export default function Context({ children }: IContext) {
  return (
    <div className="h-full">
      <Header />
      <div className="container h-full">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
