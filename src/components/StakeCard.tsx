import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {CoinIcon} from "./CoinIcon";
import {StakeModal} from "./StakeModal";
import {useEffect, useState} from "react";
import {getDisplayAmount, getSymbol} from "../constants/coin";
import {stakeProtocol} from "../protocol";

type Props = {
  stakeCoinType: string,
  rewardCoinType: string,
  totalStaked: bigint,
  availableRewards: bigint,
  rewardsPerSec: bigint,
  stakeFn: (stakeCoinType: string, stakeAmount: number) => Promise<void>
}
export const StakeCard = (props: Props) => {
  let [modalOpen, setModalOpen] = useState(false);
  let [userStaked, setUserStaked] = useState<string | null>(null);
  
  let stakeCoinSymbol = getSymbol(props.stakeCoinType);
  let rewardCoinSymbol = getSymbol(props.rewardCoinType);
  let userStakedDisplayAmount = userStaked? getDisplayAmount(props.stakeCoinType, BigInt(userStaked)) : null;
  let stakeCoinDisplayAmount = getDisplayAmount(props.stakeCoinType, props.totalStaked);
  let totalRewardsDisplayAmount = getDisplayAmount(props.rewardCoinType, props.availableRewards);
  let secsInADay = BigInt(365 * 24 * 3600);
  let rewardsPerDay = getDisplayAmount(props.rewardCoinType, props.rewardsPerSec * secsInADay);
  
  useEffect(() => {
    stakeProtocol.getUserStakeData(props.stakeCoinType).then(res => {
      setUserStaked(res?.staked)
    })
  }, [props.stakeCoinType])
  
  return (
    <Card style={{ minWidth: '320px' }}>
      <CardContent style={{ padding: '0' }}>
        <Box style={{ background: '#FFC0CB', padding: '10px', display: 'flex', flexDirection: 'row' }}>
          <CoinIcon symbol={stakeCoinSymbol} sx={{ marginRight: '6px' }} />
          <Typography fontWeight='bold'>
            {stakeCoinSymbol} Pool | reward: {rewardCoinSymbol}
          </Typography>
        </Box>
        <Box style={{ padding: '18px' }}>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '8px' }}>
            <Typography fontWeight='bold'>You Staked:</Typography>
            <Typography fontWeight='bold'>{userStakedDisplayAmount} {stakeCoinSymbol}</Typography>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '8px' }}>
            <Typography>Total Staked:</Typography>
            <Typography>{stakeCoinDisplayAmount} {stakeCoinSymbol}</Typography>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '8px' }}>
            <Typography>Available rewards:</Typography>
            <Typography>{totalRewardsDisplayAmount} {rewardCoinSymbol}</Typography>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography>Reward rate:</Typography>
            <Typography>{rewardsPerDay} {rewardCoinSymbol} / Day</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: '8px' }}>
          <Button variant='contained' fullWidth onClick={() => setModalOpen(true)}>
            Stake
          </Button>
        </Box>
      </CardContent>
      <StakeModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        stakeCoinType={props.stakeCoinType}
        stakeFn={props.stakeFn}
      />
    </Card>
  )
}
