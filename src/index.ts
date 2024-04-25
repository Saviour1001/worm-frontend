import { ethers } from "ethers";

const WormframeContractAddress = "0x830566dc7d79114ec3A75B346fbCAbB7980dA403";

import { WormFrameABI } from "./consts";

const privateKey = "YOUR KEY HERE";

let provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/optimism");

let userWallet = new ethers.Wallet(privateKey, provider);

console.log("Address:", userWallet.address);

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

// useWormframe();

async function useSendNativeCrossChainDeposit() {
  const destinationChainId = 14;
  const recipient = "0xdE38fe35D322a6c1331F8836e25F650BE93F35f3";
  const amount = ethers.parseEther("0.01");
  const targetTokenAddress = "0x898471a82737dFFfB61915F9e8381e279076D72b";

  const estimateFees = await contract.estimateFees(destinationChainId);
  console.log("Estimate Fees:", estimateFees);

  const value = amount + estimateFees;
  console.log("Value:", value);

  const tx = await contract.sendNativeCrossChainDeposit(
    destinationChainId,
    targetTokenAddress,
    recipient,
    amount,
    { value: value }
  );

  console.log("Tx:", tx);
}

getQuote(4);
// useSendNativeCrossChainDeposit();
