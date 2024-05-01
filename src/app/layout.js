import { Inter } from "next/font/google";
import "./globals.css"
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "test",
  description: "test-project",
};

export default function RootLayout({ children }) {
  return <>
    <html lang="en">
      <body className="">

        <Header/>    

        <main className="h-screen">
        {children}
        </main>

        <footer>
          <div className="flex justify-center items-center h-16">
            <p>Footer</p>
          </div>
        </footer>
      </body>
    </html>
  </>
}
