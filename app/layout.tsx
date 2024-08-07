import type { Metadata } from 'next'
import { Darker_Grotesque } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'Codviser - Expert Web and Mobile App Development',
  description: 'Codviser specializes in custom web and mobile app development, helping businesses transform their digital presence with innovative, secure, and scalable solutions. Partner with us to turn your ideas into reality.',
openGraph: {
    title: 'Codviser - Expert Web and Mobile App Development',
  description: 'Codviser specializes in custom web and mobile app development, helping businesses transform their digital presence with innovative, secure, and scalable solutions. Partner with us to turn your ideas into reality.',
  },
}

export const revalidate = 172800; 

const darkerGrotesque = Darker_Grotesque({subsets:["latin"], weight: ['400','500','600','700','800','900']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="G-WMCCRTV2N2" />
      <body className={`bg-bg-img-1 ${darkerGrotesque.className}`}>
      <ToastContainer />
        <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
