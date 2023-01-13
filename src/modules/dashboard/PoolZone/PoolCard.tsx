import {Avatar, Box, Button, Card, CardContent, CardHeader, Typography} from "@mui/material";
import {CoinIcon} from "../../../components/CoinIcon";

export const PoolCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <CoinIcon symbol="usdc" />
          </Avatar>
        }
        title="USDC Pool"
      />
      <CardContent>
        <Box>
          <Typography>Available: 10.2M</Typography>
          <Typography>Borrows: 8.0M</Typography>
          <Typography>Borrow APR: 2.5%</Typography>
          <Typography>Lend APR: 1.8%</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button>Lend</Button>
          <Button>Borrow</Button>
        </Box>
      </CardContent>
    </Card>
  )
}
