import 'public/assets/font-awesome/css/all.min.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Layout } from 'antd'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LienChungFood',
  icons: {
    icon: '/icon.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <Sidebar />

        {children}
        <Footer />
      </body>
    </html>
  )
}
