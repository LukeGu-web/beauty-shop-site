import styled from '@emotion/styled'
import { ContainedButton } from 'components/button/button'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { HalfHalf } from 'sections/shared/halfHalf'
import { ImageCarousel } from './imageCarousel'
import { resultData } from './resultData'

const SectionWrapper = styled(Wrapper)`
  background-color: #fff5f0;
`

const SectionInnerWrapper = styled(InnerWrapper)``

const SectionTitle = styled.h2`
  text-align: center;
`

const SectionDescription = styled.p`
  width: 50%;
  margin: 0 auto;
  white-space: pre-line;
  text-align: center;
  @media (max-width: 767px) {
    width: 90%;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Result() {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <SectionTitle>Tailored Results</SectionTitle>
        <SectionDescription>
          Over a half a million treatments have been performed by our highly
          trained Registered Nurses and Doctors.
        </SectionDescription>
        <ImageCarousel />
        <ButtonWrapper>
          <ContainedButton>See more results</ContainedButton>
        </ButtonWrapper>
      </SectionInnerWrapper>
      <HalfHalf {...resultData} />
    </SectionWrapper>
  )
}
