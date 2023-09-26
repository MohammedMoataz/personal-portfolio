import React, { useContext } from "react"
import { Avatar, Fab } from "@mui/material"

import { AppContext } from "./../context/context/context.js"
import logo from "./../assets/webp/logo.webp"

const FloatingActionButton = (props) => {
    const { state } = useContext(AppContext)

    return <Fab
        aria-label="chat"
        sx={{
            backgroundColor: state.color.primary,
            "&:hover": {
                backgroundColor: state.color.teal,
            }
        }}
        onClick={props.handleClick}
    >
        <Avatar
            src={logo}
            alt='Mohammed'
        />
    </Fab >
}

export default FloatingActionButton