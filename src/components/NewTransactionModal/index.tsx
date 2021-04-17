import * as React from 'react'

import { FormContainer, RadioBox, TransactionTypeContainer } from './styles'

import { ReactComponent as IconClose } from 'assets/close.svg'
import { ReactComponent as IconIncome } from 'assets/income.svg'
import { ReactComponent as IconOutcome } from 'assets/outcome.svg'
import Modal from 'react-modal'
import { NewTransactionModalProps } from 'types'
import { useTransactions } from 'hooks/useTransactions'

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [category, setCategory] = React.useState('')
  const [type, setType] = React.useState('deposit')

  const handleCreateNewTransaction = async (event: React.FormEvent) => {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

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

      <FormContainer onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={() => {
              setType('deposit')
            }}
            activeColor="green"
          >
            <IconIncome />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <IconOutcome />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  )
}
