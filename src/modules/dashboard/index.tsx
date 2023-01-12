import React from "react";
import {Box, Container} from '@mui/material'
import { CollateralZone } from './CollateralZone'
import { PoolZone } from './PoolZone'

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <CollateralZone />
        <PoolZone />
      </Box>
    </Container>
  )
}
