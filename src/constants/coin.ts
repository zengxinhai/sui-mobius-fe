export const btcType = '2701d521910031fa6ab7cf3b4980325bc2c4628e::btc::BTC'
export const ethType = '2701d521910031fa6ab7cf3b4980325bc2c4628e::eth::ETH'
export const suiType = '0000000000000000000000000000000000000002::sui::SUI'

const symbols: Record<string, string> = {
  [btcType]: 'BTC',
  [ethType]: 'ETH',
  [suiType]: 'SUI',
}

const decimals: Record<string, number> = {
  [btcType]: 9,
  [ethType]: 9,
  [suiType]: 9,
}

export const getSymbol = (typeName: string) => {
  return symbols[typeName] || 'xx';
}

export const getDisplayAmount = (typeName: string, amount: bigint) => {
  const decimal = decimals[typeName];
  const displayAmount = Number(amount) / Math.pow(10, decimal);
  console.log(typeName, amount, decimal, displayAmount)
  return displayAmount.toFixed(2);
}
