import { pkgId } from './objects'
export const btcType = `${pkgId.slice(2)}::btc::BTC`
export const ethType = `${pkgId.slice(2)}::eth::ETH`
export const usdcType = `${pkgId.slice(2)}::usdc::USDC`
export const suiType = `0000000000000000000000000000000000000002::sui::SUI`

export const btcType0x = `${pkgId}::btc::BTC`
export const ethType0x = `${pkgId}::eth::ETH`
export const usdcType0x = `${pkgId}::usdc::USDC`
export const suiType0x = '0x2::sui::SUI'

const symbols: Record<string, string> = {
  [btcType]: 'BTC',
  [ethType]: 'ETH',
  [suiType]: 'SUI',
  [usdcType]: 'USDC',
  [btcType0x]: 'BTC',
  [ethType0x]: 'ETH',
  [suiType0x]: 'SUI',
  [usdcType0x]: 'USDC',
}

const decimals: Record<string, number> = {
  [btcType]: 9,
  [ethType]: 9,
  [suiType]: 9,
  [usdcType]: 9,
  [btcType0x]: 9,
  [ethType0x]: 9,
  [suiType0x]: 9,
  [usdcType0x]: 9,
}

export const getSymbol = (typeName: string) => {
  return symbols[typeName];
}

export const getDisplayAmount = (typeName: string, amount: bigint) => {
  const decimal = decimals[typeName];
  const displayAmount = Number(amount) / Math.pow(10, decimal);
  return displayAmount.toFixed(2);
}
