import * as React from 'react'

import { Container, Content, Logo } from './styles'

import { ReactComponent as IconLogo } from 'assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <IconLogo />
          Minha Grana
        </Logo>

        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  )
}
