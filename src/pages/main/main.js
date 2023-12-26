import React, { useEffect } from 'react'
import {
    Toolbar,
} from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Home from './../../components/home/home.js'
import About from './../../components/about/about.js'
import Skills from './../../components/skills/skills.js'
import Services from './../../components/services/services.js'
import Contact from './../../components/contact/contact.js'
import FloatingActionButton from './../../utils/floatingActionButton.js'

const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <React.Fragment>
            <div id='Home'></div>
            <Toolbar />
            <Toolbar />
            <Home />

            <div id='About'></div>
            <Toolbar />
            <Toolbar />
            <About />

            <div id='Skills'></div>
            <Toolbar />
            <Toolbar />
            <Skills />

            <div id='Services'></div>
            <Toolbar />
            <Toolbar />
            <Services />

            <div id='Contact'></div>
            <Toolbar />
            <Toolbar />
            <Contact />

            <Toolbar />
            <FloatingActionButton />
        </React.Fragment>
    )
}

export default Main