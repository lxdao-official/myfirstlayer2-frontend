import '../common/global.css'
import getTheme from '../common/theme'
import { ThemeProvider } from '@mui/material/styles'
import {
	RainbowKitProvider,
	getDefaultWallets,
	lightTheme,
	midnightTheme,
} from '@rainbow-me/rainbowkit'

/* RainbowKit imports */
import '@rainbow-me/rainbowkit/styles.css'
import { getAccount } from '@wagmi/core'
import { NextIntlProvider } from 'next-intl'
import Script from 'next/script'
import { createContext } from 'react'
import { useMemo, useState } from 'react'
import { WagmiConfig, chain, configureChains, createClient } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { scroll } from 'viem/chains'
/* RainbowKit variables */

const { chains, provider } = configureChains(
	[
		chain.optimismGoerli,
		chain.arbitrumGoerli,
		{
			id: scroll.id,
			name: scroll.name,
			network: scroll.network,
			nativeCurrency: scroll.nativeCurrency,
			rpcUrls: {
				public: scroll.rpcUrls.public.http[0],
				default: scroll.rpcUrls.public.http[0],
			},
			blockExplorers: scroll.blockExplorers,
			testnet: false,
			multicall: scroll.contracts.multicall3,
		},
	],
	[publicProvider()]
)
const { connectors } = getDefaultWallets({
	appName: 'My First Layer2',
	chains,
})
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})
/* RainbowKit variables */

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function App({ Component, pageProps }) {
	const [mode, setMode] = useState('light')
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)
	const theme = getTheme(mode)

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				chains={chains}
				theme={lightTheme({
					accentColor: '#000',
					accentColorForeground: 'white',
					borderRadius: 'large',
					fontStack: 'system',
					overlayBlur: 'small',
					selectionColor: '#000',
					modalBorder: '1px solid #fff',
				})}
			>
				<NextIntlProvider messages={pageProps.messages}>
					<ColorModeContext.Provider value={colorMode}>
						<ThemeProvider theme={theme}>
							<Component {...pageProps} />
							<Script src="https://cdn.jsdelivr.net/npm/donate3-sdk@1.0.43/dist/webpack/bundle.js" />
						</ThemeProvider>
					</ColorModeContext.Provider>
				</NextIntlProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}
