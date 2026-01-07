import type { Locale } from "../../../../domain/enums/locale.enum";
import type { WeekDay } from "../../../../domain/enums/days.enum";

export interface DayOfWeekProps {
  lang?: Locale;
}

export interface DayOfWeekState {
  days: WeekDay[];
}
