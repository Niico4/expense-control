import { ErrorIcon } from '@/assets/icons';
import { PropsSpent } from '@/interfaces/PropsSpent';
import Utils from '@/utils';
import { FC } from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';

import Icon from '../icon';
import { categoryColors, categoryIcons, categoryNames } from './mappings';

import 'react-swipeable-list/dist/styles.css';

interface Spent extends PropsSpent {
  spent: PropsSpent;
  setSpentEdit: React.Dispatch<React.SetStateAction<PropsSpent>>;
  handleDeleteSpent: (id: string) => void;
}

const Spent: FC<Spent> = ({
  spent,
  nameSpent,
  category,
  date,
  amount,
  setSpentEdit,
  handleDeleteSpent,
}) => {
  const IconComponent = categoryIcons[category] || ErrorIcon;
  const color = categoryColors[category] || '#000000';
  const categoryName = categoryNames[category] || 'No definido';

  const handleLeadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setSpentEdit(spent)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const handleTrailingActionss = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => handleDeleteSpent(spent.id)}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={handleLeadingActions()}
        trailingActions={handleTrailingActionss()}
      >
        <li className="gasto sombra">
          <div className="contenido-gasto">
            <div
              style={{
                width: 80,
                height: 80,
                background: color,
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon component={IconComponent} size={40} color="#fff" />
            </div>
            <div className="descripcion-gasto">
              <p>{categoryName}</p>
              <p className="nombre-gasto">{nameSpent}</p>
              <p className="fecha-gasto">
                Agregado el: {''} <span>{date}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">
            {amount !== null ? Utils.formatCurrency(amount) : ''}
          </p>
        </li>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Spent;

