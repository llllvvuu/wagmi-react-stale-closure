import { useCallback, useEffect } from "react";
import { useAccount } from "wagmi";

export default function useX(): () => void {
  const { isConnected } = useAccount();

  useEffect(() => console.log({ isConnected }), [isConnected]);

  return useCallback(() => {
    alert("do action on login");
  }, []);
}
