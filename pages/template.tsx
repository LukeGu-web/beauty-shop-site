import { PageLayout } from 'components/pageLayout/pageLayout'
import type { NextPage } from 'next'
import { About } from 'sections/about/about'
import { Benefit } from 'sections/benefit/benefit'
import { Hero } from 'sections/hero/hero'
import { HowItWorks } from 'sections/howItWorks/howItWorks'

const Home: NextPage = () => {
  return (
    <PageLayout title="template" metaDescription="this is template page">
      <Hero />
      <About />
      <Benefit />
      <HowItWorks />
      <p>this is template page</p>
    </PageLayout>
  )
}

export default Home
