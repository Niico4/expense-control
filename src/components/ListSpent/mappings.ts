import {
  BillsIcon,
  DebtsIcon,
  EatIcon,
  EducationIcon,
  EntertainmentIcon,
  FunIcon,
  HealthIcon,
  HomeIcon,
  SavingIcon,
  SpentIcon,
  TransportIcon,
} from '@/assets/icons';

interface CategoryData {
  [key: string]: any;
}

export const categoryIcons: CategoryData = {
  saving: SavingIcon,
  home: HomeIcon,
  eat: EatIcon,
  debts: DebtsIcon,
  fun: FunIcon,
  education: EducationIcon,
  entertainment: EntertainmentIcon,
  spent: SpentIcon,
  health: HealthIcon,
  bills: BillsIcon,
  transport: TransportIcon,
};

export const categoryColors: CategoryData = {
  saving: '#ff00ddc0',
  home: '#474747c0',
  eat: '#0d00cac0',
  debts: '#ca9b00c0',
  fun: '#ca5b00c0',
  education: '#006fcac0',
  entertainment: '#00919190',
  spent: '#00aa09c0',
  health: '#ca0000c0',
  bills: '#5800cac0',
  transport: '#000000c0',
};

export const categoryNames: CategoryData = {
  saving: 'Ahorro',
  home: 'Hogar',
  eat: 'Comida',
  debts: 'Deudas',
  fun: 'Diversión',
  education: 'Educación',
  entertainment: 'Entretenimiento',
  spent: 'Gastos Varios',
  health: 'Salud',
  bills: 'Suscripciones',
  transport: 'Transporte',
};

