import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { client } from 'lib/sanity.client'
import { usePreview } from 'lib/sanity.preview'

import { PageLayout } from 'components/pageLayout/pageLayout'

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
  const pd = usePreview(null, query)

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
  if (preview) {
    return { props: { preview } }
  }

  const category = await client.fetch(query)

  return {
    props: {
      categorydata: category,
      preview,
    },
  }
}

export default ProductTemplate
