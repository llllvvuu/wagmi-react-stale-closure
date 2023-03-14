import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createClient, goerli, mainnet } from "wagmi";
import { bsc, bscTestnet, polygon, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export const { chains, provider } = configureChains<Chain>(
  [mainnet, goerli, bscTestnet, bsc, polygon, polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Acme Inc.",
  chains,
});

export const client = createClient({
  autoConnect: true,
  provider,
  connectors,
});
