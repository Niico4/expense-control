export interface PropsState {
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  isValidBudget: boolean;
  setIsValidBudget: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

