import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getClient, usePreviewSubscription } from 'lib/sanity'

import { PageLayout } from 'components/pageLayout/pageLayout'
import { About } from 'sections/about/about'
import { Benefit } from 'sections/benefit/benefit'
import { Hero } from 'sections/hero/hero'
import { HowItWorks } from 'sections/howItWorks/howItWorks'
import { Price } from 'sections/price/price'
import { Question } from 'sections/question/question'
import { Result } from 'sections/result/result'

const getQuery = (product: string) => `
  *[_type == "product" && slug.current == "/${product}"] {
    name,
    slug,
    category->,
    heroSection,
    aboutSection,
    benefitSection,
  }
`

const ProductTemplate: NextPage = ({ productdata, preview }: any) => {
  const router = useRouter()
  const { category, product } = router.query

  const query = getQuery(product as string)
  const { data: pd } = usePreviewSubscription(query, {
    initialData: productdata[0],
    enabled: preview || router.query.preview !== undefined,
  })

  console.log('pd: ', pd)

  return (
    <PageLayout title={pd.name} metaDescription="this is template page">
      <Hero {...pd.heroSection} />
      <About {...pd.aboutSection} />
      <Benefit {...pd.benefitSection} />
      <HowItWorks />
      <Price />
      <Result />
      <Question />
    </PageLayout>
  )
}

export async function getServerSideProps({
  params,
  preview = false,
}: {
  params: any
  preview: boolean
}) {
  const query = getQuery(params.product as string)
  const product = await getClient(preview).fetch(query)

  return {
    props: {
      productdata: product,
      preview,
    },
  }
}

export default ProductTemplate
