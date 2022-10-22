import styled from '@emotion/styled'
export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 550px;
  background-color: #c1a19a;
  @media (max-width: var(--tablet-view-breakpoint)) {
    min-height: 480px;
  }
`

export const SectionInnerWrapper = styled.div`
  max-width: 1440px;
  padding: 1.5rem;
  margin: 0 auto;
  z-index: 1;
`

export const ContentWrapper = styled.div`
  width: calc(66.6% - 2rem);
  @media (max-width: var(--tablet-view-breakpoint)) {
    width: calc(100% - 2rem);
  }
`

export const ContentTitle = styled.h1`
  font-weight: normal;
  font-size: 4rem;
  letter-spacing: -1px;
  line-height: 1;
  & > span {
    text-decoration: underline;
    font-style: italic;
  }
  @media (max-width: var(--tablet-view-breakpoint)) {
    font-size: 2rem;
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
`
