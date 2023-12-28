import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab'
import styled from '@mui/material/styles/styled'

const CustomTimelineDot = styled(TimelineDot)(() => ({ backgroundColor: '#40718D' }))

const CustomTimelineConnector = styled(TimelineConnector)(() => ({ backgroundColor: '#40718D' }))

const CustomTimeline = (props) =>
    <TimelineItem
        sx={{ [`& .MuiTimelineContent-root`]: { flex: 7 } }}>
        <TimelineOppositeContent color="#FAFAFA">
            {props.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
            <CustomTimelineDot />
            <CustomTimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            {props.title}
        </TimelineContent>
    </TimelineItem>

export default CustomTimeline