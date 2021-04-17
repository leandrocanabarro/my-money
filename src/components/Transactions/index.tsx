import * as React from 'react'

import { Container } from './styles'
import { formattedCurrency, formattedDate } from 'utils'
import { useTransactions } from 'hooks/useTransactions'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' ? '- ' : '+ '}
                {formattedCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formattedDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
