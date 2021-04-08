import { Container } from './styles'
import { ReactComponent as IconIncome } from 'assets/income.svg'
import { ReactComponent as IconOutcome } from 'assets/outcome.svg'
import { ReactComponent as IconTotal } from 'assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <IconIncome />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <IconOutcome />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <IconTotal />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
