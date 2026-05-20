import { CalendarIcon, LocationIcon } from '../icons';
import { EventData } from '../types';

interface Props {
  event: EventData;
}

export default function EventInfo({ event }: Props) {
  return (
    <div className="event-info">
      <h1 className="event-info__title">{event.name}</h1>

      <div className="event-info__details">
        <div className="event-info__row">
          <span className="event-info__icon">
            <CalendarIcon />
          </span>
          <span className="event-info__text">{event.date}</span>
        </div>

        <div className="event-info__row">
          <span className="event-info__icon">
            <LocationIcon />
          </span>
          <span className="event-info__text">{event.location}</span>
        </div>
      </div>
    </div>
  );
}
