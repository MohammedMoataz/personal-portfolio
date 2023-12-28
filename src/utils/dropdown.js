import React, { useState } from 'react'
import {
    Box,
    Menu,
    MenuItem,
    Typography
} from '@mui/material'
import styled from '@mui/material/styles/styled'
import LaunchIcon from '@mui/icons-material/Launch'
import Download from '@mui/icons-material/Download'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { ColorButton } from './button.js'
import resume from './../assets/pdf/Mohammed Moataz Resume.pdf'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(() => ({
    '& .MuiPaper-root': {
        color: '#FAFAFA',
        backgroundColor: '#22536F',
        fontWeight: 700,
        borderRadius: 6,
        marginTop: 1,
        minWidth: 180,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': { padding: '4px 0' },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: '#FAFAFA',
                marginRight: 2,
            },
        },
    },
}))

const CustomizedMenus = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
        <Box>
            <ColorButton
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleClick}
            >
                Resume
            </ColorButton>
            <StyledMenu
                id="resume-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'resume-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    component={"a"}
                    href={resume}
                    target="_blank"
                    disableRipple
                    sx={{ '&:hover': { bgcolor: '#368F80' } }}
                >
                    <LaunchIcon />
                    <Typography ml={1}>Visit</Typography>
                </MenuItem>
                <MenuItem
                    component={"a"}
                    href={resume}
                    download='Mohammed Moataz Resume.pdf'
                    target='_blank'
                    rel='noreferrer'
                    disableRipple
                    sx={{ '&:hover': { bgcolor: '#368F80' } }}
                >
                    <Download />
                    <Typography ml={1}>Download</Typography>
                </MenuItem>
            </StyledMenu>
        </Box>
    )
}

export default CustomizedMenus