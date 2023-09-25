import TextareaAutosize from '@mui/material/TextareaAutosize'
import styled from '@mui/material/styles/styled'

const CustomTextarea = styled(TextareaAutosize)(() => ({
    width: '100%',
    fontSize: '16px',
    fontFamily: 'Segoe UI, Roboto, Oxygen, Helvetica Neue, Arial, Apple Color Emoji',
    lineHeight: '1.5',
    color: '#FAFAFA',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #1F2E3F',
    marginBottom: '4%',
    maxWidth: '100%',
    '&:focus': {
        outline: 0,
        borderBottom: '1px solid #40718D',
    },
    '&:focus-visible': {
        outline: 0,
        borderBottom: '1px solid #40718D',
    },
    '&::placeholder': { color: '#6286A1' }
}))

export default CustomTextarea