import { Navigation } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Quizopia - The marvel quiz',
  description: 'Website for all the Marvel fans',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black font-sans text-white'>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
