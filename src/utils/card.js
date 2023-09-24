import {
    Box,
    Stack,
    Typography,
    Card,
    CardContent
} from '@mui/material'

const card = (props) => <Card
    sx={{
        width: { xs: 1, md: 1 / 5 },
        border: `1px solid ${props.color}`,
        borderRadius: "1rem",
        backgroundColor: '#1E1E1E',
        boxShadow: { xs: '0px 0px 5px 1px #6286A1', md: '0px 0px 10px 1px #6286A1' },
        '&:hover': {
            border: `1px solid #368F80`,
            boxShadow: { xs: '0px 0px 5px 1px #368F80', md: '0px 0px 10px 1px #368F80' },
        }
    }}
>
    <CardContent>
        <Stack
            direction={{ xs: 'row-reverse', md: 'column' }}
            justifyContent={{ xs: 'space-between', md: 'center' }}
            alignItems='center'
            spacing={{ xs: 5, sm: 2, md: 4 }}
        >
            <Box
                component='img'
                src={props.src}
                alt={props.alt}
                sx={{
                    width: '6rem',
                    height: '6rem',
                }}
            />
            <Typography
                variant="span"
                fontWeight={500}
                fontSize={'1.1rem'}
                color={props.color}
                textAlign={'center'}
                gutterBottom
            >
                {props.text}
            </Typography>
        </Stack>
    </CardContent>
</Card >

export default card