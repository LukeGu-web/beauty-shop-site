import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { OutlinedButton } from 'components/button/button'
import { InnerWrapper } from 'sections/shared/shared.styles'
import { segmentText } from './utility'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const SectionInnerWrapper = styled(InnerWrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const ContentWrapper = styled.div``

const ContentTitle = styled.h2``

const ContentDescription = styled.p`
  white-space: pre-line;
`

const MediaWrapper = styled.div``

type halfHalfProps = {
  title: string
  description: string
  buttonLabel: string
  videoSrc?: string
  imageSrc?: string
}

export function HalfHalf({
  title,
  description,
  buttonLabel,
  videoSrc,
  imageSrc,
}: halfHalfProps) {
  console.log(segmentText('A \n B'))
  return (
    <SectionInnerWrapper>
      <ContentWrapper>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{segmentText(description)}</ContentDescription>
        <OutlinedButton>{buttonLabel}</OutlinedButton>
      </ContentWrapper>
      <MediaWrapper>
        {videoSrc && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=RWr8XeBUxTU"
            controls
            width="100%"
          />
        )}
        {imageSrc && (
          <Image alt={title} width={280} height={180} src={imageSrc} />
        )}
      </MediaWrapper>
    </SectionInnerWrapper>
  )
}
