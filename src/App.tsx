import { useState } from 'react';
import { TabId } from './types';
import { eventData } from './data';
import EventHeader from './components/EventHeader';
import EventInfo from './components/EventInfo';
import ActionButtons from './components/ActionButtons';
import TabBar from './components/TabBar';
import HomeTab from './components/HomeTab';
import MaterialsTab from './components/MaterialsTab';
import ScheduleTab from './components/ScheduleTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('inicio');
  const [sobreExpanded, setSobreExpanded] = useState(false);
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set());

  const toggleSession = (id: string) => {
    setExpandedSessions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const goToTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <EventHeader />
      <EventInfo event={eventData} />
      <ActionButtons ticketCount={eventData.ticketCount} />
      <TabBar activeTab={activeTab} onTabChange={goToTab} />

      <div className="tab-content">
        {activeTab === 'inicio' && (
          <HomeTab
            event={eventData}
            sobreExpanded={sobreExpanded}
            onToggleSobre={() => setSobreExpanded((v) => !v)}
            expandedSessions={expandedSessions}
            onToggleSession={toggleSession}
            onGoToMateriais={() => goToTab('materiais')}
            onGoToProgramacao={() => goToTab('programacao')}
          />
        )}
        {activeTab === 'materiais' && <MaterialsTab materials={eventData.materials} />}
        {activeTab === 'programacao' && (
          <ScheduleTab
            schedule={eventData.schedule}
            expandedSessions={expandedSessions}
            onToggleSession={toggleSession}
          />
        )}
      </div>
    </div>
  );
}
