// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './interfaces/Itoken.sol';
import './interfaces/IUniswapManage.sol';
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract SwapBridge {

  receive() external payable {}

  /* ========== Mint and Swap Function ========== */

  /**
    * @param uniswapManage The address of UniswapManage contract
    * @param tokenIn The token need to mint and swap
    * @param amountIn The amount of token need to mint and swap
    * @param tokenOut The token should be swapped out
    * @param amountOutMin The minimum amount of token that should be swapped out
    * @param to The address to receive token swapped out
    */
  function mintswap(address uniswapManage,address tokenIn,  uint amountIn,  address tokenOut, uint amountOutMin, address to) external {  

    IToken(tokenIn).mint(address(this), amountIn);
    IERC20(tokenIn).approve(uniswapManage, amountIn);

    IUniswapManage(uniswapManage).swap(
      tokenIn,
      tokenOut,
      amountIn,
      amountOutMin,
      to
    );
  }
}




