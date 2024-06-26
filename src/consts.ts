export const WormFrameABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_wormholeRelayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "_tokenBridge",
        type: "address",
        internalType: "address",
      },
      { name: "_wormhole", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "chainFrameFee",
    inputs: [{ name: "", type: "uint16", internalType: "uint16" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "commonFrameFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "estimateFees",
    inputs: [{ name: "targetChainID", type: "uint16", internalType: "uint16" }],
    outputs: [{ name: "nativeFee", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quoteCrossChainDeposit",
    inputs: [{ name: "targetChain", type: "uint16", internalType: "uint16" }],
    outputs: [{ name: "cost", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "receiveWormholeMessages",
    inputs: [
      { name: "payload", type: "bytes", internalType: "bytes" },
      {
        name: "additionalVaas",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      { name: "sourceChain", type: "uint16", internalType: "uint16" },
      { name: "deliveryHash", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendNativeCrossChainDeposit",
    inputs: [
      { name: "targetChain", type: "uint16", internalType: "uint16" },
      {
        name: "targetHelloToken",
        type: "address",
        internalType: "address",
      },
      { name: "recipient", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "cost", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setFrameFee",
    inputs: [
      {
        name: "_commonFrameFee",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "chainIds", type: "uint16[]", internalType: "uint16[]" },
      { name: "fees", type: "uint256[]", internalType: "uint256[]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRegisteredSender",
    inputs: [
      { name: "sourceChain", type: "uint16", internalType: "uint16" },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tokenBridge",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ITokenBridge",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "useWormframe",
    inputs: [
      {
        name: "sendInfos",
        type: "tuple[]",
        internalType: "struct WormFrame.SendInfo[]",
        components: [
          {
            name: "targetChainId",
            type: "uint16",
            internalType: "uint16",
          },
          { name: "amount", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "receiver", type: "address", internalType: "address" },
      { name: "targetToken", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "wormhole",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IWormhole" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormholeRelayer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormholeRelayer",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "NotAnEvmAddress",
    inputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

export const OtherABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wormholeRelayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenBridge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wormhole",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "NotAnEvmAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "additionalVaas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "sourceAddress",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "deliveryHash",
        type: "bytes32",
      },
    ],
    name: "receiveWormholeMessages",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "sendCrossChainDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendNativeCrossChainDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "sourceAddress",
        type: "bytes32",
      },
    ],
    name: "setRegisteredSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteCrossChainDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBridge",
    outputs: [
      {
        internalType: "contract ITokenBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormholeRelayer",
    outputs: [
      {
        internalType: "contract IWormholeRelayer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_wormholeRelayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "_tokenBridge",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wormhole",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "quoteCrossChainDeposit",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "cost",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "receiveWormholeMessages",
    inputs: [
      {
        name: "payload",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "additionalVaas",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "sourceChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "deliveryHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "sendCrossChainDeposit",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "targetHelloToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "sendNativeCrossChainDeposit",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "targetHelloToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setRegisteredSender",
    inputs: [
      {
        name: "sourceChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tokenBridge",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ITokenBridge",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormhole",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormhole",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormholeRelayer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormholeRelayer",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "NotAnEvmAddress",
    inputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
] as const;
