import styled from '@emotion/styled'
import { urlFor } from 'lib/sanity'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { benefitData } from './benefitData'
import { BenefitItem } from './benefitItem'
export const SectionWrapper = styled(Wrapper)``

export const SectionInnerWrapper = styled(InnerWrapper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`

export const ContentTitle = styled.h2`
  max-width: 1440px;
  margin: 0 auto;
`
type benefitItemProps = {
  title: string
  description: string
  imageSrc: string
}

type benefitProps = {
  title: string
  items: benefitItemProps[]
}

export function Benefit({ title, items }: benefitProps) {
  return (
    <SectionWrapper>
      <ContentTitle>{title}</ContentTitle>
      <SectionInnerWrapper>
        {items.map((item) => (
          <BenefitItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={urlFor(item.imageSrc).url()}
          />
        ))}
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
