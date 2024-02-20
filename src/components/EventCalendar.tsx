import React from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { Dayjs } from 'dayjs';
import { formatDate } from '../utils/date';

interface IComponentProps {
  events: IEvent[];
}

const EventCalendarComponent: React.FC<IComponentProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    const formattedDate = formatDate(value.toISOString());
    const currentDayEvent = events.filter(ev => formatDate(ev.date) === formattedDate);
    return (
      <div>
        {currentDayEvent.map((ev, index) =>
          <div key={index}>{ev.description}</div>
        )}
      </div>
    );
  };

  return (
    <Calendar
      cellRender={dateCellRender}
    />
  );
};

export const EventCalendar = EventCalendarComponent;
