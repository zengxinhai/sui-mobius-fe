import { provider } from '../scripts/signer'
import { bcs } from '@mysten/sui.js'

bcs.registerStructType('BalanceSheet', {
  cash: 'u64',
  debt: 'u64',
})

bcs.registerStructType('TypeName', {
  name: 'string'
})

bcs.registerStructType('QueryResult', {
  typeName: 'TypeName',
  balanceSheet: 'BalanceSheet',
})


function des(data: Uint8Array) {
  return bcs.de('vector<QueryResult>', data)
}

const balanceSheetsId = '0x92a403ee9467f3753a28a8725a053eda6f64cca4';
const testPkgId = '0xd7d27a9a68c11b9035be08428feceea9bf374510';

(async () => {
  const sender = '7738ccc64bd64bb7b3524296db285042f7876281';
  const res = await provider.devInspectMoveCall(sender, {
    packageObjectId: testPkgId,
    module: 'test_dev',
    function: 'query',
    typeArguments: [],
    arguments: [balanceSheetsId]
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
