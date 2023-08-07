
import './ExpenseItems.css';
const ExpenseItems = (props) => {
  return (
    <div className='expense-item'>
      <div>March 28th 2023</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>Amount</div>
      </div>
    </div>
  );
};

export default ExpenseItems;
