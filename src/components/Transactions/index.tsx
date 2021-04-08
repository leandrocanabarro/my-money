import * as React from 'react'

import { Container } from './styles'
import { api } from 'services/api'

export function Transactions() {
  React.useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data))
  }, [])

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
          <tr>
            <td>Venda notebook</td>
            <td className="deposit">R$ 4000,00</td>
            <td>Receita</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Gasolina</td>
            <td className="withdraw">- R$ 400,00</td>
            <td>Despesa</td>
            <td>12/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
