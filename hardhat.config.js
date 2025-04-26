require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",

  networks: {
    liskSepolia: {
      url: "https://rpc.sepolia-api.lisk.com",
      chainID: 4202,
      accounts: [PRIVATE_KEY],
    },
  },
};
