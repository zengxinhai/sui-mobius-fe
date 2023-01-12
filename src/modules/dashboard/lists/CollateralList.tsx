import {Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, Typography} from "@mui/material";
import {CoinIcon} from "../../../components/CoinIcon";

export const CollateralList = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Coin</TableCell>
            <TableCell>Wallet Balance</TableCell>
            <TableCell>Protocol Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <CoinIcon symbol='btc' />
                <Box>
                  <Typography>BTC</Typography>
                  <Typography>Bitcoin</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>1.21</TableCell>
            <TableCell>0.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
