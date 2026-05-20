import { Material } from '../types';
import { ExternalLinkIcon, DownloadIcon, LinkIcon, FileDownloadIcon } from '../icons';

interface Props {
  material: Material;
  compact?: boolean;
}

function YouTubeThumb() {
  return (
    <div
      className="material-item__thumb-inner"
      style={{
        background: 'linear-gradient(135deg, #b02020 0%, #5c1010 60%, #2a0808 100%)',
        position: 'relative',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    </div>
  );
}

function PizzaThumb() {
  return (
    <div
      className="material-item__thumb-inner"
      style={{
        background: 'linear-gradient(135deg, #c0622a 0%, #8B3500 60%, #5a2000 100%)',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,200,150,0.6)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 L12 21" />
        <path d="M3 12 L21 12" />
        <circle cx="8" cy="8" r="1.5" fill="rgba(255,200,150,0.6)" stroke="none" />
        <circle cx="15" cy="15" r="1.5" fill="rgba(255,200,150,0.6)" stroke="none" />
      </svg>
    </div>
  );
}

function PdfIconBox() {
  return (
    <div className="material-item__icon material-item__icon--pdf">
      <span className="pdf-text">PDF</span>
    </div>
  );
}

function LinkIconBox() {
  return (
    <div className="material-item__icon material-item__icon--link">
      <LinkIcon />
    </div>
  );
}

function FileIconBox() {
  return (
    <div className="material-item__icon material-item__icon--file">
      <FileDownloadIcon />
    </div>
  );
}

export default function MaterialItem({ material, compact = false }: Props) {
  const isDownload = material.type === 'pdf-image' || material.type === 'pdf-icon' || material.type === 'file';

  if (compact) {
    return (
      <div className="mat-card">
        <div className="mat-card__thumb">
          <div className="mat-card__thumb-inner">
            {material.type === 'youtube' && <YouTubeThumb />}
            {material.type === 'pdf-image' && <PizzaThumb />}
            {material.type === 'pdf-icon' && <PdfIconBox />}
            {material.type === 'link' && <LinkIconBox />}
            {material.type === 'file' && <FileIconBox />}
          </div>
        </div>
        <div className="mat-card__info">
          <div className="mat-card__title">{material.title}</div>
          {material.subtitle && (
            <div className="mat-card__subtitle">{material.subtitle}</div>
          )}
        </div>
        <span className="mat-card__action">
          {isDownload ? <DownloadIcon /> : <ExternalLinkIcon />}
        </span>
      </div>
    );
  }

  return (
    <div className="material-item">
      <div className="material-item__media">
        {(material.type === 'youtube' || material.type === 'pdf-image') ? (
          <div className="material-item__thumb">
            <div className="material-item__thumb-inner">
              {material.type === 'youtube' ? <YouTubeThumb /> : <PizzaThumb />}
            </div>
          </div>
        ) : material.type === 'pdf-icon' ? (
          <PdfIconBox />
        ) : material.type === 'link' ? (
          <LinkIconBox />
        ) : (
          <FileIconBox />
        )}
      </div>

      <div className="material-item__info">
        <div className="material-item__title">{material.title}</div>
        {material.subtitle && (
          <div className="material-item__subtitle">{material.subtitle}</div>
        )}
      </div>

      <button className="material-item__action">
        {isDownload ? <DownloadIcon /> : <ExternalLinkIcon />}
      </button>
    </div>
  );
}
