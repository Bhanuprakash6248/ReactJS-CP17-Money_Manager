// Write your code here
import './index.css'

const balanceImg =
  'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png'
const incomeImg =
  'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png '
const expenses =
  'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png'

const MoneyDetails = props => {
  const {bal, exp, income} = props
  return (
    <div className="moneyDetails-con">
      <div className="balance-con bal">
        <img src={balanceImg} alt="balance" className="img" />
        <div className="text">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {bal}</p>
        </div>
      </div>
      <div className="balance-con income">
        <img src={incomeImg} alt="income" className="img" />
        <div className="text">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="balance-con exp">
        <img src={expenses} alt="expenses" className="img" />
        <div className="text">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {exp}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
