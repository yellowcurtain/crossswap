const TokenUSDC = artifacts.require('TokenUSDC');
const TokenUSDT = artifacts.require('TokenUSDT');
const SwapBridge = artifacts.require("SwapBridge");
const UniswapManage = artifacts.require("UniswapManage");

module.exports = async function (deployer, network, addresses) {

    await deployer.deploy(TokenUSDC);
    const csUSDC = await TokenUSDC.deployed();
    console.log("csUSDC deployed to:", csUSDC.address);
    
    await deployer.deploy(TokenUSDT);
    const csUSDT = await TokenUSDT.deployed();
    console.log("csUSDT deployed to:", csUSDT.address);

    await deployer.deploy(SwapBridge);
    const swapBridge = await SwapBridge.deployed();
    console.log("swapBridge bridge deployed to:", swapBridge.address);

    await deployer.deploy(UniswapManage);
    const uniswapManage = await UniswapManage.deployed();
    console.log("uniswapManage deployed to:", uniswapManage.address);

};

