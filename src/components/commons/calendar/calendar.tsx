import CalendarContainer from './calendarSource/calendar.container';
import { ICalendarProps } from './calendarSource/calendar.types';

const Calendar = (props: ICalendarProps) => {
  return (
    <CalendarContainer
      selectedColor={props.selectedColor}
      width={props.width}
      selected={props.selected}
      setSelected={props.setSelected}
    />
  );
};

export default Calendar;
