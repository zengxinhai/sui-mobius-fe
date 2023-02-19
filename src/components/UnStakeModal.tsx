import React, {useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";

type Props = {
  open: boolean,
  onClose: () => void,
  stakeCoinType: string,
  unStakeFn: (stakeCoinType: string, unStakeAmount: number) => Promise<void>
}
const style: React.CSSProperties = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: '#f2f2f2',
  boxShadow: '24',
  padding: '24px 12px',
  borderRadius: '8px'
};
export const UnStakeModal = (props: Props) => {
  const [unStakeAmount, setUnStakeAmount] = useState<string>('0');
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="stake-modal"
      aria-describedby="modal for stake"
    >
      <Box style={style}>
        <Typography style={{ fontSize: '20px', marginBottom: '20px', color: '#a3a3a3' }}>
          Unstake
        </Typography>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={unStakeAmount}
            onChange={event => setUnStakeAmount(event.target.value)}
            label="Unstake amount"
            variant='standard'
            style={{ width: '80%' }}
          />
          <Button
            disabled={!unStakeAmount || Number(unStakeAmount) <= 0}
            onClick={() => props.unStakeFn(props.stakeCoinType, Number(unStakeAmount))}
          >
            Unstake
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
