import { useRef } from "react"
import {
  Box,
  Button,
  TextField,
  Stack
} from "@mui/material"
import Send from "@mui/icons-material/Send"

const Form = props => {
  const msg = useRef()

  const sendMsg = e => {
    e.preventDefault()

    props.handleMessageSubmit(msg.current.value)
    msg.current.value = ""
  }

  return <Box>
    <form onSubmit={sendMsg}>
      <Stack
        direction={{ xs: 'row' }}
        spacing={{ xs: 2 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <TextField
          inputRef={msg}
          type="text"
          placeholder="Type a message"
          sx={{ width: '85%' }}
        />
        <Button>
          <Send sx={{ color: props.color }} />
        </Button>
      </Stack>
    </form>
  </Box>
}

export default Form