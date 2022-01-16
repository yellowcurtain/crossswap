# crossswap

crossswap is a cross chain swap bridge, includes functions:
  - A bridge to connect two chains.
  - Automatically mint token and swap on chain with good liquidity. 


## Setup

### 1. Install dependencies
 
```bash
npm install
```

### 2. Run and Test

To start, run ```ganache-cli --fork``` to fork and run a local simulated Ethereum environment.

```bash
ganache-cli --fork https://eth-mainnet.alchemyapi.io/v2/<api-key> --networkId 999
```

Run ```truffle migrate``` to compile all the contracts.

```bash
truffle migrate --network mainnet_fork
```

Run ```truffle test``` to test smart contracts.

```bash
truffle test test/test-swapbridge.js --network mainnet_fork
```

## Todo

  - relayer layer to monitor status change and relay message between to chains.
  - SendBridge Smart Contract.



## Contributors

- Curtain (yellowcurtain3@gmail.com)


