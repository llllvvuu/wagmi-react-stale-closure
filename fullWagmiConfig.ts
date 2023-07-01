import { connectorsForWallets } from "@rainbow-me/rainbowkit"
import {
  argentWallet,
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  ledgerWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  trustWallet,
  walletConnectWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets"
import { createConfig } from "wagmi"

import { chains, publicClient } from "./baseWagmiConfig"

const PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "id"

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({
        chains,
        projectId: PROJECT_ID,
      }),
      coinbaseWallet({
        appName: "Alkimiya",
        chains,
      }),
      argentWallet({
        chains,
        projectId: PROJECT_ID,
      }),
      ledgerWallet({
        chains,
        projectId: PROJECT_ID,
      }),
      okxWallet({
        chains,
        projectId: PROJECT_ID,
      }),
      phantomWallet({ chains }),
      rabbyWallet({ chains }),
      rainbowWallet({
        chains,
        projectId: PROJECT_ID,
      }),
      safeWallet({ chains }),
      trustWallet({
        chains,
        projectId: PROJECT_ID,
      }),
      walletConnectWallet({
        chains,
        projectId: PROJECT_ID,
      }),
      zerionWallet({
        chains,
        projectId: PROJECT_ID,
      }),
    ],
  },
])

export const fullWagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
