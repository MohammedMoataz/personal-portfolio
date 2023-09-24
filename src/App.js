import React from 'react'

import Main from "./pages/main/main.js"
import { AppProvider } from './context/context/context.js'
import './App.css'

const App = () =>
  <AppProvider>
    <Main />
  </AppProvider>

export default App
