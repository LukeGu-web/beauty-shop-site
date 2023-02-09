import { useState, SyntheticEvent } from 'react'
import styled from '@emotion/styled'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { urlFor } from 'lib/sanity'
import useWindowSize from 'hooks/useWindowSize'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { TabPanel, a11yProps } from './tabPanel'
import { TreatmentArea, treatmentAreasProps } from './treatmentArea'

const SectionWrapper = styled(Wrapper)`
  background-color: #fff5f0;
`

const SectionInnerWrapper = styled(InnerWrapper)``

type TabWrapperProps = {
  orientation: string
}
const TabWrapper = styled.div<TabWrapperProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === 'horizontal' ? 'column' : 'row'};
  align-items: center;
  padding: 1rem;
`

const Title = styled.h2``

type tabItemProps = {
  name: string
  description: string
  imageSrc: string
}

type howItWorksProps = {
  title: string
  items: tabItemProps[]
  treatmentAreas: treatmentAreasProps
}

export function HowItWorks({ title, items, treatmentAreas }: howItWorksProps) {
  const size = useWindowSize()

  const tabOrientation = size.width < 767 ? 'horizontal' : 'vertical'

  const [selectedId, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const styles =
    tabOrientation === 'vertical'
      ? {
          borderRight: 1,
          borderColor: 'divider',
          marginRight: '1rem',
        }
      : {}

  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <Title>{title}</Title>
        <TabWrapper orientation={tabOrientation}>
          <Tabs
            orientation={tabOrientation}
            value={selectedId}
            onChange={handleChange}
            aria-label="How it works tabs"
            variant="fullWidth"
            sx={{
              overflow: 'visible',
              ...styles,
            }}
          >
            {items &&
              items.map((item, index) => (
                <Tab
                  key={`tab-${index}`}
                  label={item.name}
                  wrapped
                  {...a11yProps(index)}
                />
              ))}
          </Tabs>
          {items &&
            items.map((item, index) => (
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
