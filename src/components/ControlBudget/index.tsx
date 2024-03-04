import { PropsSpent } from '@/interfaces/PropsSpent';
import { PropsState } from '@/interfaces/PropsState';
import Utils from '@/utils';
import { FC, useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

interface ControlBudgetProps extends Pick<PropsState, 'budget'> {
  spents: any;
  setSpents: React.Dispatch<React.SetStateAction<PropsSpent[]>>;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  setIsValidBudget: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlBudget: FC<ControlBudgetProps> = ({
  budget,
  spents,
  setSpents,
  setBudget,
  setIsValidBudget,
}) => {
  const [available, setAvailable] = useState<number>(budget);
  const [used, setUsed] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const totalUsed = spents.reduce(
      (total: number, spent: PropsSpent) =>
        spent.amount ? spent.amount + total : total,
      0
    );

    const totalAvailable = budget - totalUsed;

    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setUsed(totalUsed);
    setAvailable(totalAvailable);
    setPercentage(String(newPercentage) as unknown as number);
  }, [spents]);

  const handleResetApp = () => {
    const result = confirm('¿Estás seguro de querer restaurar la aplicación?');

    if (result) {
      setSpents([]);
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <h3 style={{ fontWeight: 900, color: '#007bff', fontSize: '2.4rem' }}>
          Gastado:
        </h3>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: percentage > 100 ? '#dc2626' : '#007bff',
            trailColor: '#eeeeee',
            textColor: percentage > 100 ? '#dc2626' : '#007bff',
            pathTransitionDuration: 4,
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button type="button" className="reset-app" onClick={handleResetApp}>
          Restaurar
        </button>
        <p>
          <span>Presupuesto: </span> {Utils.formatCurrency(budget)}
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span> {Utils.formatCurrency(available)}
        </p>
        <p>
          <span>Gastado: </span> {Utils.formatCurrency(used)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;

