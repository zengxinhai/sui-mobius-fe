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

const balanceSheetsId = '0x075d90ab6c76c4cd58193245080d23fe0ae7b850';
const testPkgId = '0x77818a8a85ee3abd4fb91807f3727bf5a4b8b1d1';

(async () => {
  const sender = '7738ccc64bd64bb7b3524296db285042f7876281';
  const moveCall = {
    packageObjectId: testPkgId,
    module: 'test_dev',
    function: 'query',
    typeArguments: [],
    arguments: [balanceSheetsId]
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
