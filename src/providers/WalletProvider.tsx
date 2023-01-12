import { EthosConnectProvider } from 'ethos-connect'
import React from "react";

export const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <EthosConnectProvider
      ethosConfiguration={{ hideEmailSignIn: true }}
    >
      { children }
    </EthosConnectProvider>
  )
}
