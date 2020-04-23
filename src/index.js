import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Main from './app/Main'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body,
#app,
.wrapper {
  min-height: 100vh;
  height: 100%;
  
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

* {
  &,
  &::after,
  &::before {
    box-sizing: inherit;
  }
}

body {
  padding: 0;
  margin: 0;
  font: 1rem / 1.414 arial, sans-serif;
}
`

const wrapper  = document.querySelector('#app')

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

ReactDOM.render(<App />, wrapper)
