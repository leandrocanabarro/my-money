import * as React from 'react'

import { App } from 'App'
import ReactDOM from 'react-dom'
import { makeServer } from './mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
