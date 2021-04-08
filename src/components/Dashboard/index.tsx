import { Container } from './styles'
import { Summary } from 'components/Summary'
import { Transactions } from 'components/Transactions'

export function Dasboard() {
  return (
    <Container>
      <Summary />
      <Transactions />
    </Container>
  )
}
