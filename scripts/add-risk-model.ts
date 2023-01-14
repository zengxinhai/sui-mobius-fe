import { signer } from './signer'
import {ADMIN_CAP_ID, BANK_ID, PKG_ID} from "./object-ids";
import {TestEthType} from "./object-types";

type RiskModel = {
  collateralFactor: number,
  liquidationFactor: number,
  liquidationPanelty: number,
  liquidationDiscount: number,
  scale: number,
  maxCollateralAmount: number
}

const riskModel: RiskModel = {
  collateralFactor: 70,
  liquidationFactor: 80,
  liquidationPanelty: 8,
  liquidationDiscount: 5,
  scale: 100,
  maxCollateralAmount: Math.pow(10, 9 + 7)
}

const createRiskModelChange = async (coinType: string, riskModel: RiskModel) => {
  return signer.executeMoveCall({
    packageObjectId: PKG_ID,
    module: 'app',
    function: 'create_risk_model_change',
    typeArguments: [coinType],
    arguments: [
      ADMIN_CAP_ID,
      riskModel.collateralFactor.toString(),
      riskModel.liquidationFactor.toString(),
      riskModel.liquidationPanelty.toString(),
      riskModel.liquidationDiscount.toString(),
      riskModel.scale.toString(),
      riskModel.maxCollateralAmount.toString()
    ],
    gasBudget: 10000
  });
}

const applyRiskModelChange = async (coinType: string, changeId: string) => {
  return signer.executeMoveCall({
    packageObjectId: PKG_ID,
    module: 'app',
    function: 'add_risk_model',
    typeArguments: [coinType],
    arguments: [
      BANK_ID,
      ADMIN_CAP_ID,
      changeId,
    ],
    gasBudget: 10000
  });
}

(async () => {
  // let res = await createRiskModelChange(TestEthType, riskModel);
  // console.log(res);
  const changeId = '0xa4a6f3a7eeb5bac9b7a018810757c1e266e21fee';
  const res = await applyRiskModelChange(TestEthType, changeId);
  console.log(res)
})()
