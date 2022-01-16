const { sendEther } = require("./util");
const TokenUSDC = artifacts.require('TokenUSDC');
const TokenUSDT = artifacts.require('TokenUSDT');
const SwapBridge = artifacts.require("SwapBridge");
const UniswapManage = artifacts.require("UniswapManage");

contract("SwapBridge", (accounts) => {
      
  beforeEach(async () => {  
    
    const csUSDC = await TokenUSDC.deployed();
    const csUSDT = await TokenUSDT.deployed();
    
    const TOKEN_USDC_AMOUNT = 11000;    //this number has to be more than 1000 as defined in UniswapV2Pair contract
    const TOKEN_USDT_AMOUNT = 11000;
  
    await csUSDC.mint(accounts[0], TOKEN_USDC_AMOUNT);
    await csUSDT.mint(accounts[0], TOKEN_USDT_AMOUNT);

    uniswapManage = await UniswapManage.deployed();
    await csUSDC.approve(uniswapManage.address, TOKEN_USDC_AMOUNT, { from: accounts[0] });
    await csUSDT.approve(uniswapManage.address, TOKEN_USDT_AMOUNT, { from: accounts[0] });
    
    const tx = await uniswapManage.addLiquidity(
      csUSDC.address,
      csUSDT.address,
      TOKEN_USDC_AMOUNT,
      TOKEN_USDT_AMOUNT,
      {
        from: accounts[0],
      }
    );

    console.log("=== liquidity info ===");
    for (const log of tx.logs) {
      console.log(`${log.args.message} ${log.args.val}`);
    }
  });

  it("should pass", async () => {
    
    const swapBridge = await SwapBridge.deployed();
    const csUSDC = await TokenUSDC.deployed();
    const csUSDT = await TokenUSDT.deployed();
    const uniswapManage = await UniswapManage.deployed();

    // send eth to Contract for gas fee
    await sendEther(web3, accounts[0], swapBridge.address, 1, { from: accounts[0] });
    await sendEther(web3, accounts[0], uniswapManage.address, 1, { from: accounts[0] });
    await csUSDC.updateAdmin(swapBridge.address);

    const tx = await swapBridge.mintswap(uniswapManage.address, csUSDC.address, 100, csUSDT.address, 1, accounts[0], { from: accounts[0] });
    console.log(tx);
  });
  
});

