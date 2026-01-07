export enum PersianWeekDay {
  SAT = "ش",
  SUN = "ی",
  MON = "د",
  TUE = "س",
  WED = "چ",
  THU = "پ",
  FRI = "ج",
}

export enum EnglishWeekDay {
  SUN = "Sun",
  MON = "Mon",
  TUE = "Tue",
  WED = "Wed",
  THU = "Thu",
  FRI = "Fri",
  SAT = "Sat",
}

export type WeekDay = PersianWeekDay | EnglishWeekDay;
