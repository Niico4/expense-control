import { ButtonProps } from '@/interfaces/ButtonProps';
import { FC } from 'react';
import Icon from './icon';
import AddIcon from '@/assets/icons/Add';

const FloatButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" style={{ all: 'unset' }} onClick={onClick}>
      <Icon component={AddIcon} size={'5rem'} />
    </button>
  );
};

export default FloatButton;

