// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./priceConverter.sol";

contract FundMe{
   using PriceConverter for uint256;
   
   uint256 public constant MIN_USD = 50 * 1e18;
   address public immutable i_owner;
   address[] public funders;
   mapping(address=>uint256) public addressToAmountFunded;

   constructor() {
      i_owner = msg.sender;
   }

   function fund() public payable {
    require(msg.value.getConversionRate() >= MIN_USD, "Minimun amount 50INR");
    funders.push(msg.sender);
    addressToAmountFunded[msg.sender] = msg.value;
   }
   
   function withdraw() public onlyOwner{
      for(uint256 idx = 0;idx<funders.length;idx++){
         address funderAddress = funders[idx];
         addressToAmountFunded[funderAddress] = 0;
      }

      funders = new address[](0);

      //transfer
      //payable(msg.sender).transfer(address(this).balance);

      //send
      // bool success = payable(msg.sender).send(address(this).balance);
      // require(success,"Send Failed");

      //call
      (bool callSuccess, ) = payable(msg.sender).call{value:address(this).balance}("");
      require(callSuccess,"Send Failed");
   } 
   
   modifier onlyOwner{
      require(msg.sender == i_owner,"Only owner can call this function");
      _;
   }

   receive() external  payable {
      fund();
   }
   fallback() external payable {
      fund();
   }
}