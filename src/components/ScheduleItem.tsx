import { Session } from '../types';
import { ChevronDownIcon, ClockIcon, MapPinIcon } from '../icons';

interface Props {
  session: Session;
  expanded: boolean;
  onToggle: () => void;
}

export default function ScheduleItem({ session, expanded, onToggle }: Props) {
  return (
    <div className="session-card" onClick={onToggle}>
      {session.speakers && session.speakers.length > 0 && (
        <div className="session-card__speakers">
          <div className="speaker-avatars">
            {session.speakers.map((sp) => (
              <div
                key={sp.id}
                className="speaker-avatar"
                style={{ background: sp.color }}
                title={sp.name}
              >
                {sp.initials}
              </div>
            ))}
          </div>
          <span className="session-card__speaker-names">
            {session.speakers.map((sp) => sp.name).join(', ')}
          </span>
        </div>
      )}

      <div className="session-card__body">
        <span className="session-card__title">{session.title}</span>
        <span className={`session-card__chevron${expanded ? ' session-card__chevron--up' : ''}`}>
          <ChevronDownIcon />
        </span>
      </div>

      <div className="session-card__meta">
        <span className="session-meta-item">
          <ClockIcon />
          {session.startTime} - {session.endTime}
        </span>
        {session.venue && (
          <span className="session-meta-item">
            <MapPinIcon />
            {session.venue}
          </span>
        )}
      </div>

      {expanded && session.description && (
        <div className="session-card__expanded" onClick={(e) => e.stopPropagation()}>
          <p className="session-card__description">{session.description}</p>
          <button className="session-card__more-btn">Mais detalhes</button>
        </div>
      )}
    </div>
  );
}
