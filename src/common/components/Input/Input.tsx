import { InputHTMLAttributes } from "react";
import style from "./Input.module.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, className, error, ...props }: IInput) {
  return (
    <div className={`group relative w-72 md:w-80 lg:w-96 ${className}`}>
      <label
        htmlFor="1"
        className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        {label}
      </label>
      <input
        id="1"
        type="text"
        className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
        {...props}
      />
      <span
        className={`absolute block pt-1 text-xs font-semibold opacity-0 transition-all duration-200 ease-in-out text-red-400 ${
          error ? "opacity-100" : ""
        }`}
      >
        {error}
      </span>
    </div>
  );
}
