import { Container } from './styles'
import { ReactComponent as IconIncome } from 'assets/income.svg'
import { ReactComponent as IconOutcome } from 'assets/outcome.svg'
import { ReactComponent as IconTotal } from 'assets/total.svg'
import { useTransactions } from 'hooks/useTransactions'
import { formattedCurrency } from 'utils'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <IconIncome />
        </header>
        <strong>+ {formattedCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <IconOutcome />
        </header>
        <strong>- {formattedCurrency(summary.withdraw)}</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <IconTotal />
        </header>
        <strong>{formattedCurrency(summary.total)}</strong>
      </div>
    </Container>
  )
}
