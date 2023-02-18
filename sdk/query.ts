import { provider } from './common'
import { bcs } from '@mysten/sui.js'

bcs.registerStructType('StakePool', {
  totalStaked: 'u64',
  rewardRatePerSec: 'u64',
  index: 'u64',
  indexStaked: 'u64',
  lastUpdated: 'u64'
})

bcs.registerStructType('TypeName', {
  name: 'string'
})

bcs.registerStructType('PoolData', {
  type: 'TypeName',
  data: 'StakePool'
})

bcs.registerStructType('StakeData', {
  pools: 'vector<PoolData>',
  rewardAmount: 'u64',
  rewardType: 'TypeName',
})


function des(data: Uint8Array) {
  return bcs.de('StakeData', data)
}

const pkgId = '0x458be939aebedb8f8f7b128dd33a83eabda19c94';
const protocolId = '0xfe3d42e75732b4a35745f21d3640ffd7daea9eab';
const rewardType = '0x2::sui::SUI';
const witType = '0x458be939aebedb8f8f7b128dd33a83eabda19c94::test_stake::TEST_STAKE';

(async () => {
  const sender = '7738ccc64bd64bb7b3524296db285042f7876281';
  const moveCall = {
    packageObjectId: pkgId,
    module: 'query',
    function: 'stake_data',
    typeArguments: [witType, rewardType],
    arguments: [protocolId]
  };
  const res = await provider.devInspectTransaction(sender, {
    kind: 'moveCall',
    data: moveCall
  })
  if ('Ok' in res.results) {
    const returnValues = res.results.Ok[0][1].returnValues;
    if (returnValues) {
      const returnData = returnValues[0][0];
      const d = Uint8Array.from(returnData);
      let decoded = des(d)
      console.log(decoded)
      // const x = Buffer.from(d).toString('hex');
      // console.log(x)
    }
  }
})()
