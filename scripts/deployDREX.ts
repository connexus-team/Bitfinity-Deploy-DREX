import { ethers } from "hardhat";

async function main() {
  
  const participant = "Boreal and Connexus";
  const _cnpj8 = 123456;

  const NFT = await ethers.getContractFactory("RealTokenizado");
  const nft = await NFT.deploy(participant,_cnpj8,"0xAaa7cCF1627aFDeddcDc2093f078C3F173C46cA4");

  //const lock = await ethers.deployContract("RealTokenizado", participant,_cnpj8,"0xAaa7cCF1627aFDeddcDc2093f078C3F173C46cA4");
  await nft.deployed();

  //await nft.waitForDeployment();
  console.log("DREX addr", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
