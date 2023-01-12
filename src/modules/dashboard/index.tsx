import React, {useMemo} from "react";
import {Box, Container, Typography} from '@mui/material'
import { CollateralZone } from './CollateralZone'
import { PoolZone } from './PoolZone'
import {useRootStore} from "../../store/root";

export const Dashboard: React.FC = () => {
  const walletBalances = useRootStore(state => state.balances);
  const balanceList = useMemo(() => {
    let list: { type: string, amount: string }[] = [];
    for(const coinType in walletBalances) {
      const item = { type: coinType, amount: walletBalances[coinType].toString() };
      list.push(item);
    }
    return list;
  }, [walletBalances])
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <CollateralZone />
        <Box style={{ width: '30px' }} />
        <PoolZone />
      </Box>
      {balanceList.map(balance => (
        <div key={balance.type}>
          <Typography>{balance.type}</Typography>
          <Typography>{balance.amount}</Typography>
        </div>
      ))
      }
    </Container>
  )
}
