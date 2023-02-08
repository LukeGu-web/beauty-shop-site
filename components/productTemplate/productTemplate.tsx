import { PageLayout } from 'components/pageLayout/pageLayout'
import { About } from 'sections/about/about'
import { Benefit } from 'sections/benefit/benefit'
import { Hero } from 'sections/hero/hero'
import { HowItWorks } from 'sections/howItWorks/howItWorks'
import { Price } from 'sections/price/price'
import { Question } from 'sections/question/question'
import { Result } from 'sections/result/result'

export const ProductTemplate = (data: any) => (
  <PageLayout title={data.name} metaDescription="this is template page">
    <Hero {...data.heroSection} />
    <About {...data.aboutSection} />
    <Benefit {...data.benefitSection} />
    <HowItWorks {...data.howItWorksSection} />
    <Price {...data.priceSection} />
    <Result {...data.resultSection} />
    <Question questions={data.questionSection?.questions} />
  </PageLayout>
)
