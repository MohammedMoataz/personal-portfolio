import { ButtonBase } from "@mui/material"
import Lottie from "react-lottie"

const CustomButtonBase = (props) => <ButtonBase
    href={props.href}
    target='_blank'
    sx={{ width: '20%' }}
>
    <Lottie
        options={{
            loop: true,
            autoplay: true,
            animationData: props.animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
        }}
        width={"100%"}
        title={props.title}
    />
</ButtonBase>

export default CustomButtonBase