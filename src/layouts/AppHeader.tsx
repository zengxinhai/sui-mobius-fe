import {Box, Typography} from "@mui/material";
import React from "react";
import { WalletConnect } from 'src/components/WalletConnect'

export const AppHeader: React.FC = () => {
  return (
    <Box
      sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px 16px'}}
    >
      <Box style={{ flexGrow: 1 }}>
        <Typography fontSize={26}>
          SUI Stake Protocol
        </Typography>
      </Box>
      <WalletConnect />
    </Box>
  )
}
