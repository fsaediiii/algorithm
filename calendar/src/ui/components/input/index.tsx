import type { InputProps } from "./types/input.types";
import { inputClasses } from "./classes/input.classes";
import clsx from "clsx";
import type { FC } from "react";
import { useUniqueId } from "../../../hooks/useUniqueIs";
import { ThemeColor, ThemeRadius, ThemeSize, ThemeState } from "../../theme/theme.enum";

const InputDate: FC<InputProps> = ({
  wrapperClassName,
  label,
  id,
  size = ThemeSize.Md,
  color = ThemeColor.Primary,
  state = ThemeState.Default,
  radius = ThemeRadius.Base,
  className,
}) => {
  const inputId = useUniqueId(id, "input");

  return (
    <div className={clsx(wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(
            size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
            "block mb-1 font-medium text-gray-700 dark:text-gray-100",
          )}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(inputClasses({ size, color, state, radius }), className)}
      />
    </div>
  );
};

export default InputDate;
