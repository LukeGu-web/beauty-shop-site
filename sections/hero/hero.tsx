import Image from 'next/image'
import { urlFor } from 'lib/sanity'
import { ContainedButton, OutlinedButton } from 'components/button/button'
import {
  SectionWrapper,
  SectionInnerWrapper,
  ContentWrapper,
  ContentTitle,
  ContentDescription,
  ContentButtonGroup,
  ImageWrapper,
} from './hero.styles'

type heroProps = {
  title: string
  description: string
  imageSrc: string
  leftButtonLabel: string
  leftButtonLink: string
  rightButtonLabel: string
  rightButtonLink: string
}

export function Hero({
  title,
  description,
  imageSrc,
  leftButtonLabel,
  leftButtonLink,
  rightButtonLabel,
  rightButtonLink,
}: heroProps) {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <ContentWrapper>
          <ContentTitle>{title}</ContentTitle>
          <ContentDescription>{description}</ContentDescription>
          <ContentButtonGroup>
            <ContainedButton>{leftButtonLabel}</ContainedButton>
            <OutlinedButton>{rightButtonLabel}</OutlinedButton>
          </ContentButtonGroup>
        </ContentWrapper>
      </SectionInnerWrapper>
      <ImageWrapper>
        <Image
          alt="Hero image"
          width={733}
          height={550}
          layout="intrinsic"
          src={urlFor(imageSrc).url()}
        />
      </ImageWrapper>
    </SectionWrapper>
  )
}
