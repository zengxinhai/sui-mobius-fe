import { Protocol } from '../../sdk/protocol'
import {  pkgId, protocolId, adminCapId } from '../constants/objects'

const seedBase64 = 'AFQrSV3G+OF3QSbHLr+q2fQuEh7x4YrrbyDF8zNzIQK/';
export const seed = _getSeedFromBase64String(seedBase64);
// Sui stores key like this:
// base64解析出33位数据
// 第0位代表加密类型
// 1到32位代表secret key
function _getSeedFromBase64String(b64: string) {
  return Uint8Array.prototype.slice.call(Buffer.from(b64, "base64"), 1);
}

const rewardType = `${pkgId}::usdc::USDC`;
const witType = `${pkgId}::test_stake::TEST_STAKE`;

export type { StakeData } from '../../sdk/query'

export const stakeProtocol = new Protocol({
  pkgId,
  protocolId,
  adminCapId,
  seed,
  witType,
  rewardType,
})
