import '@suiet/wallet-kit/style.css'
import { WalletProvider } from '@suiet/wallet-kit'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  )
}
