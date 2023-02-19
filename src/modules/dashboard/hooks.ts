import React, {useCallback, useEffect, useState} from "react";
import {StakeData, stakeProtocol} from "../../protocol";

export const useData = () => {
  const [stakeData, setStakeData] = useState<StakeData | null>(null);
  const addPool = useCallback(async (coinType: string, rewardsPerSec: number) => {
    await stakeProtocol.createPool(coinType, rewardsPerSec);
    const res = await stakeProtocol.getStakeData();
    setStakeData(res);
  }, [setStakeData])
  
  useEffect(() => {
    stakeProtocol.getStakeData().then(res => {
      console.log('stakeData', res)
      setStakeData(res)
    })
  }, [setStakeData])
  
  return {
    stakeData,
    addPool
  }
}
