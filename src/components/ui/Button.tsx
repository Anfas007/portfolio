import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const Button = ({ children, variant = "primary" }: Props) => {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100";

  return (
    <button
      className={`rounded-xl px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;