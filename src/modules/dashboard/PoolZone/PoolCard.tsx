import {Avatar, Card, CardContent, CardHeader} from "@mui/material";
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
        Detail
      </CardContent>
    </Card>
  )
}
