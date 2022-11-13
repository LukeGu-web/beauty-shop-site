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

const getQuery = (category: string) => `
    *[_type == "category" && slug.current == "${category}"] {
    name,
    slug,
    }
`

const ProductTemplate: NextPage = ({ categorydata, preview }: any) => {
  const router = useRouter()
  const { category } = router.query

  const query = getQuery(category as string)
  const { data: pd } = usePreviewSubscription(query, {
    initialData: categorydata,
    enabled: preview || router.query.preview !== undefined,
  })

  return (
    <PageLayout title="template" metaDescription="this is template page">
      category page
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
  const query = getQuery(params.category as string)
  const category = await getClient(preview).fetch(query)

  return {
    props: {
      categorydata: category,
      preview,
    },
  }
}

export default ProductTemplate
