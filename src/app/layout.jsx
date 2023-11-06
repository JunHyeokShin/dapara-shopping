import { StoreProvider } from '@/redux/StoreProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import App from '@/components/App'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dapara',
  description: 'Dapara shopping with next.js, mongodb, tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  )
}
