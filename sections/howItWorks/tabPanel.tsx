import styled from '@emotion/styled'
import Image from 'next/image'

const TabWrapper = styled.div``
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 0px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`
const Description = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 16rem;
  overflow-y: scroll;
`
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface TabPanelProps {
  index: number
  selectedId: number
  description: string
  image: string
}

export function TabPanel(props: TabPanelProps) {
  const { selectedId, index, description, image } = props

  return (
    <TabWrapper
      role="tabpanel"
      hidden={selectedId !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {selectedId === index && (
        <ContentWrapper>
          <Description>{description}</Description>
          <ImageWrapper>
            <Image alt="tab image" width={480} height={280} src={image} />
          </ImageWrapper>
        </ContentWrapper>
      )}
    </TabWrapper>
  )
}

export function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}
