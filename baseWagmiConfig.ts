import { connectorsForWallets } from "@rainbow-me/rainbowkit"
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets"
import { configureChains, createConfig } from "wagmi"
import { mainnet, goerli } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

export const { chains, publicClient } = configureChains(
  [mainnet, goerli],
  [publicProvider()],
)

const connectors = connectorsForWallets([
  {
    groupName: "Loading more wallets...",
    wallets: [injectedWallet({ chains })],
  },
])

export const baseWagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
