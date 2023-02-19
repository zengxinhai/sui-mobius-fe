export const btcType = '2701d521910031fa6ab7cf3b4980325bc2c4628e::btc::BTC'
export const ethType = '2701d521910031fa6ab7cf3b4980325bc2c4628e::eth::ETH'
export const suiType = '0000000000000000000000000000000000000002::sui::SUI'

export const btcType0x = '0x2701d521910031fa6ab7cf3b4980325bc2c4628e::btc::BTC'
export const ethType0x = '0x2701d521910031fa6ab7cf3b4980325bc2c4628e::eth::ETH'
export const suiType0x = '0x2::sui::SUI'

const symbols: Record<string, string> = {
  [btcType]: 'BTC',
  [ethType]: 'ETH',
  [suiType]: 'SUI',
  [btcType0x]: 'BTC',
  [ethType0x]: 'ETH',
  [suiType0x]: 'SUI',
}

const decimals: Record<string, number> = {
  [btcType]: 9,
  [ethType]: 9,
  [suiType]: 9,
  [btcType0x]: 9,
  [ethType0x]: 9,
  [suiType0x]: 9,
}

export const getSymbol = (typeName: string) => {
  return symbols[typeName] || 'xx';
}

export const getDisplayAmount = (typeName: string, amount: bigint) => {
  const decimal = decimals[typeName];
  const displayAmount = Number(amount) / Math.pow(10, decimal);
  return displayAmount.toFixed(2);
}
