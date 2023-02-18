module test_stake::test_stake {
  use stake::stake_sea;
  use sui::sui::SUI;
  use sui::tx_context::TxContext;
  use sui::transfer;
  use sui::tx_context;
  
  struct TEST_STAKE has drop {}
  
  fun init(wit: TEST_STAKE, ctx: &mut TxContext) {
    let (stakeSea, adminCap) = stake_sea::new<TEST_STAKE, SUI>(wit, ctx);
    transfer::share_object(stakeSea);
    transfer::transfer(adminCap, tx_context::sender(ctx));
  }
}
