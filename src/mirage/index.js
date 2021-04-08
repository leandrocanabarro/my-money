import { Model, createServer } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Venda notebook',
            type: 'deposit',
            category: 'receita',
            amount: 4000,
            createdAt: new Date('2021-04-01 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'despesa',
            amount: 800,
            createdAt: new Date('2021-04-05 10:00:00'),
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      })
    },
  })
}
