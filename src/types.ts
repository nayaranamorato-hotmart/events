export type MaterialType = 'youtube' | 'pdf-image' | 'pdf-icon' | 'link' | 'file';

export interface Material {
  id: string;
  type: MaterialType;
  title: string;
  subtitle?: string;
}

export interface Speaker {
  id: string;
  name: string;
  initials: string;
  color: string;
}

export interface Session {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  speakers?: Speaker[];
  venue?: string;
  description?: string;
}

export interface DayGroup {
  day: number;
  dayName: string;
  sessions: Session[];
}

export interface EventData {
  id: string;
  name: string;
  date: string;
  location: string;
  ticketCount: number;
  about: string;
  aboutHtml: string;
  materials: Material[];
  schedule: DayGroup[];
}

export type TabId = 'inicio' | 'materiais' | 'programacao';
