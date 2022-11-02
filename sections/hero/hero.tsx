import Image from 'next/image'
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

export function Hero() {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <ContentWrapper>
          <ContentTitle>
            Anti-Wrinkle treatments&nbsp;
            <span>tailored</span>&nbsp;to you
          </ContentTitle>
          <ContentDescription>
            Performed by our experienced Medical Team of Doctors and Registered
            Nurses, Anti-Wrinkle Cosmetic Injectables are a non-invasive, quick,
            affordable, and effective way to help reduce and prevent wrinkle
            formation that provides natural-looking results, creating a
            refreshed and youthful look.
          </ContentDescription>
          <ContentButtonGroup>
            <ContainedButton>BOOK A FREE CONSULTATION</ContainedButton>
            <OutlinedButton>SEE PRICES & PACKAGES</OutlinedButton>
          </ContentButtonGroup>
        </ContentWrapper>
      </SectionInnerWrapper>
      <ImageWrapper>
        <Image
          alt="Hero image"
          width={733}
          height={550}
          layout="intrinsic"
          src={
            'https://www.laserclinics.com.au/contentassets/20f662848d374a3f85cf9244f8d6b583/v2-aw-category-banner-c1a19a.png?width=800&height=600&anchor=Right&mode=crop'
          }
        />
      </ImageWrapper>
    </SectionWrapper>
  )
}
