import { NextPage } from "next";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import useX from "../hooks/useX";

const HomePage: NextPage = ({}) => {
  const { connect, connectors } = useConnect();
  const doX = useX();

  const { isConnected } = useAccount({
    onConnect() {
      doX();
    },
  });

  if (isConnected) return <span>connected</span>;

  return (
    <button onClick={() => connect({ connector: connectors[0] })}>
      Connect
    </button>
  );
};

export default HomePage;
