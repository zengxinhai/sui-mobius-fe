import React from "react";
import {Box, Container, TextField} from '@mui/material'
import {StakeCard} from "../../components/StakeCard";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Box style={{ margin: '20px' }}>
        <TextField label="Search by coin name" variant='standard' style={{ width: '100%' }} />
      </Box>
      <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '30px' }}>
        <StakeCard />
        <StakeCard />
        <StakeCard />
      </Box>
    </Container>
  )
}
