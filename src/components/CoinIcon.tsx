import { Icon, IconProps } from "@mui/material";
import React from "react";
import Image from "next/image";

interface CoinIconProps extends IconProps {
  symbol: string;
}

export const CoinIcon: React.FC<CoinIconProps> = ({ symbol, ...rest }) => {
  return (
    <Icon sx={{ display: 'flex', position: 'relative', borderRadius: '50%', ...rest.sx }}>
      <img
        src={`/icons/coins/${symbol.toLowerCase()}.svg`}
        width='100%'
        height='100%'
        alt={`${symbol} icon`}
      />
    </Icon>
  )
}
