/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ERC1155MintBurn } from "./ERC1155MintBurn";

export class ERC1155MintBurnFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ERC1155MintBurn> {
    return super.deploy(overrides) as Promise<ERC1155MintBurn>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ERC1155MintBurn {
    return super.attach(address) as ERC1155MintBurn;
  }
  connect(signer: Signer): ERC1155MintBurnFactory {
    return super.connect(signer) as ERC1155MintBurnFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MintBurn {
    return new Contract(address, _abi, signerOrProvider) as ERC1155MintBurn;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_amount",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506116db806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c80634e1273f41161005b5780634e1273f4146102f5578063a22cb4651461046c578063e985e9c5146104a7578063f242432a146104e25761007c565b8062fdd58e1461008157806301ffc9a7146100cc5780632eb2c2d61461011f575b600080fd5b6100ba6004803603604081101561009757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105ba565b60408051918252519081900360200190f35b61010b600480360360208110156100e257600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166105ed565b604080519115158252519081900360200190f35b6102f3600480360360a081101561013557600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561017657600080fd5b82018360208201111561018857600080fd5b803590602001918460208302840111640100000000831117156101aa57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156101fa57600080fd5b82018360208201111561020c57600080fd5b8035906020019184602083028401116401000000008311171561022e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561027e57600080fd5b82018360208201111561029057600080fd5b803590602001918460018302840111640100000000831117156102b257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610652945050505050565b005b61041c6004803603604081101561030b57600080fd5b81019060208101813564010000000081111561032657600080fd5b82018360208201111561033857600080fd5b8035906020019184602083028401116401000000008311171561035a57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156103aa57600080fd5b8201836020820111156103bc57600080fd5b803590602001918460208302840111640100000000831117156103de57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061075d945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610458578181015183820152602001610440565b505050509050019250505060405180910390f35b6102f36004803603604081101561048257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156108a9565b61010b600480360360408110156104bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610942565b6102f3600480360360a08110156104f857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561054557600080fd5b82018360208201111561055757600080fd5b8035906020019184600183028401116401000000008311171561057957600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061097d945050505050565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208181526040808320938352929052205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014156106415750600161064d565b61064a82610a81565b90505b919050565b3373ffffffffffffffffffffffffffffffffffffffff8616148061067b575061067b8533610942565b6106d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806115fe602f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661073c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806115a26030913960400191505060405180910390fd5b61074885858585610acb565b610756858585855a86610e1f565b5050505050565b606081518351146107b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806115d2602c913960400191505060405180910390fd5b6060835167ffffffffffffffff811180156107d357600080fd5b506040519080825280602002602001820160405280156107fd578160200160208202803683370190505b50905060005b84518110156108a15760008086838151811061081b57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085838151811061086b57fe5b602002602001015181526020019081526020016000205482828151811061088e57fe5b6020908102919091010152600101610803565b509392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b3373ffffffffffffffffffffffffffffffffffffffff861614806109a657506109a68533610942565b6109fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611543602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610a67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611518602b913960400191505060405180910390fd5b610a73858585856110c2565b610756858585855a866111d1565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b8051825114610b25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061156d6035913960400191505060405180910390fd5b815160005b81811015610d1757610bba838281518110610b4157fe5b60200260200101516000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110610b9557fe5b60200260200101518152602001908152602001600020546113ee90919063ffffffff16565b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110610c0657fe5b6020026020010151815260200190815260200160002081905550610ca8838281518110610c2f57fe5b60200260200101516000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878581518110610c8357fe5b602002602001015181526020019081526020016000205461146590919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868481518110610cf457fe5b602090810291909101810151825281019190915260400160002055600101610b2a565b508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610dc4578181015183820152602001610dac565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610e03578181015183820152602001610deb565b5050505090500194505050505060405180910390a45050505050565b610e3e8573ffffffffffffffffffffffffffffffffffffffff166114e0565b156110ba5760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610f22578181015183820152602001610f0a565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610f61578181015183820152602001610f49565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610f9d578181015183820152602001610f85565b50505050905090810190601f168015610fca5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b158015610fef57600080fd5b5087f1158015611003573d6000803e3d6000fd5b50505050506040513d602081101561101a57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146110b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f81526020018061162d603f913960400191505060405180910390fd5b505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208181526040808320858452909152902054611101908263ffffffff6113ee16565b73ffffffffffffffffffffffffffffffffffffffff80861660009081526020818152604080832087845282528083209490945591861681528082528281208582529091522054611157908263ffffffff61146516565b73ffffffffffffffffffffffffffffffffffffffff808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b6111f08573ffffffffffffffffffffffffffffffffffffffff166114e0565b156110ba5760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156112d55781810151838201526020016112bd565b50505050905090810190601f1680156113025780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561132557600080fd5b5087f1158015611339573d6000803e3d6000fd5b50505050506040513d602081101561135057600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146110b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a81526020018061166c603a913960400191505060405180910390fd5b60008282111561145f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b6000828201838110156114d957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000813f80158015906114d957507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47014159291505056fe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a264697066735822122089b943d6b9715c7f0f317b7eeee010501c6e3ac42b54d4998614ec06cf370e2464736f6c63430006080033";
