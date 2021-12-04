import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Czerwiec 28 2020</div>
      <div className="expense-item__description">
        <h2>Samochód OC i AC</h2>
        <div className="expense-item__price">2999,95 zł</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
