import {useEffect} from 'react'
import {ethos, EthosConnectStatus} from 'ethos-connect'
import {useRootStore} from "../store/root";
import BigNumber from "bignumber.js";


type EthosTokenInfo = { balance: BigNumber, coins: any[]}
type EthosTokensInfo = Record<string, EthosTokenInfo>

export const DataFetcher = () => {
  const { status, wallet } = ethos.useWallet();
  const setBalances = useRootStore(state => state.setBalances);
  
  useEffect(() => {
    if (status == EthosConnectStatus.Connected && wallet && wallet.contents) {
      const coins = wallet.contents.tokens as EthosTokensInfo;
      let coinBalances: Record<string, BigNumber> = {};
      for(const coinType in coins) {
        coinBalances[coinType] = coins[coinType].balance;
      }
      setBalances(coinBalances);
    }
  }, [status, wallet, setBalances])
  
  return null
}
