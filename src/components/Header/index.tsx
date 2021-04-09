import { Container, Content, Logo } from './styles'

import { HeaderProps } from 'types'
import { ReactComponent as IconLogo } from 'assets/logo.svg'

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <IconLogo />
          Minha Grana
        </Logo>

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
