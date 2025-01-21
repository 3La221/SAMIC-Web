"use client"
import "./globals.css";
import { Saira  } from 'next/font/google'
import Head from "next/head"; 


const saira = Saira({
  weight:['300'],
  subsets: ['latin']
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" /> 
        <meta name="description" content="SAMIC" />
      </Head>
      <body
        className={`${saira.className}`}
      >
        {children}
      </body>
    </html>
  );
}
