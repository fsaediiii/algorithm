import { ThemeColor, ThemeRadius, ThemeSize, ThemeState } from "./theme.enum";

export const Theme = {
  colors: {
    [ThemeColor.Primary]: {
      border: "border-purple-500",
      borderHover: "hover:border-purple-600",
      borderFocus: "focus:border-purple-500",

      ring: "focus:ring-2 focus:ring-purple-200",

      bg: "bg-purple-500",
      bgHover: "hover:bg-purple-600",

      text: "text-purple-700",
      textOnColor: "text-white",
    },

    [ThemeColor.Secondary]: {
      border: "border-orange-500",
      borderHover: "hover:border-orange-600",
      borderFocus: "focus:border-orange-500",

      ring: "focus:ring-2 focus:ring-orange-200",

      bg: "bg-orange-500",
      bgHover: "hover:bg-orange-600",

      text: "text-orange-700",
      textOnColor: "text-white",
    },

    [ThemeColor.Success]: {
      border: "border-green-500",
      borderHover: "hover:border-green-600",
      borderFocus: "focus:border-green-500",

      ring: "focus:ring-2 focus:ring-green-200",

      bg: "bg-green-500",
      bgHover: "hover:bg-green-600",

      text: "text-green-700",
      textOnColor: "text-white",
    },

    [ThemeColor.Danger]: {
      border: "border-red-500",
      borderHover: "hover:border-red-600",
      borderFocus: "focus:border-red-500",

      ring: "focus:ring-2 focus:ring-red-200",

      bg: "bg-red-500",
      bgHover: "hover:bg-red-600",

      text: "text-red-700",
      textOnColor: "text-white",
    },

    [ThemeColor.Neutral]: {
      border: "border-gray-300 dark:border-gray-700",
      text: "text-gray-900 dark:text-gray-100",
      placeholder: "placeholder:text-gray-400",
      background: "bg-white dark:bg-gray-800",
    },
  },

  sizes: {
    [ThemeSize.Sm]: {
      input: "h-8 px-2 text-sm",
      label: "text-sm",
    },
    [ThemeSize.Md]: {
      input: "h-10 px-3 text-base",
      label: "text-base",
    },
    [ThemeSize.Lg]: {
      input: "h-12 px-4 text-lg",
      label: "text-lg",
    },
  },

  radius: {
    [ThemeRadius.Sm]: "rounded-sm md:rounded-md lg:rounded-lg",
    [ThemeRadius.Base]: "rounded-md md:rounded-lg lg:rounded-xl",
    [ThemeRadius.Lg]: "rounded-lg md:rounded-xl lg:rounded-2xl",
    [ThemeRadius.Xl]: "rounded-xl md:rounded-2xl lg:rounded-3xl",
    [ThemeRadius.Full]: "rounded-full",
  },

  states: {
    [ThemeState.Default]: "",
    [ThemeState.Disabled]: "opacity-50 cursor-not-allowed pointer-events-none",
    [ThemeState.Error]: "border-red-500 focus:ring-2 focus:ring-red-200",
    [ThemeState.Focus]: "outline-none focus:ring-2 focus:ring-primary-200",
    [ThemeState.Transition]: "transition-colors duration-200 ease-in-out",
  },
};
