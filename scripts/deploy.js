const hre = require("hardhat");

async function main() {
    const Voting = await hre.ethers.getContractFactory("Voting");
    const Voting_ = await Voting.deploy(["Nguyen", "Van", "Thanh"], 20);

    await Voting_.waitForDeployment();

    console.log(`Contract address : ${Voting_.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
