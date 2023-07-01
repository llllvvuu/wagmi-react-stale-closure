import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { WagmiConfig } from "wagmi";

import { baseWagmiConfig, chains } from "../baseWagmiConfig"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [wagmiConfig, setWagmiConfig] = useState(baseWagmiConfig)
  const [wagmiKey, setWagmiKey] = useState(0)

  // works if you comment out this whole thing:
  useEffect(() => {
    let isMounted = true
    import("../fullWagmiConfig")
      .then(({ fullWagmiConfig }) => {
        if (isMounted) {
          setWagmiConfig(fullWagmiConfig)
          // works if you uncomment:
          // setWagmiKey(1)
        }
      })
    return () => { isMounted = false }
  }, [])


  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default MyApp;
