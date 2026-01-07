import { cva } from "class-variance-authority";

export const calendarClasses = cva("", {
  variants: {
    type: {
      wrapper: "flex justify-between text-center font-medium",
      item: "w-10",
    },
  },
  defaultVariants: {
    type: "wrapper",
  },
});
