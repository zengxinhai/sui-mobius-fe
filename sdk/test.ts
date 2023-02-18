import { Protocol } from './protocol';
import { seedArr as seed } from './common';

const pkgId = '0x458be939aebedb8f8f7b128dd33a83eabda19c94';
const protocolId = '0xfe3d42e75732b4a35745f21d3640ffd7daea9eab';
const adminCapId = '0x5e6a261102ffb6a69b177d68fa38234fca911475';
const rewardType = '0x2::sui::SUI';
const witType = '0x458be939aebedb8f8f7b128dd33a83eabda19c94::test_stake::TEST_STAKE';

const stakeProtocol = new Protocol({
  seed,
  pkgId,
  protocolId,
  adminCapId,
  rewardType,
  witType,
});

(async () => {
  // await stakeProtocol.createPool('0x2::sui::SUI', 10**9);
  // let x = await stakeProtocol.stake('0x2::sui::SUI','0xf80043a5796ac7d43c30315a87bb641673ad1a5c');
  // let x = await stakeProtocol.topupReward('0xac35b04a08cd1003d202c3f7d40b5556f6cf2a69');
  let x = await stakeProtocol.unstake('0x2::sui::SUI','0xe096dde7f14fa5a61db1d675340d7a83c685316d', 100);
  console.log(x)
})()
