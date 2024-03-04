import { ComponentType, FC, SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

interface Props {
  size?: string | number;
  color?: string;
  style?: React.CSSProperties;
  component: ComponentType<SvgComponentProps>;
  className?: string;
}

const Icon: FC<Props> = ({
  size = 24,
  color = '#000',
  style,
  className,
  component: Component,
}) => {
  const width = size;
  const height = size;
  return (
    <Component
      width={width}
      height={height}
      className={className}
      fill={color}
      style={style}
    />
  );
};

export default Icon;
