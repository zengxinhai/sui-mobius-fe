import '@suiet/wallet-kit/style.css'
import { WalletProvider } from '@suiet/wallet-kit'
import { ThemeProvider } from 'src/styles/theme'
import { MainLayout } from 'src/layouts/MainLayout'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </WalletProvider>
  )
}
