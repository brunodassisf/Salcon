import Header from "../Header";

interface IContext {
  children: React.ReactNode;
}

export default function Context({ children }: IContext) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
