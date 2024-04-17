import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "test",
  description: "test-project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
        style={{
          backgroundColor: 'lightyellow'
        }}>
          <p>Header</p>
        </header>
        {children}
        <footer
        style={{
          backgroundColor: 'gray'
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
