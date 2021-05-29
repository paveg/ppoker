import '../styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default CustomApp
