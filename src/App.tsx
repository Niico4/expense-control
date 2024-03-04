import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import FloatButton from './components/ButtonFloat';
import Form from './components/Form';
import Header from './components/Header';
import ListSpent from './components/ListSpent';
import Modal from './components/Modal';
import { PropsSpent } from './interfaces/PropsSpent';
import Filter from './components/Filters';

const EMPTY_SPENT = {
  id: '',
  nameSpent: '',
  amount: 0,
  category: '',
  date: '',
};

const App = () => {
  const [budget, setBudget] = useState<number>(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [animationModal, setAnimationModal] = useState<boolean>(false);
  const [spents, setSpents] = useState<PropsSpent[]>(
    localStorage.getItem('spents')
      ? JSON.parse(localStorage.getItem('spents') ?? '')
      : []
  );
  const [spentEdit, setSpentEdit] = useState<PropsSpent>(EMPTY_SPENT);
  const [filter, setFilter] = useState<string>('');
  const [filterSpents, setFilterSpents] = useState<PropsSpent[]>([]);

  useEffect(() => {
    if (spentEdit.id !== '') {
      handleNewSpent();
    }
  }, [spentEdit]);

  useEffect(() => {
    localStorage.setItem('budget', String(budget) ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('spents', JSON.stringify(spents));
  }, [spents]);

  useEffect(() => {
    if (filter) {
      const filterSpents = spents.filter((spent) => spent.category === filter);
      setFilterSpents(filterSpents);
    }
  }, [filter]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setAnimationModal(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setAnimationModal(false);
    setSpentEdit({
      id: '',
      nameSpent: '',
      amount: 0,
      category: '',
      date: '',
    });

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSaveSpent = (spent: PropsSpent) => {
    if (spentEdit.id) {
      const spentUpdate = spents.map((spentState) =>
        spent.id === spentState.id ? spent : spentState
      );

      setSpents(spentUpdate);
    } else {
      spent.id = nanoid();
      spent.date = new Date().toLocaleDateString('es-ES', {
        dateStyle: 'full',
      });
      setSpents([...spents, spent]);
    }

    setAnimationModal(false);
    setSpentEdit({
      id: '',
      nameSpent: '',
      amount: 0,
      category: '',
      date: '',
    });
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleDeleteSpent = (id: string) => {
    const spentDelete = spents.filter((spent) => spent.id !== id);
    setSpents(spentDelete);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        spents={spents}
        setSpents={setSpents}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <Filter filter={filter} setFilter={setFilter} />
            <ListSpent
              spents={spents}
              setSpentEdit={setSpentEdit}
              handleDeleteSpent={handleDeleteSpent}
              filter={filter}
              filterSpents={filterSpents}
            />
          </main>
          <div className="nuevo-gasto">
            <FloatButton onClick={handleNewSpent} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          isOpen={modal}
          onClose={handleCloseModal}
          animateModal={animationModal}
        >
          <Form
            saveSpent={handleSaveSpent}
            animateModal={animationModal}
            spentEdit={spentEdit}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;

