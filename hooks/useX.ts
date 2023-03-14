import { useCallback } from "react";
import { useAccount } from "wagmi";

export default function useX(): () => void {
  const { isConnected } = useAccount();

  return useCallback(() => {
    if (!isConnected) return;
    alert("do action on login");
  }, [isConnected]);
}
