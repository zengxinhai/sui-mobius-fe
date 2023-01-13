import { signer } from './signer'
import {PKG_ID, ADMIN_CAP_ID, BANK_ID} from './object-ids'
import { TestUsdcType } from './object-types'

type InterestModel = {
  baseRatePerSec: number,
  lowSlope: number,
  kink: number,
  highSlope: number,
  reserveFactor: number,
  scale: number,
  minBorrowAmount: number,
}

const interestModel: InterestModel = {
  baseRatePerSec: 6341958,
  lowSlope: 2 * Math.pow(10, 16),
  kink: 80 * Math.pow(10, 14),
  highSlope: 20 * Math.pow(10, 16),
  reserveFactor: 2 * Math.pow(10, 14),
  scale: Math.pow(10, 16),
  minBorrowAmount: Math.pow(10, 8),
};

const createInterestModelChange = async (coinType: string, interestModel: InterestModel) => {
  return await signer.executeMoveCall({
    packageObjectId: PKG_ID,
    module: 'app',
    function: 'create_interest_model_change',
    typeArguments: [coinType],
    arguments: [
      ADMIN_CAP_ID,
      interestModel.baseRatePerSec.toString(),
      interestModel.lowSlope.toString(),
      interestModel.kink.toString(),
      interestModel.highSlope.toString(),
      interestModel.reserveFactor.toString(),
      interestModel.scale.toString(),
      interestModel.minBorrowAmount.toString()
    ],
    gasBudget: 10000
  });
}

const applyInterestModelChange = async(coinType: string, changeId: string) => {
  const now = Math.floor(Date.now() / 1000);
  return await signer.executeMoveCall({
    packageObjectId: PKG_ID,
    module: 'app',
    function: 'add_interest_model',
    typeArguments: [coinType],
    arguments: [
      BANK_ID,
      ADMIN_CAP_ID,
      changeId,
      now.toString(),
    ],
    gasBudget: 10000
  });
}

(async() => {
  const changeId = '0x5a2b22b7bac09c05432d9712b4f1198b563c1e1e';
  const res = await applyInterestModelChange(TestUsdcType, changeId);
  console.log(res)
})()
