import { memo, type FC } from "react";
import { CalendarLocale } from "../../shared/locales/calendar";

interface DayOfWeekProps {
  lang?: "fa" | "en";
}

const DayOfWeek: FC<DayOfWeekProps> = ({ lang = "fa" }) => {
  const days = CalendarLocale[lang].days;

  return (
    <div className="days-titles flex justify-between text-center font-medium">
      {days.map((day, index) => (
        <div key={index} className="w-10">
          {day}
        </div>
      ))}
    </div>
  );
};

export default memo(DayOfWeek);
