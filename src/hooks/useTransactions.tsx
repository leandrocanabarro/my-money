import * as React from 'react'

import { api } from 'services/api'
import { Transaction, TransactionInput, TransactionsContextData, TransactionsProviderProps } from 'types'

const TransactionsContext = React.createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([])

  React.useEffect(() => {
    api.get('transactions').then((response) => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })

    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = React.useContext(TransactionsContext)

  return context
}
