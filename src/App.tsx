import * as React from 'react'

import { Dasboard } from 'components/Dashboard'
import { GlobalStyle } from 'styles/global'
import { Header } from 'components/Header'

export function App() {
  return (
    <>
      <Header />
      <Dasboard />
      <GlobalStyle />
    </>
  )
}
