import { PropsSpent } from '@/interfaces/PropsSpent';
import { FC } from 'react';

import Spent from './Spent';

interface ListSpentProps {
  spents: PropsSpent[];
  setSpentEdit: React.Dispatch<React.SetStateAction<PropsSpent>>;
  handleDeleteSpent: (id: string) => void;
  filter: string;
  filterSpents: PropsSpent[];
}

const ListSpent: FC<ListSpentProps> = ({
  spents,
  setSpentEdit,
  handleDeleteSpent,
  filter,
  filterSpents,
}) => {
  const spentsToDisplay = filter ? filterSpents : spents;
  return (
    <div className="listado-gastos contenedor">
      <h2>{spentsToDisplay.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
      {spentsToDisplay.map(({ id, nameSpent, amount, category, date }) => {
        return (
          <ul key={id} style={{ padding: 0 }}>
            <Spent
              id={id}
              nameSpent={nameSpent}
              amount={amount}
              category={category}
              date={date}
              setSpentEdit={setSpentEdit}
              spent={{ id, nameSpent, amount, category, date }}
              handleDeleteSpent={handleDeleteSpent}
            />
          </ul>
        );
      })}
    </div>
  );
};

export default ListSpent;

