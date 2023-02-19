module test_stake::test_stake {
  use sui::tx_context::{Self, TxContext};
  use sui::transfer;
  use stake::stake_sea;
  use test_coins::usdc::USDC;
  
  struct TEST_STAKE has drop {}
  
  fun init(wit: TEST_STAKE, ctx: &mut TxContext) {
    let (stakeSea, adminCap) = stake_sea::new<TEST_STAKE, USDC>(wit, ctx);
    transfer::share_object(stakeSea);
    transfer::transfer(adminCap, tx_context::sender(ctx));
  }
}
