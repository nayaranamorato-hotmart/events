import { DayGroup } from '../types';
import ScheduleItem from './ScheduleItem';

interface Props {
  schedule: DayGroup[];
  expandedSessions: Set<string>;
  onToggleSession: (id: string) => void;
}

export default function ScheduleTab({ schedule, expandedSessions, onToggleSession }: Props) {
  return (
    <div className="schedule-list">
      {schedule.map((dayGroup) => (
        <div key={dayGroup.day} className="schedule-day-group">
          <div className="day-label">
            <span className="day-label__name">{dayGroup.dayName}</span>
            <span className="day-label__number">{dayGroup.day}</span>
          </div>
          <div className="day-sessions">
            {dayGroup.sessions.map((session) => (
              <ScheduleItem
                key={session.id}
                session={session}
                expanded={expandedSessions.has(session.id)}
                onToggle={() => onToggleSession(session.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
