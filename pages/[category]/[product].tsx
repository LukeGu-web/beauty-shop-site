import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { PageLayout } from 'components/pageLayout/pageLayout'
import { About } from 'sections/about/about'
import { Benefit } from 'sections/benefit/benefit'
import { Hero } from 'sections/hero/hero'
import { HowItWorks } from 'sections/howItWorks/howItWorks'
import { Price } from 'sections/price/price'
import { Question } from 'sections/question/question'
import { Result } from 'sections/result/result'

const ProductTemplate: NextPage = () => {
  const router = useRouter()
  const { category, product } = router.query
  return (
    <PageLayout title="template" metaDescription="this is template page">
      <Hero />
      <About />
      <Benefit />
      <HowItWorks />
      <Price />
      <Result />
      <Question />
    </PageLayout>
  )
}

export default ProductTemplate
