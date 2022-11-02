import styled from '@emotion/styled'
import Image from 'next/image'
export const Wrapper = styled.div``
export const ImageWrapper = styled.div``
export const Title = styled.h4``
export const Description = styled.p``

export interface BenefitItemInterface {
  title: string
  description: string
  image: string
}

export function BenefitItem({
  title,
  description,
  image,
}: BenefitItemInterface) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image alt="Benefit item image" width={63} height={78} src={image} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}
