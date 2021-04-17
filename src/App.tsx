import * as React from 'react'

import { Dasboard } from 'components/Dashboard'
import { GlobalStyle } from 'styles/global'
import { Header } from 'components/Header'
import Modal from 'react-modal'
import { NewTransactionModal } from 'components/NewTransactionModal'
import { TransactionsProvider } from 'hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dasboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  )
}
