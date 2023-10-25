export const CONTRACT_MAP = {
  420: { address: '0x1188bd52703cc560a0349d5a80dad3d8c799e103', rpc: 'https://opt-goerli.g.alchemy.com/v2/0nH0WXQaohzjhfuOIsjzYWj6MnJpl_4E', facute: 'https://faucet.quicknode.com/optimism/goerli' },
  421613: { address: '0x1188Bd52703Cc560A0349D5a80DAD3d8c799E103', rpc: 'https://arb-goerli.g.alchemy.com/v2/a-yu04ERGsxtgYyZ3BuioJ09VSZv4FQm', facute: 'https://faucet.quicknode.com/arbitrum/goerli' },
};

export const networkList = {
  zh: {
    main: [],
    test: [
      {
        chainId: 420,
        name: 'Optimism Goerli',
        desc: 'Optimism Goerli 是一个 Layer 2 乐观 Rollup 网络，通过利用以太坊的强大安全性，来降低成本和延迟。',
      },
      {
        chainId: 421613,
        name: 'Arbitrum Goerli',
        desc: 'Arbitrum Goerli Rollup Testnet(421613)现在已成为 Arbitrum 的主要稳定测试网。从 2022 年年底开始，开发人员和验证节点运营商现在可以使用 Infura、QuickNode 和 Alchemy 来与 Arbitrum One(mainnet)进行交互,包括管理员控制权。',
      },
    ],
  },
  en: {
    main: [],
    test: [
      {
        chainId: 420,
        name: 'Optimism Goerli',
        desc: 'Optimism Goerli is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum whilereducing its cost and latency',
      },
      {
        chainId: 421613,
        name: 'Arbitrum Goerli',
        desc: 'Officially the Nitro Goerli Rollup Testnet (421613), is now the primary, stable Arbitrum testnet moving forward.  As of late 2022, developers and validator node runners can now use Infura, QuickNode, and Alchemy,  to interact with Arbitrum One, which is in mainnet beta, including the admin controls.',
      },
    ],
  },
};

// export const networkList = {
//     main: [{
//         chainId: 10,
//         name: 'OP Mainnet',
//         desc: 'OP Mainnet is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum whilereducing its cost and latency'
//     }],
//     test: [{
//         chainId: 420,
//         name: 'Optimism Goerli',
//         desc: 'Optimism Goerli is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum whilereducing its cost and latency'
//     }, {
//         chainId: 421613,
//         name: 'Arbitrum Goerli',
//         desc: 'Arbitrum Goerli is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum whilereducing its cost and latency'
//     }]
// }
