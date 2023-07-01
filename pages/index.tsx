import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NextPage } from "next";
import { useAccount } from "wagmi";

const HomePage: NextPage = ({}) => {
  // works if you uncomment:
  // useAccount({ onConnect: () => 0 });

  // makes no difference:
  // useAccount();
  return <ConnectButton />;
};

export default HomePage;
