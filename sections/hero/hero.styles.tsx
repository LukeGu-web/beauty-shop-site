import styled from '@emotion/styled'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'

export const SectionWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 550px;
  background-color: #c1a19a;
  @media (max-width: 1023px) {
    min-height: 480px;
  }
`

export const SectionInnerWrapper = styled(InnerWrapper)`
  z-index: 1;
`

export const ContentWrapper = styled.div`
  width: calc(66.6% - 2rem);
  @media (max-width: 1023px) {
    width: calc(100% - 2rem);
  }
`

export const ContentTitle = styled.h1`
  & > span {
    text-decoration: underline;
    font-style: italic;
  }
`

export const ContentDescription = styled.p``

export const ContentButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
`

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  overflow: hidden;
`
