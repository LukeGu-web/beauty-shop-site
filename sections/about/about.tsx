import styled from '@emotion/styled'
import { OutlinedButton } from 'components/button/button'
import dynamic from 'next/dynamic'
import { HalfHalf } from 'sections/shared/halfHalf'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { aboutData } from './aboutData'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export const SectionWrapper = styled(Wrapper)`
  background-color: #fff5f0;
`

export const SectionInnerWrapper = styled(InnerWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const ContentWrapper = styled.div``

export const ContentTitle = styled.h2``

export const ContentDescription = styled.p``

export const VideoWrapper = styled.div``

export function About() {
  return (
    <SectionWrapper>
      <HalfHalf {...aboutData} />
    </SectionWrapper>
  )
}
