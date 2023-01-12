import { StateCreator } from 'zustand'
import { RootState } from './root'

export interface WalletBalanceSlice {
  balances: Record<string, string>
}

export const createWalletBalanceSlice: StateCreator<
  RootState,
  [['zustand/devtools', never]],
  [],
  WalletBalanceSlice
  > = (set) => {
  return {
    balances: {}
  }
}
