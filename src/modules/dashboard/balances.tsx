import { Box, Typography } from "@mui/material"
import {getDisplayAmount, getSymbol} from "src/constants/coin"
import {CoinIcon} from "../../components/CoinIcon";

type Balances = {
  type: string,
  balance: number
}[]
type Props = {
  balances: Balances
}
export const UserBalances = (props: Props) => {
  return (
    <Box>
      <Typography fontWeight='bold' style={{ fontSize: '24px', marginBottom: '20px', color: '#a3a3a3' }}>
        Portfolio:
      </Typography>
      <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap: '30px' }}>
        {props.balances.filter(balance => getSymbol(balance.type)).map(balance =>
          <Box key={balance.type} style={{ display: 'flex', flexDirection: 'row' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', marginRight: '10px' }}>
              <CoinIcon symbol={getSymbol(balance.type)} sx={{ marginRight: '20px' }} />
              <Typography fontWeight='bold'>{getSymbol(balance.type)}: </Typography>
            </Box>
            <Typography>
              { getDisplayAmount(balance.type, BigInt(balance.balance)) }
            </Typography>
            <Box style={{ height: '36px' }} />
          </Box>
        )}
      </Box>
    </Box>
  )
}
