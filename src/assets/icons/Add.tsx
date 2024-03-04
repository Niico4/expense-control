import { FC, SVGProps } from 'react';

type SvgComponentProps = SVGProps<SVGSVGElement>;

const AddIcon: FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Capa_1"
    data-name="Capa 1"
    viewBox="0 0 321.54 321.54"
    {...props}
  >
    <defs>
      <style>{'.cls-2{fill:#fff}'}</style>
    </defs>
    <circle
      cx={160.77}
      cy={160.77}
      r={160.77}
      style={{
        fill: '#1f3f72',
      }}
    />
    <path d="M146.15 85.77h29.23v150h-29.23z" className="cls-2" />
    <path d="M85.77 175.39v-29.23h150v29.23z" className="cls-2" />
  </svg>
);
export default AddIcon;

