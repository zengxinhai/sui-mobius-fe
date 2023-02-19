import React, {useCallback, useEffect, useState} from "react";
import {StakeData, stakeProtocol} from "../../protocol";

type Balances = {
  type: string,
  balance: number
}[]
export const useData = () => {
  const [stakeData, setStakeData] = useState<StakeData | null>(null);
  const [balances, setBalances] = useState<Balances>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const addPool = useCallback(async (coinType: string, rewardsPerDay: number) => {
    setIsLoading(true);
    await stakeProtocol.createPool(coinType, rewardsPerDay * Math.pow(10, 9) / (3600 * 24));
    const res = await stakeProtocol.getStakeData();
    setStakeData(res);
    setIsLoading(false);
  }, [setStakeData])
  
  const stake = useCallback(async (coinType: string, stakeAmount: number) => {
    setIsLoading(true);
    await stakeProtocol.stake(coinType, stakeAmount * Math.pow(10, 9))
    const res = await stakeProtocol.getStakeData();
    setStakeData(res);
    stakeProtocol.getBalances().then(res => setBalances(res))
    setIsLoading(false);
    window.location.href = '/'
  }, [setStakeData, setBalances])
  
  const unStake = useCallback(async (coinType: string, amount: number) => {
    setIsLoading(true);
    await stakeProtocol.unstake(coinType, amount * Math.pow(10, 9))
    const res = await stakeProtocol.getStakeData();
    setStakeData(res);
    stakeProtocol.getBalances().then(res => setBalances(res))
    setIsLoading(false);
    window.location.href = '/'
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
    unStake,
    isLoading,
  }
}
