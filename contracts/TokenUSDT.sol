// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './TokenBase.sol';

contract TokenUSDT is TokenBase {
  constructor() TokenBase('csUSDT Token', 'csUSDT') {}
}
