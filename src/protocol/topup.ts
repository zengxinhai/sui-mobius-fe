import { stakeProtocol } from './index'
import { usdcCoinId } from '../constants/objects'

(async () => {
  const res = await stakeProtocol.topupReward(usdcCoinId);
  console.log(res);
})()
