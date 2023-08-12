import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'


const theme = {
  colors:{
    header_background : '#e8f1d7',
    header_color : '#193d0b',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </Router>,
)
