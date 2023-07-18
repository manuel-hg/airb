"use client";
import './globals.css'
import '../../styles/global.css'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb APP',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader 
      color="#2299DD"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"/>
        {children}
        </body>
    </html>
  )
}
