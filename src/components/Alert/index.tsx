import { FC } from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

const Alert: FC<AlertProps> = ({ message, type }) => {
  return (
    <div className={`alerta ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;

