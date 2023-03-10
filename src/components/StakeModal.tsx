import React, {useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";

type Props = {
  open: boolean,
  onClose: () => void,
  stakeCoinType: string,
  stakeFn: (stakeCoinType: string, stakeAmount: number) => Promise<void>
}
const style: React.CSSProperties = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: '#f2f2f2',
  borderRadius: '8px',
  padding: '24px 12px',
};
export const StakeModal = (props: Props) => {
  const [stakeAmount, setStakeAmount] = useState<string>('0');
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="stake-modal"
      aria-describedby="modal for stake"
    >
      <Box style={style}>
        <Typography style={{ fontSize: '20px', marginBottom: '20px', color: '#a3a3a3' }}>
          Stake
        </Typography>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={stakeAmount}
            onChange={event => setStakeAmount(event.target.value)}
            label="Stake amount"
            variant='standard'
            style={{ width: '80%' }}
          />
          <Button
            disabled={!stakeAmount || Number(stakeAmount) <= 0}
            onClick={() => props.stakeFn(props.stakeCoinType, Number(stakeAmount))}
          >
            Stake
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
