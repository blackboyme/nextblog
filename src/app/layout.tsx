import type { Metadata } from "next";
import localFont from 'next/font/local'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Header from '@/components/Header'
import { Providers } from "./providers"

config.autoAddCss = false  // 防止图标闪烁


const pingfang = localFont({
  src: '/fonts/PingFangSC-Medium.woff2',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Gmoonlight1-幸好你也喜欢秋天",
  description: "Generated by create next app",
};


config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header navTitle={metadata.title}  />
          {children}
        </Providers>
      </body>
    </html>
  )
}
