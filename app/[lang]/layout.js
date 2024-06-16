import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meet Johnny",
  description: "The best text to image AI",
}

export const dynamicParams = false

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh-CN' }, { lang: 'zh-TW' }]
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

