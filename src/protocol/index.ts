import { Protocol } from '../../sdk/protocol'

const seedBase64 = 'AFQrSV3G+OF3QSbHLr+q2fQuEh7x4YrrbyDF8zNzIQK/';
export const seed = _getSeedFromBase64String(seedBase64);
// Sui stores key like this:
// base64解析出33位数据
// 第0位代表加密类型
// 1到32位代表secret key
function _getSeedFromBase64String(b64: string) {
  return Uint8Array.prototype.slice.call(Buffer.from(b64, "base64"), 1);
}

const pkgId = '0x458be939aebedb8f8f7b128dd33a83eabda19c94';
const protocolId = '0xfe3d42e75732b4a35745f21d3640ffd7daea9eab';
const adminCapId = '0x5e6a261102ffb6a69b177d68fa38234fca911475';
const rewardType = '0x2::sui::SUI';
const witType = '0x458be939aebedb8f8f7b128dd33a83eabda19c94::test_stake::TEST_STAKE';

export type { StakeData } from '../../sdk/query'

export const stakeProtocol = new Protocol({
  pkgId,
  protocolId,
  adminCapId,
  seed,
  witType,
  rewardType,
})
