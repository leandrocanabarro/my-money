export interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: Date
}
