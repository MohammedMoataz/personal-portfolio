import React from 'react'
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

import { AppProvider } from './context/context/context.js'
import ResponsiveAppBar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'
import Main from "./pages/main/main.js"
import Projects from "./pages/projects/projects.js"

import './App.css'

const App = () =>
  <AppProvider>
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Box sx={{
          bgcolor: '#1e1e1e',
          padding: '0 12%',
        }}>
          <Container maxWidth="xl">
            <ResponsiveAppBar />
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route path="*" element={() => "404 NOT FOUND"} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </React.Fragment>
  </AppProvider >

export default App
