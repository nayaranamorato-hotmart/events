import { TabId } from '../types';

interface Props {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'materiais', label: 'Materiais' },
  { id: 'programacao', label: 'Programação' },
];

export default function TabBar({ activeTab, onTabChange }: Props) {
  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-bar__tab${activeTab === tab.id ? ' tab-bar__tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
