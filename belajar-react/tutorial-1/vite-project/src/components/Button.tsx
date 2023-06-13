import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

export const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <div className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </div>
  );
};
