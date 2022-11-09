import { useState, SyntheticEvent } from 'react'
import styled from '@emotion/styled'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { urlFor } from 'lib/sanity'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { TabPanel, a11yProps } from './tabPanel'
import { TreatmentArea, treatmentAreasProps } from './treatmentArea'

const SectionWrapper = styled(Wrapper)`
  background-color: #fff5f0;
`

const SectionInnerWrapper = styled(InnerWrapper)``

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h2``

type tabItemProps = {
  title: string
  description: string
  imageSrc: string
}

type howItWorksProps = {
  title: string
  items: tabItemProps[]
  treatmentAreas: treatmentAreasProps
}

export function HowItWorks({ title, items, treatmentAreas }: howItWorksProps) {
  const [selectedId, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <Title>{title}</Title>
        <TabWrapper>
          <Tabs
            orientation="vertical"
            value={selectedId}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={{
              borderRight: 1,
              borderColor: 'divider',
              overflow: 'visible',
            }}
          >
            {items.map((item, index) => (
              <Tab
                key={`tab-${index}`}
                label={item.title}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
          {items.map((item, index) => (
            <TabPanel
              key={`tab-${index}`}
              selectedId={selectedId}
              index={index}
              description={item.description}
              image={urlFor(item.imageSrc).url()}
            />
          ))}
        </TabWrapper>
        <TreatmentArea {...treatmentAreas} />
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
