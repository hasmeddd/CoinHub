require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
    defaultNetwork: "sepolia",
    networks: {
        hardhat: {},
        sepolia: {
            url: API_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    solidity: {
        version: "0.8.27",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    mocha: {
        timeout: 40000,
    },
};
