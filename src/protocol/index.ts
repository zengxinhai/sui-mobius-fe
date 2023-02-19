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

const pkgId = '0x44a9ff1c1fc532c7d5f0780edada4fb4b221a1aa';
const protocolId = '0x5dabd31d5bcfdcdf19441c18e5d0967adb04b246';
const adminCapId = '0x21adcf7196ca982930f7d85c99dcf93e9f85e574';
const rewardType = '0x2::sui::SUI';
const witType = '0x44a9ff1c1fc532c7d5f0780edada4fb4b221a1aa::test_stake::TEST_STAKE';

export type { StakeData } from '../../sdk/query'

export const stakeProtocol = new Protocol({
  pkgId,
  protocolId,
  adminCapId,
  seed,
  witType,
  rewardType,
})
