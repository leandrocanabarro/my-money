import { ReactComponent as IconClose } from 'assets/close.svg'
import Modal from 'react-modal'
import { NewTransactionModalProps } from 'types'

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <IconClose />
      </button>

      <h2>Cadastrar transação</h2>
    </Modal>
  )
}
