import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import useX from "../hooks/useX";

const HomePage: NextPage = ({}) => {
  const doX = useX();

  const { isConnected } = useAccount({
    onConnect() {
      doX();
    },
  });

  if (isConnected) return <span>connected</span>;

  return <ConnectButton />;
};

export default HomePage;
