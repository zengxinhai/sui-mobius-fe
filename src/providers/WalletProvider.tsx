import { WalletProvider as SuietWalletProvider } from '@suiet/wallet-kit'
import React from "react";

export const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SuietWalletProvider>
      { children }
    </SuietWalletProvider>
  )
}
