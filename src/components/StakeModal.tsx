import React from 'react';
import {Box, Modal, Typography} from "@mui/material";

type Props = {
  open: boolean,
  onClose: () => void
}
const style: React.CSSProperties = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: '#f2f2f2',
  boxShadow: '24',
  padding: '8px',
};
export const StakeModal = (props: Props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="stake-modal"
      aria-describedby="modal for stake"
    >
      <Box style={style}>
        <Typography variant="h6" component="h2">
          Stake
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  )
}
