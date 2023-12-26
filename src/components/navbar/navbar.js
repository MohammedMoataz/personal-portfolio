import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {
    Avatar,
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { AppContext } from '././../../context/context/context.js'
import logo from "./../../assets/webp/logo.webp"
import resume from './../../assets/pdf/mohammed-moataz-resume.pdf'

const drawerWidth = 240

const DrawerAppBar = (props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = useState(false)
    const { state } = useContext(AppContext)
    const navigate = useNavigate()

    const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState)

    const container = window !== undefined ? () => window().document.body : undefined

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
            <Box
                sx={{ p: 2, textAlign: '-webkit-center' }}
            >
                <Avatar src={logo} alt='Mohammed' />
            </Box>
            <Divider sx={{ bgcolor: state.color.primary, }} />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('/')}
                        sx={{
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#368F80',
                            },
                        }}
                    >
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate(`/projects`)}
                        sx={{
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#368F80',
                            },
                        }}
                    >
                        <ListItemText primary={"Projects"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        href={resume}
                        target="_blank"
                        sx={{
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#368F80',
                            },
                        }}
                    >
                        <ListItemText primary={"Resume"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box >
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    bgcolor: '#1E1E1EE9',
                    boxShadow: `0px 0px 15px 1px ${state.color.primary}`,
                    py: '0.75%',
                }}
            >
                <Toolbar
                    sx={{ justifyContent: { sm: 'space-between' } }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box>
                        <Avatar src={logo} alt='Mohammed' />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button
                            onClick={() => navigate('/')}
                            sx={{
                                color: state.color.light,
                                '&:hover': {
                                    backgroundColor: '#368F80',
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            onClick={() => navigate(`/projects`)}
                            sx={{
                                color: state.color.light,
                                '&:hover': {
                                    backgroundColor: '#368F80',
                                },
                            }}
                        >
                            Projects
                        </Button>
                        <Button
                            href={resume}
                            target="_blank"
                            sx={{
                                color: state.color.light,
                                '&:hover': {
                                    backgroundColor: '#368F80',
                                },
                            }}
                        >
                            Resume
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            color: state.color.light,
                            bgcolor: state.color.dark,
                            boxShadow: `0px 0px 15px 1px ${state.color.primary}`,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default DrawerAppBar
