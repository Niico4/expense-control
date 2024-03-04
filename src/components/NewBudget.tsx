import { FC, useState } from 'react';

import Alert from './Alert';
import { PropsState } from '@/interfaces/PropsState';

interface PropsNewBudget
  extends Omit<PropsState, 'isValidBudget' | 'modal' | 'setModal'> {}

const NewBudget: FC<PropsNewBudget> = ({
  budget,
  setBudget,
  setIsValidBudget,
}) => {
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage('El presupuesto no es válido');

      return;
    }

    setMessage('');
    setIsValidBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form action="" className="formulario">
        <div className="campo">
          <label htmlFor="budget">Definir Presupuesto</label>
          <input
            id="budget"
            type="number"
            className="nuevo-preupuesto"
            placeholder="Añade tu presupuesto"
            onChange={(e) => {
              setBudget(Number(e.target.value));
            }}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Añadir
        </button>

        {message && (
          <Alert message="El presupuesto no es válido" type="error" />
        )}
      </form>
    </div>
  );
};

export default NewBudget;

