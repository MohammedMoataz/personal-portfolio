import React, { useState, useContext } from "react"
import Fab from "@mui/material/Fab"
import { ArrowUpward } from "@mui/icons-material"

import { AppContext } from "./../context/context/context.js"

const FloatingActionButton = () => {
    const { state } = useContext(AppContext)
    const [visible, setVisible] = useState(true)

    const toggleVisible = () =>
        document.documentElement.scrollTop > 300
            ? setVisible(true)
            : setVisible(false)
    window.addEventListener('scroll', toggleVisible)

    return <Fab
        aria-label="chat"
        sx={{
            position: "fixed",
            bottom: 50,
            right: 50,
            backgroundColor: state.color.primary,
            display: visible ? 'inline-flex' : 'none',
            "&:hover": { backgroundColor: state.color.teal }
        }}
        onClick={() => window.scrollTo(0, 0)}
    >
        <ArrowUpward sx={{ color: '#FAFAFA' }} />
    </Fab >
}

export default FloatingActionButton