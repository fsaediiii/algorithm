import { Theme } from "../../../theme";
import { cva, type VariantProps } from "class-variance-authority";
import { ThemeColor, ThemeRadius, ThemeSize, ThemeState } from "../../../theme/theme.enum";

export const inputClasses = cva(
  [
    "w-full border outline-none bg-transparent",

    Theme.states.transition,
    Theme.radius[ThemeRadius.Base],

    Theme.colors[ThemeColor.Neutral].text,
    Theme.colors[ThemeColor.Neutral].border,
    Theme.colors[ThemeColor.Neutral].placeholder,
  ],
  {
    variants: {
      size: {
        [ThemeSize.Sm]: Theme.sizes[ThemeSize.Sm].input,
        [ThemeSize.Md]: Theme.sizes[ThemeSize.Md].input,
        [ThemeSize.Lg]: Theme.sizes[ThemeSize.Lg].input,
      },

      color: {
        [ThemeColor.Primary]: [
          Theme.colors[ThemeColor.Primary].border,
          Theme.colors[ThemeColor.Primary].borderHover,
          Theme.colors[ThemeColor.Primary].borderFocus,
          Theme.colors[ThemeColor.Primary].ring,
          Theme.colors[ThemeColor.Primary].text,
        ],

        [ThemeColor.Secondary]: [
          Theme.colors[ThemeColor.Secondary].border,
          Theme.colors[ThemeColor.Secondary].borderHover,
          Theme.colors[ThemeColor.Secondary].borderFocus,
          Theme.colors[ThemeColor.Secondary].ring,
          Theme.colors[ThemeColor.Secondary].text,
        ],

        [ThemeColor.Success]: [
          Theme.colors[ThemeColor.Success].border,
          Theme.colors[ThemeColor.Success].borderHover,
          Theme.colors[ThemeColor.Success].borderFocus,
          Theme.colors[ThemeColor.Success].ring,
          Theme.colors[ThemeColor.Success].text,
        ],

        [ThemeColor.Danger]: [
          Theme.colors[ThemeColor.Danger].border,
          Theme.colors[ThemeColor.Danger].borderHover,
          Theme.colors[ThemeColor.Danger].borderFocus,
          Theme.colors[ThemeColor.Danger].ring,
          Theme.colors[ThemeColor.Danger].text,
        ],

        [ThemeColor.Neutral]: [
          Theme.colors[ThemeColor.Neutral].border,
          Theme.colors[ThemeColor.Neutral].text,
          Theme.colors[ThemeColor.Neutral].placeholder,
          Theme.colors[ThemeColor.Neutral].background,
        ],
      },

      state: {
        [ThemeState.Default]: null,
        [ThemeState.Disabled]: [Theme.states.disabled, "dark:opacity-40"],
        [ThemeState.Error]: [
          Theme.colors[ThemeColor.Danger].border,
          Theme.colors[ThemeColor.Danger].ring,
        ],
        [ThemeState.Focus]: Theme.states.focus,
        [ThemeState.Transition]: Theme.states.transition,
      },

      radius: {
        [ThemeRadius.Sm]: Theme.radius[ThemeRadius.Sm],
        [ThemeRadius.Base]: Theme.radius[ThemeRadius.Base],
        [ThemeRadius.Lg]: Theme.radius[ThemeRadius.Lg],
        [ThemeRadius.Xl]: Theme.radius[ThemeRadius.Xl],
        [ThemeRadius.Full]: Theme.radius[ThemeRadius.Full],
      },
    },

    defaultVariants: {
      size: ThemeSize.Md,
      color: ThemeColor.Primary,
      state: ThemeState.Default,
      radius: ThemeRadius.Base,
    },
  },
);

export type InputClassesProps = VariantProps<typeof inputClasses>;
