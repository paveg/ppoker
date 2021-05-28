import '../styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default CustomApp
