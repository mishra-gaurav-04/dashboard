import React from 'react'
import {Box,Typography,Stack, borderRadius} from '@pankod/refine-mui';
import ReactApexChart from 'react-apexcharts';
import {propertyReferralsInfo} from '../../constants/index';

interface ProgressBarProps{
  title : string,
  percentage : number,
  color : string,
}

const ProgressBar = ({title,color,percentage} : ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={14} fontWeight={600} color="#11142d">{title}</Typography>
      <Typography fontSize={14} fontWeight={600} color="#11142d">{percentage}%</Typography>
    </Stack>
    <Box
    width="100%"
    height="8px"
    bgcolor="#e4e8ef"
    mt={2}
    position="relative"
    borderRadius={1}
    >
      <Box
      width={`${percentage}%`}
      bgcolor={color}
      position='absolute'
      height="100%"
      borderRadius={1}
      />
    </Box>
   </Box>
)

const PropertyReferrrals = () => {
  return (
    <Box
    minWidth={490}
    display="flex"
    borderRadius="15px"
    id="chart"
    bgcolor="#fcfcfc"
    p={4}
    flexDirection='column'
    >
    <Typography fontSize={18}fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>
    <Stack my="20px" direction="column" gap={4}>
      {propertyReferralsInfo.map((item) => (
        <ProgressBar key={item.title}{...item}/>
      ))}
    </Stack>

    </Box>
  )
}

export default PropertyReferrrals