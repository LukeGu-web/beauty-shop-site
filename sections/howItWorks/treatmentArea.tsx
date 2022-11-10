import styled from '@emotion/styled'
import Image from 'next/image'
import { urlFor } from 'lib/sanity'

const Wrapper = styled.div``

const Title = styled.h3`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  border: 1px solid #000;
  padding: 5%;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ContentDescription = styled.p``

export type treatmentAreasProps = {
  areaTitle: string
  contentTitle: string
  description: string
  imageSrc: string
}

export function TreatmentArea({
  areaTitle,
  contentTitle,
  description,
  imageSrc,
}: treatmentAreasProps) {
  return (
    <Wrapper>
      <Title>{areaTitle}</Title>
      <InnerWrapper>
        <ContentWrapper>
          <h4>{contentTitle}</h4>
          <ContentDescription>{description}</ContentDescription>
        </ContentWrapper>
        <ImageWrapper>
          <Image
            alt="treatment area image"
            width={480}
            height={695}
            src={urlFor(imageSrc).url()}
          />
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}
