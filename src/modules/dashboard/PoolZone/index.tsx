import React from 'react'
import {PoolCard} from "./PoolCard";
import {ZoneWrapper} from "../ZoneWrapper";

export const PoolZone: React.FC = () => {
  return (
    <ZoneWrapper title='Pool Zone'>
      <PoolCard />
    </ZoneWrapper>
  )
}
