import { PropsSpent } from '@/interfaces/PropsSpent';
import { PropsState } from '@/interfaces/PropsState';
import { FC } from 'react';

import ControlBudget from './ControlBudget';
import NewBudget from './NewBudget';

interface HeaderProps extends Omit<PropsState, 'modal' | 'setModal'> {
  spents: PropsSpent[];
  setSpents: React.Dispatch<React.SetStateAction<PropsSpent[]>>;
}

const Header: FC<HeaderProps> = ({
  spents,
  setSpents,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidBudget ? (
        <ControlBudget
          budget={budget}
          spents={spents}
          setSpents={setSpents}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
