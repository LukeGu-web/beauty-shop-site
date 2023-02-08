import { useRouter } from 'next/router'
import { usePreview } from 'lib/sanity.preview'

import { ProductTemplate } from 'components/productTemplate/productTemplate'

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

export const PreviewProductPage = ({ productdata, preview }: any) => {
  const router = useRouter()
  const { category, product } = router.query

  const query = getQuery(product as string)
  const pd = usePreview(null, query)

  return <ProductTemplate data={pd} />
}
