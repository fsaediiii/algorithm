import { EnglishWeekDay, PersianWeekDay, type WeekDay } from "../../domain/enums/days.enum";
import type { Locale } from "../../domain/enums/locale.enum";
import { EnglishMonth, PersianMonth, type Month } from "../../domain/enums/months.enum";

interface CalendarLocaleType {
  days: WeekDay[];
  months: Month[];
}

export const CalendarLocale: Record<Locale, CalendarLocaleType> = {
  fa: {
    days: [
      PersianWeekDay.SAT,
      PersianWeekDay.SUN,
      PersianWeekDay.MON,
      PersianWeekDay.TUE,
      PersianWeekDay.WED,
      PersianWeekDay.THU,
      PersianWeekDay.FRI,
    ],
    months: [
      PersianMonth.JANUARY,
      PersianMonth.FEBRUARY,
      PersianMonth.MARCH,
      PersianMonth.APRIL,
      PersianMonth.MAY,
      PersianMonth.JUNE,
      PersianMonth.JULY,
      PersianMonth.AUGUST,
      PersianMonth.SEPTEMBER,
      PersianMonth.OCTOBER,
      PersianMonth.NOVEMBER,
      PersianMonth.DECEMBER,
    ],
  },
  en: {
    days: [
      EnglishWeekDay.SAT,
      EnglishWeekDay.SUN,
      EnglishWeekDay.MON,
      EnglishWeekDay.TUE,
      EnglishWeekDay.WED,
      EnglishWeekDay.THU,
      EnglishWeekDay.FRI,
    ],
    months: [
      EnglishMonth.JANUARY,
      EnglishMonth.FEBRUARY,
      EnglishMonth.MARCH,
      EnglishMonth.APRIL,
      EnglishMonth.MAY,
      EnglishMonth.JUNE,
      EnglishMonth.JULY,
      EnglishMonth.AUGUST,
      EnglishMonth.SEPTEMBER,
      EnglishMonth.OCTOBER,
      EnglishMonth.NOVEMBER,
      EnglishMonth.DECEMBER,
    ],
  },
};
