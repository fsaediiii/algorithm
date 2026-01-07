import { memo, type FC } from "react";
import { CalendarLocale } from "../../../../shared/locales/calendar";
import { Locale } from "../../../../domain/enums/locale.enum";
import type { DayOfWeekProps, DayOfWeekState } from "./dayOfWeek.type";

const DayOfWeek: FC<DayOfWeekProps> = ({ lang = Locale.FA }) => {
  const days: DayOfWeekState["days"] = CalendarLocale[lang].days;

  return (
    <div className="flex justify-between text-center font-medium">
      {days.map((day, index) => (
        <div key={index} className="w-10">
          {day}
        </div>
      ))}
    </div>
  );
};

export default memo(DayOfWeek);
