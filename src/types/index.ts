export interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
