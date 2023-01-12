import React from "react";
import {Box, Container, Divider} from '@mui/material'
import { CollateralZone } from './CollateralZone'
import { PoolZone } from './PoolZone'

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <CollateralZone />
        <Box style={{ width: '30px' }} />
        <PoolZone />
      </Box>
    </Container>
  )
}
