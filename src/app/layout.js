import { Poppins } from 'next/font/google'
import "./globals.css"
import Header from './components/header'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "test",
  description: "test-project",
};

export default function RootLayout({ children }) {
  return <>
    <html lang="en">
      <body className="bg-indigo-200">
        <div className={poppins.className}>

          <Header/>    

          <main className="h-screen">
          {children}
          </main>
        </div>
      </body>
    </html>
  </>
}
