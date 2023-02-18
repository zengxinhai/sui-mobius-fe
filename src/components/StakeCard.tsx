import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {CoinIcon} from "./CoinIcon";
import {StakeModal} from "./StakeModal";
import {useState} from "react";

export const StakeCard = () => {
  let [modalOpen, setModalOpen] = useState(false);
  return (
    <Card style={{ minWidth: '320px' }}>
      <CardContent style={{ padding: '0' }}>
        <Box style={{ background: '#FFC0CB', padding: '10px', display: 'flex', flexDirection: 'row' }}>
          <CoinIcon symbol="usdc" sx={{ marginRight: '6px' }} />
          <Typography fontWeight='bold'>USDC Pool | reward: MCT</Typography>
        </Box>
        <Box style={{ padding: '18px' }}>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '8px' }}>
            <Typography>Total Staked:</Typography>
            <Typography>12.1M</Typography>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '8px' }}>
            <Typography>Available rewards:</Typography>
            <Typography>12.1M</Typography>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography>Reward rate:</Typography>
            <Typography>3.66MTC / Sec</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: '8px' }}>
          <Button variant='contained' fullWidth onClick={() => setModalOpen(true)}>
            Stake
          </Button>
        </Box>
      </CardContent>
      <StakeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Card>
  )
}
