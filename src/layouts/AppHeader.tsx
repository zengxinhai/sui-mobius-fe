import {Box, Typography} from "@mui/material";
import React from "react";
import { WalletConnect } from 'src/components/WalletConnect'

export const AppHeader: React.FC = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Box style={{ flexGrow: 1 }}>
        <Typography fontSize={26}>
          Mobius
        </Typography>
      </Box>
      <WalletConnect />
    </Box>
  )
}
