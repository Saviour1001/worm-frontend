import { ethers } from "ethers";

const WormframeContractAddress = "0x6C53Df4624a68185b1b9F54FCF29c8Ca6D2452BA";

import { WormFrameABI } from "./consts";

const privateKey =
  "0x0efac52d7563cc7c585e029fa44cd97ed39c39016902a7f141cd278f9452b82b";

let provider = new ethers.JsonRpcProvider(
  "https://api.avax-test.network/ext/bc/C/rpc"
);

let userWallet = new ethers.Wallet(privateKey, provider);

let contract = new ethers.Contract(
  WormframeContractAddress,
  WormFrameABI,
  userWallet
);

const owner = await contract.owner();
console.log("Owner:", owner);

async function getQuote(chainId: number) {
  const quote = await contract.quoteCrossChainDeposit(chainId);
  console.log("Quote:", quote);
}

async function useWormframe() {
  const destinationChainId = 4;
  const recipient = userWallet.address;
  const targetTokenAddress = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";
  const amount = ethers.parseEther("0.1");

  const tx = await contract.useWormframe({
    sendInfos: [["4", "10000000000000000"]],
    receiver: recipient,
    targetToken: targetTokenAddress,
  });

  console.log("Tx:", tx);
}

useWormframe();
