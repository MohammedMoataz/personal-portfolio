import {
    Box,
    Stack,
    Typography
} from "@mui/material"

const Messages = props => <Box>
    <Stack>
        {props.messages.map((msg, index) => <Typography
            key={index}
            sx={{
                my: 1,
                p: 1,
                maxWidth: '80%',
                backgroundColor: msg.type === 'bot' ? props.color.teal : props.color.primary,
                color: props.color.light,
                borderRadius: 3,
                alignSelf: msg.type !== 'bot' ? 'flex-start' : 'flex-end',
            }}
        >
            {msg.msg}
        </Typography>)}
    </Stack>
</Box >

export default Messages