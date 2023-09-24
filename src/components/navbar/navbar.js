import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
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

import { ThemeContext } from '././../../context/context/context.js'
import logo from "./../../assets/svg/logo.svg"

const drawerWidth = 240
const navItems = ['Home', 'About', 'Skills', 'Services', /*'Projects',*/ 'Contact']

const DrawerAppBar = (props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = useState(false)
    const { state } = useContext(ThemeContext)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center',
        }}>
            <Box
                sx={{
                    p: 2,
                    textAlign: '-webkit-center'
                }}
            >
                <Avatar
                    src={logo}
                    alt='Mohammed'
                />
            </Box>
            <Divider
                sx={{
                    backgroundColor: state.color.primary,
                }}
            />            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton href={`#${item}`} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: '#1E1E1EE9',
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
                        <Avatar
                            src={logo}
                            alt='Mohammed'
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} href={`#${item}`} sx={{ color: state.color.light }}>
                                {item}
                            </Button>
                        ))}
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
                            backgroundColor: state.color.dark,
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

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}

export default DrawerAppBar
