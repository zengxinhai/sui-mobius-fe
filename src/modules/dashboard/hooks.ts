import React, {useCallback, useEffect, useState} from "react";
import {StakeData, stakeProtocol} from "../../protocol";

type Balances = {
  type: string,
  balance: number
}[]
export const useData = () => {
  const [stakeData, setStakeData] = useState<StakeData | null>(null);
  const [balances, setBalances] = useState<Balances>([]);
  
  const addPool = useCallback(async (coinType: string, rewardsPerSec: number) => {
    await stakeProtocol.createPool(coinType, rewardsPerSec);
    const res = await stakeProtocol.getStakeData();
    setStakeData(res);
  }, [setStakeData])
  
  const stake = useCallback(async (coinType: string, stakeAmount: number) => {
    await stakeProtocol.stake(coinType, stakeAmount * Math.pow(10, 9))
    const res = await stakeProtocol.getStakeData();
    setStakeData(res);
    stakeProtocol.getBalances().then(res => setBalances(res))
  }, [setStakeData, setBalances])
  
  useEffect(() => {
    stakeProtocol.getStakeData().then(res => {
      setStakeData(res)
    });
    stakeProtocol.getBalances().then(res => setBalances(res))
  }, [setStakeData])
  
  
  return {
    stakeData,
    balances,
    addPool,
    stake,
  }
}
