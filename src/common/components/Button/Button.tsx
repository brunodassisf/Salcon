import { ReactNode, ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string | JSX.Element;
  outline?: boolean;
}

export default function Button({
  children,
  className,
  outline,
  ...props
}: IButton) {
  const isOutline = outline
    ? "bg-white border border-blue-500 text-blue-500 hover:text-white"
    : "text-white bg-blue-500";
  return (
    <button
      className={`${isOutline} px-8 py-3 rounded hover:bg-blue-600 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
