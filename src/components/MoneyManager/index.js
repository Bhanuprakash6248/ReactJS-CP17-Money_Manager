const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  addForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, transactionList, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )

    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prev => ({
      transactionList: [...prev.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }
  balanceAmount = () => {
    const {transactionList} = this.state
    let expAmount = 0
    let amount = 0
    let balAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        amount += each.amount
      } else {
        expAmount += each.amount
      }
    })

    balAmount = amount - expAmount
    return balAmount
  }

  incomeAmount = () => {
    const {transactionList} = this.state
    let amount = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        amount += each.amount
      }
    })
    return amount
  }

  expensesAmount = () => {
    const {transactionList} = this.state
    let expAmount = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expAmount += each.amount
      }
    })
    return expAmount
  }

  onAmountInput = e => {
    this.setState({amountInput: e.target.value})
  }

  onTitleInput = e => {
    this.setState({titleInput: e.target.value})
  }

  onOption = e => {
    this.setState({optionId: e.target.value})
  }

  toggleDelete = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: filteredList})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.balanceAmount()
    const incomeAmount = this.incomeAmount()
    const expensesAmount = this.expensesAmount()

    return (
      <div className="bg">
        <div className="card">
          <div className="con-1">
            <h1>Hi,Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="con-2">
            <MoneyDetails
              bal={balanceAmount}
              income={incomeAmount}
              exp={expensesAmount}
            />
          </div>
          <div className="con-3">
            <form className="form-con" onSubmit={this.addForm}>
              <h1>Add Transaction</h1>
              <div className="title-con">
                <label htmlFor="titleInput">TITLE</label>
                <input
                  type="text"
                  id="titleInput"
                  placeholder="TITLE"
                  onChange={this.onTitleInput}
                  value={titleInput}
                />
              </div>
              <div className="amount-con">
                <label htmlFor="amountInput">AMOUNT</label>
                <input
                  type="text"
                  id="amountInput"
                  placeholder="AMOUNT"
                  onChange={this.onAmountInput}
                  value={amountInput}
                />
              </div>
              <div className="dropDown-con">
                <label htmlFor="options">TYPE</label>
                <select id="options" onChange={this.onOption} value={optionId}>
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn" type="submit">
                add
              </button>
            </form>
            <div>
              <h1>History</h1>
              <div>
                <ul className="table">
                  <li className="table-header">
                    <p>Title</p>
                    <p>Amount</p>
                    <p>Type</p>
                  </li>
                  {transactionList.map(each => (
                    <TransactionItem
                      key={each.id}
                      transactionDetails={each}
                      toggleDelete={this.toggleDelete}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
