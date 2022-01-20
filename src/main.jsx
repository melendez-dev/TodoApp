import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

// import theme dark
import theme from '../theme'

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
