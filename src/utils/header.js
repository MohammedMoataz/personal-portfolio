import { Typography } from "@mui/material"

const CustomHeader = props =>
    <Typography
        variant="h2"
        gutterBottom
        sx={{
            color: props.color,
            fontWeight: 700,
            fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
            mb: 5
        }}
    >
        {props.title}
    </Typography>

export default CustomHeader