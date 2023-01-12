import {Paper, Typography} from "@mui/material";
import {CollateralList} from "./CollateralList";

export const CollateralZone = () => {
  return (
    <Paper style={{ width: '600px', padding: '20px' }}>
      <Typography fontSize={18}>
        Collateral Zone
      </Typography>
      <CollateralList />
    </Paper>
  )
}
