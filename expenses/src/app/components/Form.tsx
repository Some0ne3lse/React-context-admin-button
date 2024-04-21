import { Expense } from "../types/types";

type FormType = {
  addExpense: (event: React.FormEvent<HTMLFormElement>) => void;
  newName: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newCost: string;
  handleCostChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  expenses: Expense[] | undefined;
};

const Form = (props: FormType) => {
  return (
    <>
      <form onSubmit={props.addExpense} className="form">
        <p className="name-text">Name</p>
        <input
          type="text"
          name="name"
          value={props.newName}
          onChange={props.handleNameChange}
          className="name-input"
          autoComplete="name"
          required
        />
        <p className="cost-text">Cost</p>
        <input
          type="number"
          name="cost"
          value={props.newCost}
          onChange={props.handleCostChange}
          className="cost-input"
          required
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <h1 className="header">Stats</h1>
      <div className="stats">
        <p>
          Sum:{" "}
          {props.expenses?.reduce(
            (accumulator, currentValue) => accumulator + currentValue.cost,
            0
          )}
        </p>
        <p>Count: {props.expenses?.length}</p>
      </div>
    </>
  );
};

export default Form;
