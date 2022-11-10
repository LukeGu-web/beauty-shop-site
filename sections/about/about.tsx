import styled from '@emotion/styled'
import { HalfHalf } from 'sections/shared/halfHalf'
import { Wrapper } from 'sections/shared/shared.styles'

const SectionWrapper = styled(Wrapper)`
  background-color: #fff5f0;
`

type aboutProps = {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
  videoSrc: string
}

export function About(props: aboutProps) {
  return (
    <SectionWrapper>
      <HalfHalf {...props} />
    </SectionWrapper>
  )
}
