import {getMoveObject, SuiMoveObject} from '@mysten/sui.js'
import { provider } from './signer'
import { BANK_ID } from './object-ids'

(async () => {
  const obj = await provider.getObject(BANK_ID);
  const moveObj = getMoveObject(obj) as SuiMoveObject;
  const interestModels = moveObj.fields.interestModels as SuiMoveObject;
  console.log(interestModels.fields.table);
})()
