import styled from '@emotion/styled'
import Link from 'next/link'
import { ContainedButton } from 'components/button/button'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { HalfHalf, halfHalfProps } from 'sections/shared/halfHalf'
import {
  ImageCarousel,
  slideProp,
} from '../../components/imageCarousel/imageCarousel'

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
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

type resultProps = {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
  team: halfHalfProps
  carousel: slideProp[]
}

export function Result({
  title,
  description,
  buttonLabel,
  buttonLink,
  team,
  carousel,
}: resultProps) {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
        <ImageCarousel slides={carousel} />
        <ButtonWrapper>
          <Link href={buttonLink || ''}>
            <a>
              <ContainedButton>{buttonLabel}</ContainedButton>
            </a>
          </Link>
        </ButtonWrapper>
      </SectionInnerWrapper>
      <HalfHalf {...team} />
    </SectionWrapper>
  )
}
