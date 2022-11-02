import { useState, SyntheticEvent } from 'react'
import styled from '@emotion/styled'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { TabPanel, a11yProps } from './tabPanel'
import { tabsData } from './tabsData'
import { TreatmentArea } from './treatmentArea'

export const SectionWrapper = styled(Wrapper)`
  background-color: #fff5f0;
`

export const SectionInnerWrapper = styled(InnerWrapper)``

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h2``

export function HowItWorks() {
  const [selectedId, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <Title>How it works</Title>
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
            {tabsData.map((item, index) => (
              <Tab
                key={`tab-${index}`}
                label={item.title}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
          {tabsData.map((item, index) => (
            <TabPanel
              key={`tab-${index}`}
              selectedId={selectedId}
              index={index}
              description={item.description}
              image={item.image}
            />
          ))}
        </TabWrapper>
        <TreatmentArea />
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
