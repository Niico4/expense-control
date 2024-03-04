import { FC } from 'react';

interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="category">Filtra tus gastos</label>
          <select
            name="category"
            id="category"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="">Todas las Categorías</option>
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
      </form>
    </div>
  );
};

export default Filter;

