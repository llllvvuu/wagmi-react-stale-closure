import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import useX from "../hooks/useX";

const HomePage: NextPage = ({}) => {
  const doX = useX();

  useAccount({
    onConnect() {
      doX();
    },
  });

  return <ConnectButton />;
};

export default HomePage;
