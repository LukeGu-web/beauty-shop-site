import styled from '@emotion/styled'
import { OutlinedButton } from 'components/button/button'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export const SectionWrapper = styled.div`
  background-color: #fff5f0;
  padding: 1.5rem;
`

export const SectionInnerWrapper = styled.div`
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
`

export const ContentWrapper = styled.div``

export const ContentTitle = styled.h2``

export const ContentDescription = styled.p``

export const VideoWrapper = styled.div``

export function About() {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <ContentWrapper>
          <ContentTitle>Anti-Wrinkle vs. Dermal Filler</ContentTitle>
          <ContentDescription>
            What are Anti-Wrinkle and Dermal Filler Cosmetic Injectable
            treatments and what can they do for you? Our Global Medical Director
            Dr. Jonathan Hopkirk explains the difference between the two, the
            benefits of each, and the common treatment areas.
            <br />
            <br />
            Laser Clinics is the largest aesthetic clinic company globally and
            our Medical Team of Doctors and Registered Nurses will provide a
            tailored treatment plan to you. With over 200 clinics globally, we
            deliver more treatments and the best results.
          </ContentDescription>
          <OutlinedButton>BOOK A COMPLIMENTARY CONSULTATION</OutlinedButton>
        </ContentWrapper>
        <VideoWrapper>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=RWr8XeBUxTU"
            controls
            width="100%"
          />
        </VideoWrapper>
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
