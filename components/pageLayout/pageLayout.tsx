import { ReactNode } from 'react'
import Head from 'next/head'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

interface PageLayoutInterface {
  title: string
  metaDescription: string
  children: ReactNode
}

export function PageLayout({
  title,
  metaDescription,
  children,
}: PageLayoutInterface) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}
