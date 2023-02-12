import React from 'react'
import {Box,Typography,Stack, borderRadius} from '@pankod/refine-mui';
import ReactApexChart from 'react-apexcharts';
import {ArrowCircleUpRounded} from '@mui/icons-material';
import {TotalRevenueOptions,TotalRevenueSeries} from './chart.config';

const TotalRevenue = () => {
  return (
    <Box
    display="flex"
    borderRadius="15px"
    id="chart"
    bgcolor="#fcfcfc"
    flex={1}
    p={4}
    flexDirection='column'
    >
      <Typography fontSize={18}fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>
      <Stack my="20px" gap={4} direction="row" flexWrap="wrap">
        <Typography fontSize={30} fontWeight={900} color="#11142d">$230,645</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{
            fontSize:25,color:"475be8"
          }}/>
        <Stack>
          <Typography fontSize={15} color="#475be8">
            0.8%
          </Typography>
          <Typography fontSize={12} color="#808191">
            Than last month
          </Typography>
        </Stack>
      </Stack>
      </Stack>
      <ReactApexChart
       series={TotalRevenueSeries}
       type = "bar"
       height={310}
       options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue