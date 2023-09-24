import { TextareaAutosize } from '@mui/base'
import { styled } from '@mui/system'

const Textarea = styled(TextareaAutosize)(() => ({
    width: '100%',
    fontSize: '16px',
    fontFamily: 'IBM Plex Sans, sans-serif',
    lineHeight: '1.5',
    color: '#000000',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #1F2E3F',
    marginBottom: '8%',
    maxWidth: '100%',
    '&:focus': {
        outline: 0,
        borderBottom: '1px solid #40718D',
    },
    '&:focus-visible': {
        outline: 0,
        borderBottom: '1px solid #40718D',
    }
}))

export default Textarea