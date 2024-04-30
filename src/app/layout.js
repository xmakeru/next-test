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

        {children}

        {/* Footer */}

        <footer>
          <div className="flex justify-center">
            <p>Footer</p>
          </div>
        </footer>
      </body>
    </html>
  </>
}
