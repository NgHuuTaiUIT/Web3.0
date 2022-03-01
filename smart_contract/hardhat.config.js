// https://eth-ropsten.alchemyapi.io/v2/47vTJP8-dRtpSzgTBE_Sb0uhAd_vvV8J

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      hardhat: {},
      url: "https://eth-rinkeby.alchemyapi.io/v2/47vTJP8-dRtpSzgTBE_Sb0uhAd_vvV8J",
      accounts: [
        "56a8fcbc34c58b6b74539c4fd74202bd7e0df77658ea33f584ccbe28041ba1ec"
      ]
      // saveDeployment: true,
      // gas: 2100000,
      // gasPrice: 8000000000
    }
  }
};
