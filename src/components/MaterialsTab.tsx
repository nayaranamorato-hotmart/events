import { Material } from '../types';
import MaterialItem from './MaterialItem';

interface Props {
  materials: Material[];
}

export default function MaterialsTab({ materials }: Props) {
  return (
    <div className="material-list">
      {materials.map((m) => (
        <MaterialItem key={m.id} material={m} />
      ))}
    </div>
  );
}
