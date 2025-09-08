import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  ...props
}: CalendarProps) {
  return (
    <DayPicker
  className="p-3"
  showOutsideDays
  components={{
    Chevron: (props) => {
      if (props.orientation === "left") {
        return <ChevronLeft className="h-4 w-4" />
      }
      if (props.orientation === "right") {
        return <ChevronRight className="h-4 w-4" />
      }
      return <></>
    },
  }}
  {...props}
/>

  );
}
Calendar.displayName = "Calendar";

export { Calendar };
