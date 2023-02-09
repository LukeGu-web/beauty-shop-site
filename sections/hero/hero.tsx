import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from 'lib/sanity'
import { ContainedButton, OutlinedButton } from 'components/button/button'
import {
  SectionWrapper,
  SectionInnerWrapper,
  ContentWrapper,
  ContentTitle,
  ContentDescription,
  ContentButtonGroup,
  LinkButtonWrapper,
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
            <Link href={leftButtonLink || ''}>
              <LinkButtonWrapper>
                <ContainedButton>{leftButtonLabel}</ContainedButton>
              </LinkButtonWrapper>
            </Link>
            <Link href={rightButtonLink || ''}>
              <a>
                <OutlinedButton>{rightButtonLabel}</OutlinedButton>
              </a>
            </Link>
          </ContentButtonGroup>
        </ContentWrapper>
      </SectionInnerWrapper>
      <ImageWrapper>
        {imageSrc && (
          <Image
            alt="Hero image"
            width={733}
            height={550}
            layout="intrinsic"
            src={urlFor(imageSrc).url()}
          />
        )}
      </ImageWrapper>
    </SectionWrapper>
  )
}
