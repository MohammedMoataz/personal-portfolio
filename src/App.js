import React, { useEffect, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"
import {
  Box,
  CssBaseline,
  Container,
} from '@mui/material'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { AppProvider } from './context/context/context.js'
import ResponsiveAppBar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'
import Main from "./pages/main/main.js"
import Projects from "./pages/projects/projects.js"
import Preloading from "./pages/preloading/preloading.js"

const App = () => {
  const [preloading, setPreloading] = useState(true)

  useEffect(() => {
    setTimeout(() => { setPreloading(false) }, 2000)

    Aos.init({ duration: 1000 })
  }, [])

  return <AppProvider>
    {preloading
      ? <Preloading />
      : <React.Fragment>
        <CssBaseline />
        <Router>
          <Box sx={{ bgcolor: '#1e1e1e', padding: '0 5%', }}>
            <Container maxWidth="xl">
              <ResponsiveAppBar />
              <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path='/projects' element={<Projects />} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </Router>
      </React.Fragment>
    }
  </AppProvider>
}

export default App
