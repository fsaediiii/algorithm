import type { InputHTMLAttributes } from "react";
import type { InputClassesProps } from "../classes/input.classes";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">, InputClassesProps {
  label?: string;
  wrapperClassName?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
}
