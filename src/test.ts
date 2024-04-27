import { ethers } from "ethers";

import { _abi, OtherABI } from "./consts";

const privateKey = "your key";

const blockchainData = {
  Avalanche: {
    rpc: "https://api.avax-test.network/ext/bc/C/rpc",
    contract: "0xcD80A198D9AB56c0595224930F5059E5b96e131a",
    chainId: 6,
  },
  Celo: {
    rpc: "https://alfajores-forno.celo-testnet.org",
    contract: "0xCc7fE68Aef8621f45517fa7462a63fEB3DCBebDC",
    chainId: 14,
  },
  BaseSepolia: {
    contract: "0x44C5f49B2Ed31ACA0306476AF9325d4D8b226F9a",
    chainId: 10004,
    rpc: "https://rpc.ankr.com/base_sepolia",
  },
  OptimismSepolia: {
    contract: "0xE0eb3B8dE7e1aD7a22387E4131e07602217DD20f",
    chainId: 10005,
    rpc: "https://rpc.ankr.com/optimism_sepolia",
  },
};

const WormframeContractAddress = blockchainData["BaseSepolia"].contract;

let provider = new ethers.JsonRpcProvider(blockchainData["BaseSepolia"].rpc);

let userWallet = new ethers.Wallet(privateKey, provider);

let contract = new ethers.Contract(WormframeContractAddress, _abi, userWallet);

async function sendNativeToken() {
  const destinationChainId = blockchainData["OptimismSepolia"].chainId;
  const recipient = "0x4aB65FEb7Dc1644Cabe45e00e918815D3acbFa0a";

  const destinationChainContract = blockchainData["OptimismSepolia"].contract;

  const cost = await contract.quoteCrossChainDeposit(destinationChainId);

  console.log("Cost:", cost);
  const amount = ethers.parseEther("0.0169");

  const value = cost + amount;

  console.log("Value:", value);

  // const tx = await contract.sendNativeCrossChainDeposit(
  //   destinationChainId,
  //   destinationChainContract,
  //   recipient,
  //   amount,
  //   {
  //     value: value,
  //     gasLimit: 2_000_000,
  //   }
  // );

  // console.log("Tx:", tx.hash);
}

sendNativeToken();
