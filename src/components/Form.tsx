import { PropsSpent } from '@/interfaces/PropsSpent';
import { FC, useEffect, useState } from 'react';

import Alert from './Alert';

interface FormProps {
  animateModal: boolean;
  saveSpent: (spent: any) => void;
  spentEdit: PropsSpent;
}

const Form: FC<FormProps> = ({ animateModal, saveSpent, spentEdit }) => {
  const [spentObject, setSpentObject] = useState<PropsSpent>({
    id: '',
    nameSpent: '',
    amount: null,
    category: '',
    date: '',
    message: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      [
        spentObject.nameSpent,
        spentObject.amount,
        spentObject.category,
      ].includes('') ||
      (spentObject.amount !== null && spentObject.amount <= 0)
    ) {
      setSpentObject({ ...spentObject, message: true });

      setTimeout(() => {
        setSpentObject({ ...spentObject, message: false });
      }, 3000);

      return;
    }

    saveSpent(spentObject);
  };

  useEffect(() => {
    if (Object.keys(spentObject).length > 0) {
      setSpentObject(spentEdit);
    }
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
    >
      {spentObject.message && (
        <Alert message="Todos los campos son obligatorios" type="error" />
      )}
      <legend>{spentEdit.nameSpent ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

      <div className="campo">
        <label htmlFor="nameSpent">Nombre Gasto</label>
        <input
          id="nameSpent"
          type="text"
          placeholder="Añade el Nombre del Gasto"
          value={spentObject.nameSpent}
          onChange={(e) => {
            setSpentObject({ ...spentObject, nameSpent: e.target.value });
          }}
        />
      </div>

      <div className="campo">
        <label htmlFor="amount">Cantidad</label>
        <input
          id="amount"
          type="number"
          placeholder="Añade el Costo del Gasto: ej. $10.000"
          value={spentObject.amount || ''}
          onChange={(e) => {
            setSpentObject({
              ...spentObject,
              amount: Number(e.target.value),
            });
          }}
        />
      </div>

      <div className="campo">
        <label htmlFor="category">Categoría</label>

        <select
          id="category"
          value={spentObject.category}
          onChange={(e) => {
            setSpentObject({ ...spentObject, category: e.target.value });
          }}
        >
          <option disabled>-- Seleccione --</option>
          <option value="saving">Ahorro</option>
          <option value="eat">Comida</option>
          <option value="home">Hogar</option>
          <option value="debts">Deudas</option>
          <option value="fun">Diversión</option>
          <option value="bills">Suscripciones</option>
          <option value="education">Educación</option>
          <option value="entertainment">Entretenimiento</option>
          <option value="spent">Gastos Varios</option>
          <option value="health">Salud</option>
          <option value="transport">Transporte</option>
        </select>
      </div>

      <button type="submit">
        {spentEdit.nameSpent ? 'Guardar Cambios' : 'Añadir Gasto'}
      </button>
    </form>
  );
};

export default Form;

