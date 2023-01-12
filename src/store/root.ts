import create from 'zustand'
import { devtools } from 'zustand/middleware'
import {createWalletBalanceSlice, WalletBalanceSlice} from "./WalletBalanceSlice";

export type RootState =
  WalletBalanceSlice

export const useRootStore = create<RootState>()(
  devtools(
    (...args) => ({
      ...createWalletBalanceSlice(...args),
    })
  )
)
