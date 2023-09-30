import {
    Tabs,
    Tab
} from '@mui/material'
import styled from '@mui/material/styles/styled'

export const CustomTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#368F80',
    },
    '& .MuiButtonBase-root': {
        color: '#FAFAFA',
    }
});

export const CustomTab = styled(Tab)(() => ({
    color: '#FAFAFA',
    '&:hover': {
        color: '#6286A1',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#368F80',
    },
    fontWeight: 900,
}))
