import styled from '@emotion/styled'
import Image from 'next/image'

export const TabWrapper = styled.div``
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Description = styled.p`
  width: 40%;
  margin: 0 4rem;
`
export const ImageWrapper = styled.div``

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}
