import TextField from '@mui/material/TextField'
import styled from '@mui/material/styles/styled'

const CustomTexField = styled(TextField)(() => ({
    borderBottom: '2px solid #1F2E3F',
    '& .MuiInputBase-input': { color: '#FAFAFA' },
    label: { color: '#6286A1' },
}))

export default CustomTexField