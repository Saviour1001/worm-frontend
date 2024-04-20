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

async function useSendNativeCrossChainDeposit() {
  const destinationChainId = 4;
  const recipient = "0xdE38fe35D322a6c1331F8836e25F650BE93F35f3";
  const amount = ethers.parseEther("0.01");
  const targetTokenAddress = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";

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

  // const tx = await contract.sendNativeCrossChainDeposit({
  //     value: ethers
  // },
  //   destinationChainId,
  //   targetTokenAddress,
  //   recipient,
  //   amount
  // );

  //   console.log("Tx:", tx);
}

// console.log(userWallet.address);

// useSendNativeCrossChainDeposit();
