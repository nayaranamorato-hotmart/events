import { CalendarIcon, LocationIcon, TicketIcon } from '../icons';

interface Props {
  ticketCount: number;
}

export default function ActionButtons({ ticketCount }: Props) {
  return (
    <div className="action-buttons">
      <button className="btn-tickets">
        <TicketIcon />
        Mostrar ingressos ({ticketCount})
      </button>

      <div className="btn-row">
        <button className="btn-secondary">
          <CalendarIcon />
          Calendário
        </button>
        <button className="btn-secondary">
          <LocationIcon />
          Localização
        </button>
      </div>
    </div>
  );
}
