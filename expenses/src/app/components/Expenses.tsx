import { useEffect, useMemo, useState } from "react";
import { Expense } from "../types/types";
import { api } from "../api/api";
import AdminButton from "./AdminButton";
import ExpenseList from "./ExpenseList";
import Form from "./Form";
import { AdminRightsContext } from "../context/AdminRightsContext";

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>();
  const [newName, setNewName] = useState("");
  const [newCost, setNewCost] = useState("");
  const [showButton, setShowButton] = useState<boolean>(true);

  const fetchExpenses = async () => {
    const fetchedExpenses = await api.getExpenses();
    setExpenses(fetchedExpenses);
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseObject = {
      name: newName,
      cost: +newCost,
    };
    api.postExpenses(expenseObject).then(fetchExpenses);
    setNewName("");
    setNewCost("");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCost(event.target.value);
  };

  const handleDelete = (id: number) => {
    api.deleteExpense(id).then(fetchExpenses);
  };

  const toggleValue = () => {
    setShowButton((t) => !t);
  };

  const contextProviderValue = useMemo(
    () => ({
      value: showButton,
      toggleValue,
    }),
    [showButton]
  );

  return (
    <AdminRightsContext.Provider value={contextProviderValue}>
      <div className="entire-screen">
        <div>
          <div className="contents">
            <div className="input">
              <h1 className="header">Add Expense</h1>
              <Form
                addExpense={addExpense}
                newName={newName}
                handleNameChange={handleNameChange}
                newCost={newCost}
                handleCostChange={handleCostChange}
                expenses={expenses}
              />
              <AdminButton />
            </div>
            <ExpenseList
              expenses={expenses}
              handleDelete={handleDelete}
              showButton={showButton}
            />
          </div>
        </div>
      </div>
    </AdminRightsContext.Provider>
  );
};

export default Expenses;
