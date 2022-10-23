import styled from '@emotion/styled'
import { InnerWrapper, Wrapper } from 'sections/general.styles'
import { benefitData } from './benefitData'
import { BenefitItem } from './benefitItem'
export const SectionWrapper = styled(Wrapper)``

export const SectionInnerWrapper = styled(InnerWrapper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
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

export function Benefit() {
  return (
    <SectionWrapper>
      <ContentTitle>Benefits of Anti Wrinkle Injectables</ContentTitle>
      <SectionInnerWrapper>
        {benefitData.map((item) => (
          <BenefitItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
