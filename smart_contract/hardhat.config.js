/** @format */

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/MO_Drjp9FZt6hleONRQOYMV3cBOWtFFO",
      accounts: [
        "c3df5e0c383933c862443fb3a8bccd689719a97b2c9eaceffb0fe930a50ad088",
      ],
    },
  },
};
