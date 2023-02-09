import type { NextPage } from 'next'
import { client } from 'lib/sanity.client'
import { PreviewSuspense } from 'next-sanity/preview'

import { ProductTemplate } from 'components/productTemplate/productTemplate'
import PreviewProductPage from 'components/previewProductPage/previewProductPage'

const getQuery = (product: string) => `
  *[_type == "product" && slug.current == "/${product}"] {
    name,
    slug,
    category->,
    heroSection,
    aboutSection,
    benefitSection,
    howItWorksSection,
    priceSection,
    resultSection,
    questionSection
  }
`

const ProductTemplatePage: NextPage = ({ productdata, preview }: any) => {
  if (preview) {
    return (
      <PreviewSuspense fallback={<ProductTemplate data={productdata} />}>
        <PreviewProductPage />
      </PreviewSuspense>
    )
  }
  return <ProductTemplate data={productdata} />
}

export async function getServerSideProps({
  params,
  preview = false,
}: {
  params: any
  preview: boolean
}) {
  const query = getQuery(params.product as string)
  if (preview) {
    return { props: { preview } }
  }
  const product = await client.fetch(query)

  return {
    props: {
      productdata: product[0],
      preview,
    },
  }
}

export default ProductTemplatePage
