// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, toggleDelete} = props

  const {id, title, amount, type} = transactionDetails

  const deleteBtnClicked = () => {
    toggleDelete(id)
  }
  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="btn"
        data-testid="delete"
        onClick={deleteBtnClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt=" delete"
          className="deleteBtn"
        />
      </button>
    </li>
  )
}
export default TransactionItem
