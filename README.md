## Deploy move packages
```bash
sui client publish --gas-budget 30000  --with-unpublished-dependencies move/stake
```

### 一些辅助命令行

**领取测试币**
```bash
curl --location --request POST 'https://faucet.devnet.sui.io/gas' \
--header 'Content-Type: application/json' \
--data-raw '{
    "FixedAmountRequest": {
        "recipient": "0x7738ccc64bd64bb7b3524296db285042f7876281"
    }
}'
```
