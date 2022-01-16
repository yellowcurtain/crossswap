// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './TokenBase.sol';

contract TokenUSDC is TokenBase {
  constructor() TokenBase('csUSDC Token', 'csUSDC') {}
}
