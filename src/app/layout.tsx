"use client"

import { PDFContext } from '@/context/PDFContext'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { HTMLAttributes, useState } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [pdfBuffer, setPdfBuffer] = useState<ArrayBuffer | null>(null)
  return (
    <html lang="en">
      <body className={inter.className}>
        <PDFContext.Provider
          value={{ pdfBuffer: pdfBuffer!, setPdfBuffer }}
        >
          <Container>
            {children}
          </Container>
        </PDFContext.Provider>
      </body>
    </html>
  )
}

function Container({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn('p-4 h-full', className)} {...rest}>
      {children}
    </section>
  )
}