import {
	Box,
	Button,
	Stack,
	Typography
} from "@mui/material"

const Options = props => <Box>
	<Typography
		variant="span"
		gutterBottom
		sx={{
			fontWeight: 700,
			fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
		}}
	>
		Options:
	</Typography>
	<Stack
		direction={{ xs: 'row' }}
		spacing={{ xs: 3 }}
		justifyContent="center"
		alignItems="center"
		my={2}
	>
		{props.options.map((opt, index) => <Button
			key={index}
			onClick={() => props.handleOptionClick(opt)}
			sx={{
				border: `1px solid ${props.color}`,
				borderRadius: 5,
			}}
		>
			<Typography
				variant="span"
				gutterBottom
				sx={{
					fontSize: { xs: 14 },
					color: props.color,
				}}
			>
				{opt.label}
			</Typography>
		</Button>)}
	</Stack>
</Box >

export default Options