import React, { useContext } from 'react'
import {
    Box,
    Toolbar,
    CssBaseline,
    Container,
} from '@mui/material'

import ResponsiveAppBar from "./../../components/navbar/navbar.js"
import Home from './../../components/home/home.js'
import About from './../../components/about/about.js'
import Services from './../../components/services/services.js'
import Skills from './../../components/skills/skills.js'
// import Projects from './../../components/projects/projects.js'
import Contact from './../../components/contact/contact.js'
import Footer from './../../components/footer/footer.js'
import { AppContext } from './../../context/context/context.js'
// import Chat from './../../components/chat/chat.js'
import Divider from './../../utils/divider.js'

const Main = () => {
    const { state } = useContext(AppContext)

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ backgroundColor: state.color.dark }}>
                <Container>
                    <ResponsiveAppBar />
                    <Toolbar />
                    <div id='Home'></div>
                    <Toolbar />
                    <Toolbar />

                    <Home />
                    <Toolbar />
                    <div id='About'></div>
                    <Toolbar />
                    <Divider />
                    <Toolbar />

                    <About />
                    <div id='Skills'></div>
                    <Toolbar />
                    <Divider />
                    <Toolbar />

                    <Skills />
                    <div id='Services'></div>
                    <Toolbar />
                    <Divider />

                    <Toolbar />
                    <Services />
                    {/* <div id='Projects'></div>
                    <Toolbar />
                    <Divider />

                    <Toolbar />
                    <Projects /> */}
                    <div id='Contact'></div>
                    <Toolbar />
                    <Divider />
                    <Toolbar />

                    <Contact />
                    <Toolbar />
                </Container>
                {/* <Chat /> */}
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default Main