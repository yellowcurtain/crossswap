// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IUniswapManage {
  function swap(
    address _tokenIn,
    address _tokenOut,
    uint _amountIn,
    uint _amountOutMin,
    address _to
  ) external;
}
