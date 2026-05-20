import { BackIcon, DotsIcon } from '../icons';

export default function EventHeader() {
  return (
    <div className="hero">
      <button className="hero__btn hero__back" onClick={() => window.history.back()}>
        <BackIcon />
      </button>

      <button className="hero__btn hero__menu">
        <DotsIcon />
      </button>

      <div className="hero__gradient" />
    </div>
  );
}
