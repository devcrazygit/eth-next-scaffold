import fs from "fs";

export const writeContractsAbi = (contractName: string, address: string) => {
  const outputFile: fs.PathLike = "../lib/contracts/hardhat_contracts.json";
  const abifile: fs.PathLike = `./artifacts/contracts/${contractName}.sol/${contractName}.json`;

  const abi = JSON.parse(fs.readFileSync(abifile).toString().trim()).abi;

  let contractJson: any = {};
  if (fs.existsSync(outputFile)) {
    contractJson = JSON.parse(fs.readFileSync(outputFile).toString().trim());
  }
  contractJson[contractName] = {
    address,
    abi,
  };
  fs.writeFileSync(outputFile, JSON.stringify(contractJson));
};
