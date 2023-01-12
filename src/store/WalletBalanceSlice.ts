import { StateCreator } from 'zustand'
import { RootState } from './root'
import BigNumber from "bignumber.js";

export interface WalletBalanceSlice {
  balances: Record<string, BigNumber>,
  setBalances: (balances: Record<string, BigNumber>) => void,
}

export const createWalletBalanceSlice: StateCreator<
  RootState,
  [['zustand/devtools', never]],
  [],
  WalletBalanceSlice
  > = (set) => {
  return {
    balances: {},
    setBalances: (balances) => set({ balances })
  }
}
