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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  const handleAccept = () => {
    setSpents([]);
    setBudget(0);
    setIsValidBudget(false);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: '300px',
              backgroundColor: 'white',
              padding: '1em',
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'auto',
            }}
          >
            <p style={{ marginBottom: '4rem' }}>
              ¿Estás seguro de querer restaurar la aplicación?
            </p>
            <button
              onClick={handleCancel}
              style={{
                backgroundColor: '#7c7c7c',
                marginLeft: '1em',
                padding: '0.5em 1em',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Cancelar
            </button>
            <button
              onClick={handleAccept}
              style={{
                backgroundColor: '#1f3f72',
                marginLeft: '1em',
                padding: '0.5em 1em',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}% Gastado`}
            styles={buildStyles({
              pathColor: percentage > 100 ? '#dc2626' : '#1f3f72',
              trailColor: '#eeeeee',
              textColor: percentage > 100 ? '#dc2626' : '#1f3f72',
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
    </>
  );
};

export default ControlBudget;
