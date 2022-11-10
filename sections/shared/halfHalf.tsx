import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'

import { OutlinedButton } from 'components/button/button'
import { InnerWrapper } from 'sections/shared/shared.styles'
import { urlFor } from 'lib/sanity'
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

export type halfHalfProps = {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
  videoSrc?: string
  imageSrc?: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

export function HalfHalf({
  title,
  description,
  buttonLabel,
  buttonLink,
  videoSrc,
  imageSrc,
}: halfHalfProps) {
  return (
    <SectionInnerWrapper>
      <ContentWrapper>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{segmentText(description)}</ContentDescription>
        <Link href={buttonLink || ''}>
          <a>
            <OutlinedButton>{buttonLabel}</OutlinedButton>
          </a>
        </Link>
      </ContentWrapper>
      <MediaWrapper>
        {videoSrc && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=RWr8XeBUxTU"
            controls
            width="100%"
          />
        )}
        {Boolean(imageSrc) && (
          <Image
            alt={title}
            width={688}
            height={459}
            src={urlFor(imageSrc).url()}
          />
        )}
      </MediaWrapper>
    </SectionInnerWrapper>
  )
}
