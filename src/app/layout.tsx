import type { Metadata } from 'next'
import {Roboto } from 'next/font/google'
import './styles/globals.scss'


import Header from './UI/Header'
import Footer from './UI/Footer'

const roboto = Roboto({subsets: ['latin'], weight: ["100","300","400","500","700","900"]})

export const metadata: Metadata = {
  title: 'Ignat',
  description: 'Sport Wear Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}><Header/><div className='container'>{children}</div><Footer/></body>
    </html>
  )
}
