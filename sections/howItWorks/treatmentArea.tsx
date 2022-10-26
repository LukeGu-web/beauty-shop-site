import styled from '@emotion/styled'
import Image from 'next/image'

export const Wrapper = styled.div``

export const Title = styled.h3`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  border: 1px solid #000;
  padding: 5%;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentDescription = styled.p``

export function TreatmentArea() {
  return (
    <div>
      <Title>Wrinkle Treatment Areas</Title>
      <InnerWrapper>
        <ContentWrapper>
          <h4>Brow Lift</h4>
          <p>
            Your brows can sometimes appear uneven or asymmetrical. Muscle
            relaxing anti-wrinkle injections can increase facial symmetry and in
            certain cases provide a brow lift.
          </p>
        </ContentWrapper>
        <ImageWrapper>
          <Image
            alt="treatment area image"
            width={480}
            height={695}
            src="https://www.laserclinics.com.au/globalassets/feature/image-maps/wrinkle-image-map3.png"
          />
        </ImageWrapper>
      </InnerWrapper>
    </div>
  )
}
