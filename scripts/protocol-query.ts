import { JsonRpcProvider, bcs, DevInspectResults } from '@mysten/sui.js'
import {BANK_ID, PROTOCOL_QUERY_PKG_ID} from "./object-ids";

let provider = new JsonRpcProvider();

bcs.registerStructType('TypeName', {
  name: 'string'
})

bcs.registerStructType('Fr', {
  mantissa: 'u256'
})

bcs.registerStructType('BorrowDynamic', {
  interestRate: 'Fr',
  borrowIndex: 'u64',
  lastUpdated: 'u64'
})

bcs.registerStructType('InterestModel', {
  type: 'TypeName',
  baseBorrowRatePerSec: 'Fr',
  lowSlope: 'Fr',
  kink: 'Fr',
  highSlope: 'Fr',
  reserveFactor: 'Fr',
  minBorrowAmount: 'u64',
})

bcs.registerStructType('BalanceSheet', {
  cash: 'u64',
  debt: 'u64',
  reserve: 'u64',
  bankCoinSupply: 'u64',
})

bcs.registerStructType('RiskModel', {
  type: 'TypeName',
  collateralFactor: 'Fr',
  liquidationFactor: 'Fr',
  liquidationPanelty: 'Fr',
  liquidationDiscount: 'Fr',
  liquidationReserveFactor: 'Fr',
  maxCollateralAmount: 'u64'
})

bcs.registerStructType('CollateralStat', {
  amount: 'u64'
})

bcs.registerStructType('PoolData', {
  borrowDynamic: 'BorrowDynamic',
  interestModel: 'InterestModel',
  balanceSheet: 'BalanceSheet'
})

bcs.registerStructType('CollateralData', {
  riskModel: 'RiskModel',
  collateralStat: 'CollateralStat'
})

bcs.registerStructType('BankData', {
  pools: 'vector<PoolData>',
  collaterals: 'vector<CollateralData>'
});

function getReturnValueFromInspectMoveCall(res: DevInspectResults): Uint8Array {
  if ('Ok' in res.results) {
    const returnValues = res.results.Ok[0][1].returnValues;
    if (returnValues) {
      const returnData = returnValues[0][0];
      return Uint8Array.from(returnData);
    }
  }
  return Uint8Array.from([])
}

(async () => {
  const sender = '0x81b9154bf2135207168ee73ac47a45af20af6431';
  const res = await provider.devInspectMoveCall(sender, {
    packageObjectId: PROTOCOL_QUERY_PKG_ID,
    module: 'bank_query',
    function: 'bank_data',
    typeArguments: [],
    arguments: [BANK_ID]
  });
  const returnValue = getReturnValueFromInspectMoveCall(res);
  const decodeData = bcs.de('BankData', returnValue);
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };
  console.log(JSON.stringify(decodeData))
})()
