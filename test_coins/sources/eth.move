module test_coins::eth {
  use sui::tx_context::TxContext;
  use sui::coin;
  use sui::transfer;
  use sui::tx_context;
  use sui::math;
  use std::option;
  
  struct ETH has drop {}
  
  fun init(wit: ETH, ctx: &mut TxContext) {
    let decimals: u8 = 9;
    let symbol: vector<u8> = b"ETH";
    let name: vector<u8> = b"Ethereum";
    let desc: vector<u8> = b"Ethereum for every";
    let (treasuryCap, metaData) = coin::create_currency(wit, decimals, symbol, name, desc, option::none(), ctx);
    let sender = tx_context::sender(ctx);
    coin::mint_and_transfer(&mut treasuryCap, math::pow(10, decimals + 3), sender, ctx);
    transfer::transfer(treasuryCap, sender);
    transfer::share_object(metaData);
  }
}
