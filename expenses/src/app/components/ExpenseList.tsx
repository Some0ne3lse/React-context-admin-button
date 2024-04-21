import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Expense } from "../types/types";

type ExpenseListType = {
  expenses: Expense[] | undefined;
  handleDelete: (id: number) => void;
  showButton: boolean;
};

const ExpenseList = ({
  expenses,
  handleDelete,
  showButton,
}: ExpenseListType) => {
  return (
    <div className="contents-card">
      <ul className="expenses-list">
        <AnimatePresence>
          {expenses?.map((expense) => (
            <motion.li
              key={expense.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <div className="card-text">
                <div className="card-name">
                  <div className="card-name-text">Name: </div>
                  <div>{expense.name}</div>
                </div>
                <div className="card-cost">
                  <div className="card-cost-text">Cost: </div>
                  <div>{expense.cost}</div>
                </div>
              </div>
              {showButton && (
                <FontAwesomeIcon
                  icon={faX}
                  onClick={() => handleDelete(expense.id)}
                  style={{ cursor: "pointer" }}
                  className="icon"
                />
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ExpenseList;
