module test_coins::btc {
  use sui::tx_context::TxContext;
  use sui::coin;
  use sui::transfer;
  use sui::tx_context;
  use sui::math;
  use std::option;
  
  struct BTC has drop {}
  
  fun init(wit: BTC, ctx: &mut TxContext) {
    let decimals: u8 = 9;
    let symbol: vector<u8> = b"BTC";
    let name: vector<u8> = b"Bitcoin";
    let desc: vector<u8> = b"Bitcoin for every";
    let (treasuryCap, metaData) = coin::create_currency(
      wit, decimals, symbol, name, desc, option::none(), ctx
    );
    let sender = tx_context::sender(ctx);
    transfer::transfer(treasuryCap, sender);
    transfer::share_object(metaData);
  }
}
