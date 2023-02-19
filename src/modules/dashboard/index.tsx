import React, {useState} from "react";
import {Box, Container, TextField, Typography, Button} from '@mui/material'
import {StakeCard} from "../../components/StakeCard";
import {useData} from "./hooks";
import {UserBalances} from "./balances";

export const Dashboard: React.FC = () => {
  const { addPool, stakeData, balances, stake } = useData();
  const [stakeCoinType, setStakeCoinType] = useState('');
  const [rewardsPerSec, setRewardsPerSec] = useState('');
  return (
    <Container>
      <UserBalances balances={balances} />
      
      <Box style={{ height: '32px' }} />
      <Typography fontWeight='bold' style={{ fontSize: '24px', color: '#a3a3a3' }}>
        Stake:
      </Typography>
      <Box style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row' }}>
        <TextField
          value={stakeCoinType}
          onChange={event => setStakeCoinType(event.target.value)}
          label="Coin type to stake, such as 0x2::sui::SUI"
          variant='standard'
          style={{ width: '50%' }}
        />
        <Box style={{ width: '10px' }} />
        <TextField
          value={rewardsPerSec}
          onChange={event => setRewardsPerSec(event.target.value)}
          label="Reward per second"
          variant='standard'
          style={{ width: '30%' }}
        />
        <Box style={{ width: '10px' }} />
        <Button variant='outlined' onClick={() => addPool(stakeCoinType, Number(rewardsPerSec))}>Add Pool</Button>
      </Box>
      <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '30px' }}>
        {
          stakeData && stakeData.pools.map(pool => (
            <StakeCard
              key={pool.type.name}
              stakeCoinType={pool.type.name}
              rewardCoinType={stakeData.rewardType.name}
              totalStaked={pool.data.totalStaked}
              availableRewards={stakeData.rewardAmount}
              rewardsPerSec={pool.data.rewardRatePerSec}
              stakeFn={stake}
            />
          ))
        }
      </Box>
    </Container>
  )
}
