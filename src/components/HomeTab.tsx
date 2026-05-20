import { EventData } from '../types';
import { ArrowRightIcon } from '../icons';
import MaterialItem from './MaterialItem';
import ScheduleItem from './ScheduleItem';

interface Props {
  event: EventData;
  sobreExpanded: boolean;
  onToggleSobre: () => void;
  expandedSessions: Set<string>;
  onToggleSession: (id: string) => void;
  onGoToMateriais: () => void;
  onGoToProgramacao: () => void;
}

export default function HomeTab({
  event,
  sobreExpanded,
  onToggleSobre,
  expandedSessions,
  onToggleSession,
  onGoToMateriais,
  onGoToProgramacao,
}: Props) {
  const previewMaterials = event.materials.slice(0, 4);

  return (
    <>
      {/* Sobre */}
      <div className="section">
        <h2 className="section-title" style={{ marginBottom: 12 }}>Sobre</h2>

        {sobreExpanded ? (
          <>
            <div
              className="sobre__text"
              dangerouslySetInnerHTML={{ __html: event.aboutHtml }}
            />
            <button className="sobre__toggle sobre__toggle--less" onClick={onToggleSobre}>
              Mostrar menos
            </button>
          </>
        ) : (
          <>
            <p className="sobre__collapsed">{event.about}</p>
            <div className="sobre__toggle-row">
              <button className="sobre__toggle" onClick={onToggleSobre}>
                Mostrar mais
              </button>
            </div>
          </>
        )}
      </div>

      {/* Materiais */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Materiais</h2>
          <button className="section-link" onClick={onGoToMateriais}>
            Tudo ({event.materials.length})
            <ArrowRightIcon />
          </button>
        </div>

        <div className="materials-carousel">
          {previewMaterials.map((m) => (
            <MaterialItem key={m.id} material={m} compact />
          ))}
        </div>
      </div>

      {/* Programação preview */}
      <div className="section">
        <h2 className="section-title" style={{ marginBottom: 14 }}>Programação</h2>

        <div className="schedule-list">
          {event.schedule.map((dayGroup) => (
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

        <button className="btn-show-all" onClick={onGoToProgramacao}>
          Mostrar tudo
        </button>
      </div>
    </>
  );
}
